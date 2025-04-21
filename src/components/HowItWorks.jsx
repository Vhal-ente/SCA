import { FaUserPlus, FaTrophy, FaGamepad } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus size={28} />,
      title: "REGISTER",
      description:
        "Get started by creating an account and getting access to all our contents",
    },
    {
      icon: <FaGamepad size={28} />,
      title: "PLAY AND COMPETE",
      description:
        "Find new friends, team up and play when you want or participate in leagues, tournaments and challenges.",
    },
    {
      icon: <FaTrophy size={28} />,
      title: "WIN",
      description:
        "Win tournaments and challenges to win cash and earn rewards",
    },
  ];

  return (
    <section className="w-full bg-[#292929] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-12 text-center">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#36f6c6] text-black rounded-xl p-6 flex flex-col items-start shadow-md"
            >
              <div className="mb-1">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
