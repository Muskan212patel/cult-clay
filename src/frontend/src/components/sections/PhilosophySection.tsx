const tenets = [
  {
    title: "Clay",
    body: "From earth, shaped with restraint.",
    delay: "0",
    circleColor: "#D8D2C8",
  },
  {
    title: "Cult",
    body: "A quiet community of intention.",
    delay: "2",
    circleColor: "#8B1E2D",
  },
  {
    title: "Time",
    body: "Clothing that resists urgency.",
    delay: "4",
    circleColor: "#D8D2C8",
  },
];

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-28 md:py-40 bg-[#F4F4F2]"
      data-ocid="philosophy.section"
    >
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <div className="mb-16" data-reveal>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#6E6E6E] mb-6">
            Philosophy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-[#D8D2C8]">
          {tenets.map(({ title, body, delay, circleColor }, i) => (
            <div
              key={title}
              className="philosophy-tenet-card group border-r last:border-r-0 border-[#D8D2C8] px-0 md:px-8 first:pl-0 pt-12 pb-14 md:pt-16 md:pb-20"
              data-reveal
              data-reveal-delay={delay}
              data-ocid={`philosophy.card.${i + 1}`}
            >
              <div className="mb-8">
                <svg
                  viewBox="0 0 64 64"
                  width="52"
                  height="52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill={circleColor}
                    opacity="0.6"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="18"
                    stroke="#111111"
                    strokeWidth="0.8"
                    fill="none"
                    opacity="0.4"
                  />
                </svg>
              </div>
              <h3
                className="font-display font-normal text-[#111111] mb-4 group-hover:text-[#8B1E2D] transition-colors duration-300"
                style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)" }}
              >
                {title}
              </h3>
              <div className="h-px w-0 group-hover:w-8 bg-[#8B1E2D] transition-all duration-300 mb-4" />
              <p className="font-body text-[#6E6E6E] text-[1rem] leading-[1.8]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
