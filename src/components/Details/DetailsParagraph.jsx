export default function DetailsParagraph({ sectionTitle, content }) {
  return (
    <section className="mb-8">
      {sectionTitle && <h2 className="text-2xl mb-4">{sectionTitle}</h2>}
      <div className="space-y-6">
        {content.map(({ subheading, paragraphs }, index) => (
          <div key={index} className="text-xl">
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
