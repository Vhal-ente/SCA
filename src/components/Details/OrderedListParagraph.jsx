import ListWithOtherParagraph from "./ListWithOtherParagraph";

export default function OrderedListParagragh({
  sectionTitle,
  sectionNumber = 1,
  children,
  subsections,
}) {
  return (
    <section className="mb-4">
      <h2 className="text-3xl text-primary mb-6">{sectionTitle}</h2>
      <div>{children}</div>

      <ol className="list-none space-y-4 text-base">
        {subsections.map(({ item }, index) => (
          <li key={index} className="leading-relaxed ">
            <div className="flex gap-2">
              <span className="">{`${sectionNumber}.${index + 1}`}</span>
              <div>
                <ListWithOtherParagraph item={item} />
              </div>
            </div>
          </li>
        ))}
      </ol>
      {/* {subsections.map(({ item }, index) => (
        <div key={index} className="mb-6 text-xl">
          <ol className="list-decimal list-outside pl-6 space-y-4">
            <li key={item} className="leading-relaxed">
              <ListWithOtherParagraph item={item} />
            </li>
          </ol>
        </div>
      ))} */}
    </section>
  );
}
