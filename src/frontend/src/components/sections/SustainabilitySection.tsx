const MATERIALS = [
  {
    name: "Khadi",
    body: "Handspun by hand, low on energy, long on meaning. The original slow textile.",
    delay: "0",
  },
  {
    name: "South Cotton",
    body: "Climate-responsive and deeply local. Woven for warm skin and cooler mornings.",
    delay: "1",
  },
  {
    name: "Jute Blends",
    body: "Durable and grounded. A fabric that returns to earth as gracefully as it came.",
    delay: "2",
  },
  {
    name: "Ittars",
    body: "Distilled in Kannauj for centuries. Fragrance as memory, not chemistry.",
    delay: "3",
  },
];

export function SustainabilitySection() {
  return (
    <section
      id="sustainability"
      className="py-28 md:py-40 bg-[#F4F4F2]"
      data-ocid="sustainability.section"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="grid md:grid-cols-[45fr_55fr] gap-16 md:gap-24 items-start">
          {/* Left: text */}
          <div>
            <div data-reveal>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#6E6E6E] mb-8">
                Sustainability
              </p>
              <h2
                className="font-display font-normal text-[#111111] leading-[1.15] mb-8"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                Made from the earth&rsquo;s slow work.
              </h2>
              <p className="font-body text-[#6E6E6E] text-base leading-[1.85] mb-12">
                Every thread has a history. We source with care — not as a
                marketing gesture, but because the material is the message.
              </p>
            </div>

            {/* Material callouts */}
            <div className="flex flex-col gap-8">
              {MATERIALS.map(({ name, body, delay }) => (
                <div
                  key={name}
                  className="border-l-2 border-[#D8D2C8] hover:border-[#8B1E2D] pl-5 transition-colors duration-300 group"
                  data-reveal
                  data-reveal-delay={delay}
                  data-ocid={`sustainability.material_${name.toLowerCase().replace(/\s/g, "_")}`}
                >
                  <h3 className="font-display text-[#111111] text-base font-normal mb-1.5 group-hover:text-[#8B1E2D] transition-colors duration-300">
                    {name}
                  </h3>
                  <p className="font-body text-[#6E6E6E] text-sm leading-[1.8]">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div
            className="relative mt-8 md:mt-16"
            data-reveal="right"
            aria-hidden="true"
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <img
                src="/assets/generated/sustainability-khadi-texture.dim_800x600.jpg"
                alt="Khadi fabric texture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay with brand tint */}
              <div className="absolute inset-0 bg-[#8B1E2D]/5" />
            </div>
            {/* Geometric accent */}
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 border border-[#D8D2C8] pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -left-4 w-14 h-14 rounded-full border border-[#D8D2C8] pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
