import { Fragment } from "react";

// Inline marks: **bold**, *italic*, and [label](https://link). Text is never
// parsed as HTML, so console content cannot inject markup.
function inline(text, keyPrefix) {
  const parts = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)\s]+\))/g;
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    const key = `${keyPrefix}-${match.index}`;
    if (token.startsWith("**")) parts.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    else if (token.startsWith("*")) parts.push(<em key={key}>{token.slice(1, -1)}</em>);
    else {
      const [, label, href] = token.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
      const safe = /^(https?:|mailto:|\/)/i.test(href);
      parts.push(safe ? <a key={key} href={href} target={href.startsWith("/") ? undefined : "_blank"} rel="noreferrer">{label}</a> : label);
    }
    last = match.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

// Markdown renders the subset the console's editors write: headings,
// paragraphs, bulleted and numbered lists.
export default function Markdown({ source = "", skipTitle = false }) {
  const blocks = [];
  // open is the list or paragraph still collecting lines; a blank line or a
  // different kind of line closes it.
  let open = null;
  const close = () => { if (open) { blocks.push(open); open = null; } };
  source.replace(/\r\n/g, "\n").split("\n").forEach((raw, index) => {
    const line = raw.trim();
    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    const item = line.match(/^(?:([-*])|\d+[.)])\s+(.*)$/);
    if (!line) close();
    else if (heading) {
      close();
      // The page header already shows the document title.
      if (skipTitle && heading[1].length === 1 && !blocks.length) return;
      blocks.push({ type: `h${Math.max(2, heading[1].length)}`, text: heading[2], key: index });
    } else if (item) {
      const type = item[1] ? "ul" : "ol";
      if (open?.type !== type) { close(); open = { type, items: [], key: index }; }
      open.items.push(item[2]);
    } else if (open?.type === "p") open.text += ` ${line}`;
    else { close(); open = { type: "p", text: line, key: index }; }
  });
  close();
  return <>{blocks.map(block => {
    if (block.type === "ul" || block.type === "ol") {
      const List = block.type;
      return <List key={block.key}>{block.items.map((item, i) => <li key={i}>{inline(item, `${block.key}-${i}`)}</li>)}</List>;
    }
    const Tag = block.type;
    return <Fragment key={block.key}><Tag>{inline(block.text, block.key)}</Tag></Fragment>;
  })}</>;
}
