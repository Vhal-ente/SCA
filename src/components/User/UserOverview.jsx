import UserNav from "../Navbar/UserNav";
import Button from "../Button";

const infoItems = [
  { label: "Name", value: "Tomiwa Oyeledu Dolapo" },
  { label: "Phone Number", value: "09034867656" },
  { label: "IGN", value: "Tomiwa x" },
  { label: "email", value: "tomilola@me.com" },
  { label: "Gender", value: "Female" },
  { label: "City", value: "Yenagoa" },
  { label: "Date of Birth", value: "August 27th, 1999" },
  { label: "State", value: "Bayelsa" },
  { label: "Country", value: "Nigeria" },
];

export default function UserOverview() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-6 mb-16">
        <UserNav />
      </div>
      {/* Avatar Section */}
      <div className="mx-auto mt-10 px-6 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
        <div className="flex flex-col items-center gap-2">
          <div>
            <img
              src="/assets/admins/mightyness.svg"
              alt="Avatar"
              className="w-54 h-54"
            />
          </div>
          <Button className="" text="Change" />
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-2  gap-x-2 gap-y-6 text-sm sm:text-base">
          {infoItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-primary text-sm md:text-base font-semibold">
                {item.label}
              </span>
              <span className="text-white text-base md:text-lg font-medium">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
