import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./coming-soon.css";

// Update these values when the launch details are confirmed.
const LAUNCH_DATE = "2026-09-30T18:00:00+01:00";
const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/IEXZogVTk49GOUX2JNWMdS?s=qt&p=a&ilr=0&amv=2";
const BACKGROUND_IMAGE_PATH = "/assets/coming-soon-background.png";

function getTimeRemaining(targetDate) {
  const difference = Math.max(new Date(targetDate).getTime() - Date.now(), 0);
  const totalMinutes = Math.floor(difference / (1000 * 60));

  return {
    days: Math.floor(totalMinutes / (60 * 24)),
    hours: Math.floor((totalMinutes % (60 * 24)) / 60),
    minutes: totalMinutes % 60,
  };
}

function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState(() =>
    getTimeRemaining(LAUNCH_DATE),
  );

  useEffect(() => {
    const updateCountdown = () => setTimeRemaining(getTimeRemaining(LAUNCH_DATE));
    const intervalId = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const units = [
    ["Days", timeRemaining.days],
    ["Hours", timeRemaining.hours],
    ["Mins", timeRemaining.minutes],
  ];

  return (
    <section className="coming-soon__countdown" aria-label="Time remaining until launch">
      {units.map(([label, value]) => (
        <div className="coming-soon__time-unit" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

export default function ComingSoonPage() {
  return (
    <main
      className="coming-soon"
      style={{ "--coming-soon-background": `url("${BACKGROUND_IMAGE_PATH}")` }}
    >
      <div className="coming-soon__overlay" />
      <section className="coming-soon__card" aria-labelledby="coming-soon-title">
        <div className="coming-soon__top-badge">
          <span aria-hidden="true">🚀</span>
          <span>Coming Soon</span>
        </div>

        <p className="coming-soon__launch-status">
          <span className="coming-soon__status-dot" aria-hidden="true" />
          Launching soon
        </p>

        <h1 id="coming-soon-title">
          Something Amazing is <span>Coming</span>
        </h1>
        <p className="coming-soon__description">
          We&apos;re working hard to launch something exciting. Join our WhatsApp
          community to receive launch updates, exclusive announcements, and early
          access.
        </p>

        <CountdownTimer />

        <a
          className="coming-soon__whatsapp-link"
          href={WHATSAPP_COMMUNITY_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Join our WhatsApp community (opens in a new tab)"
        >
          <FaWhatsapp aria-hidden="true" />
          Join Our WhatsApp Community
        </a>
        <p className="coming-soon__privacy-note">No spam <span aria-hidden="true">•</span> Only important updates</p>
      </section>
    </main>
  );
}
