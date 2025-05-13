export default function Details({ sectionTitle, subsections }) {
  return (
    <section className="mb-4">
      <h2 className="text-3xl text-primary mb-4">{sectionTitle}</h2>

      {subsections.map(({ subheading, items }, index) => (
        <div key={index} className="mb-6 text-xl">
          <h3 className="mb-2">{subheading}</h3>
          <ul className="list-disc list-inside space-y-1">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
