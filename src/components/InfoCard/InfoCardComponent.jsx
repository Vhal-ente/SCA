export default function InfoCardComponent({
  title,
  icon,
  children,
  dashed = false,
}) {
  return (
    <div
      className={`border ${
        dashed ? "border-dashed" : "border-solid"
      } border-white rounded-lg p-4`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-normal">{title}</h3>
        {icon && <span>{icon}</span>}
      </div>
      <div>{children}</div>
    </div>
  );
}
