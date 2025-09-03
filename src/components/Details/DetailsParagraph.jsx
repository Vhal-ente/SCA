export default function DetailsParagraph({
  sectionTitle,
  content,
  textClass = "text-xl",
  titleTextClass = "text-2xl",
}) {
  return (
    <section className="mb-8">
      {sectionTitle && (
        <h2 className={`${titleTextClass} mb-4`}>{sectionTitle}</h2>
      )}
      <div className="space-y-6">
        {content.map(({ subheading, paragraphs }, index) => (
          <div key={index} className={`${textClass}`}>
            {subheading && <h3 className="mb-2">{subheading}</h3>}
            <div className="space-y-3">
              {paragraphs.map((text, i) => (
                <p key={i} className="leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
