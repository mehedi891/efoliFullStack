import { useEffect, useState } from "react";


const Timer3 = ({ durationDays = 30, persistKey }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Determine (or restore) the end timestamp
    let endTs;
    if (persistKey) {
      const saved = localStorage.getItem(persistKey);
      endTs = saved ? parseInt(saved, 10) : Date.now() + durationDays * 24 * 60 * 60 * 1000;
      if (!saved) localStorage.setItem(persistKey, String(endTs));
    } else {
      endTs = Date.now() + durationDays * 24 * 60 * 60 * 1000;
    }

    const calc = () => {
      const diff = endTs - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return true; // finished
      }
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
      return false;
    };

    // Initial run & ticking
    calc();
    const id = setInterval(() => {
      const done = calc();
      if (done) clearInterval(id);
    }, 1000);

    return () => clearInterval(id);
  }, [durationDays, persistKey]);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="flex justify-center gap-3 sm:gap-8">
      {/* Days */}
      <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col justify-center gap-3 items-center bg-[#00000080] rounded-lg">
        <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
          {pad(timeLeft.days)}
        </span>
        <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
          {timeLeft.days === 1 ? "Day" : "Days"}
        </span>
      </div>

      {/* Hours */}
      <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col justify-center gap-3 items-center bg-[#00000080] rounded-lg">
        <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
          {pad(timeLeft.hours)}
        </span>
        <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
          {timeLeft.hours === 1 ? "Hour" : "Hours"}
        </span>
      </div>

      {/* Minutes */}
      <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col justify-center gap-3 items-center bg-[#00000080] rounded-lg">
        <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
          {pad(timeLeft.minutes)}
        </span>
        <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
          {timeLeft.minutes === 1 ? "Minute" : "Minutes"}
        </span>
      </div>

      {/* Seconds */}
      <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col justify-center gap-3 items-center bg-[#00000080] rounded-lg">
        <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
          {pad(timeLeft.seconds)}
        </span>
        <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
          {timeLeft.seconds === 1 ? "Second" : "Seconds"}
        </span>
      </div>
    </div>
  );
};

export default Timer3;
