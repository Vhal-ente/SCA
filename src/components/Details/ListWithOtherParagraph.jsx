import React from "react";

export default function ListWithOtherParagraph({ item }) {
  return Array.isArray(item) ? (
    <>
      <p className="mb-2">{item[0]}</p>
      {item.slice(1).map((subText, index) => (
        <p key={index} className="mb-3">
          {Array.isArray(subText)
            ? subText.map((part, i) =>
                typeof part === "string" ? (
                  part
                ) : (
                  <React.Fragment key={i}>{part}</React.Fragment>
                )
              )
            : subText}
        </p>
      ))}
    </>
  ) : (
    <p>{item}</p>
  );
}
