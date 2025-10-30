// app/components/Timeline.jsx
export default function Timeline() {
  const items = [
    { year: "2012", side: "right", colorFrom: "#a7f3d0", colorTo: "#34d399", title: 'Milestone Completed', descripton: 'At eFoli, our journey began more than 10 years ago with a simple yet powerful mission—to create solutions that blend innovation, creativity, and real-world impact...' },
    { year: "2016", side: "left", colorFrom: "#fde68a", colorTo: "#f59e0b", title: 'Milestone Completed', descripton: 'At eFoli, our journey began more than 10 years ago with a simple yet powerful mission—to create solutions that blend innovation, creativity, and real-world impact...' },
    { year: "2020", side: "right", colorFrom: "#bfdbfe", colorTo: "#3b82f6", title: 'Milestone Completed', descripton: 'At eFoli, our journey began more than 10 years ago with a simple yet powerful mission—to create solutions that blend innovation, creativity, and real-world impact...' },
    { year: "2024", side: "left", colorFrom: "#e9d5ff", colorTo: "#8b5cf6", title: 'Milestone Completed', descripton: 'At eFoli, our journey began more than 10 years ago with a simple yet powerful mission—to create solutions that blend innovation, creativity, and real-world impact...' },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center font-display text-5xl font-bold">
          Our Journey Through The Years
        </h2>

        <div className="relative mt-10 sm:mt-14">
          {/* Vertical dotted line: left on mobile, centered on md+ */}
          <div className="pointer-events-none absolute top-0 h-full left-6 md:left-1/2 md:-translate-x-1/2 border-l-2 border-dotted border-zinc-300" />

          <ol className="space-y-12 sm:space-y-16">
            {items.map((it, idx) => (
              <TimelineItem key={idx} {...it} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ year, side, colorFrom, colorTo, title = "Milestone Completed", descripton = "" }) {
  const isLeft = side === "left";

  return (
    <li className="relative">
      {/* Pin anchored to the line */}
      <IconPin
        className="absolute top-0 left-6 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"
        colorFrom={colorFrom}
        colorTo={colorTo}
      />

      {/* YEAR — mobile: opposite side of card (left of the line) */}
      <div className="hidden sm:hidden absolute top-1 left-0 w-12 pr-1 text-right text-2xl font-semibold text-[#13181E]">
        {year}
      </div>

      {/* YEAR — desktop: opposite side of the card */}
      <div
        className={[
          "hidden sm:hidden lg:block absolute top-2 text-2xl font-semibold text-[#13181E]",
          // if card is LEFT, put year on RIGHT side of line
          isLeft ? "left-[calc(50%+80px)]" : "right-[calc(50%+80px)]",
        ].join(" ")}
      >
        {year}
      </div>

      {/* CARD */}
      <div
        className={[
          // mobile: push right of the line + extra top margin so it never collides with the year
          "relative ml-16 mt-6 md:mt-0 md:ml-0 md:max-w-[480px] rounded-2xl bg-white p-5 sm:p-6 shadow-lg ring-1 ring-black/5",
          // desktop positions
          isLeft
            ? "md:mr-[calc(50%+72px)] md:ml-4"
            : "md:ml-[calc(50%+72px)] md:mr-4",
        ].join(" ")}
      >

        <div
          className={[
            "absolute top-8 h-0 w-0 border-y-8 border-y-transparent drop-shadow-sm",
            "left-[-8px] border-r-8 border-r-white",
            isLeft
              ? "md:left-auto md:right-[-8px] md:border-r-0 md:border-l-8 md:border-l-white"
              : "md:left-[-8px] md:border-r-8 md:border-r-white",
          ].join(" ")}
        />
        <h3 className="text-[#13181E] text-xl font-display font-bold">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#4b5154]">
          {descripton ||
            "At eFoli, our journey began more than 10 years ago with a simple yet powerful mission—to create solutions that blend innovation, creativity, and real-world impact."}
        </p>
      </div>
    </li>
  );
}


/* Glow pin */
function IconPin({ className = "", colorFrom = "#ddd", colorTo = "#999" }) {
  return (
    <div className={className}>
      <span
        className="absolute -left-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-60"
        style={{ background: `radial-gradient(closest-side, ${hexToRgba(colorFrom, 0.55)}, transparent 70%)` }}
      />
      <span
        className="relative grid h-14 w-14 place-items-center rounded-full ring-8 ring-white shadow-[0_10px_25px_-10px_rgba(0,0,0,.25)]"
        style={{ background: `linear-gradient(180deg, ${colorFrom}, ${colorTo})` }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white">
          <path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4-7 4 2.5-7L2 9h7z" />
        </svg>
      </span>
    </div>
  );
}

function hexToRgba(hex, a = 1) {
  const h = hex.replace("#", "");
  const n = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const int = parseInt(n, 16);
  const r = (int >> 16) & 255, g = (int >> 8) & 255, b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
