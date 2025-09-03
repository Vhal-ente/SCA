export default function Details({
  sectionTitle,
  subsections,
  textClass = "text-xl",
}) {
  return (
    <section className="mb-1">
      <h2 className="text-3xl text-primary mb-4">{sectionTitle}</h2>

      {subsections.map(({ subheading, items }, index) => (
        <div key={index} className={`mb-7 ${textClass}`}>
          <h3 className="mb-2">{subheading}</h3>
          <ul className="list-disc list-outside pl-6 space-y-1">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
