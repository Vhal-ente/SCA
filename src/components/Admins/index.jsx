export default function Admins({ sectionTitle, admins }) {
  return (
    <section className="mt-6">
      <h2 className="text-xl font-semibold text-primary mb-4">
        {sectionTitle}
      </h2>
      <div className="flex gap-15 flex-wrap">
        {admins.map((admin, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={admin.image}
              alt={admin.name}
              className="w-23 h-23 mb-2 object-cover"
            />
            <p className="text-base">{admin.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
