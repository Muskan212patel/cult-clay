const IG_TILES = [
  {
    src: "/assets/generated/ig-grid-1-spinning.dim_600x600.jpg",
    label: "Dye bath, Jaipur",
  },
  {
    src: "/assets/generated/ig-grid-2-fabric.dim_600x600.jpg",
    label: "Morning weave",
  },
  {
    src: "/assets/generated/ig-grid-3-portrait.dim_600x600.jpg",
    label: "The quiet",
  },
  {
    src: "/assets/generated/ig-grid-4-botanicals.dim_600x600.jpg",
    label: "Root to thread",
  },
  {
    src: "/assets/generated/ig-grid-5-pottery.dim_600x600.jpg",
    label: "Earth tones",
  },
  {
    src: "/assets/generated/ig-grid-6-still-life.dim_600x600.jpg",
    label: "At the market",
  },
];

export function InstagramGrid() {
  return (
    <section
      id="community"
      className="py-28 md:py-40"
      style={{ background: "#D8D2C8" }}
      data-ocid="instagram.section"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="mb-12" data-reveal>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#6E6E6E] mb-5">
            Community
          </p>
          <h2
            className="font-display font-normal text-[#111111] mb-3"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            A slower way of dressing, documented.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {IG_TILES.map(({ src, label }, i) => (
            <div
              key={label}
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: "1 / 1" }}
              data-reveal
              data-reveal-delay={String(i % 4)}
              data-ocid={`instagram.item.${i + 1}`}
            >
              <img
                src={src}
                alt={label}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.04] grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/10 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-[#111111]/50 to-transparent">
                <span className="font-body text-[10px] text-white/90 tracking-wider uppercase">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10" data-reveal>
          <a
            href="https://instagram.com/cultandclay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-[#8B1E2D] border-b border-[#8B1E2D]/40 hover:border-[#8B1E2D] pb-0.5 transition-all duration-200"
            data-ocid="instagram.follow_cta"
          >
            Follow @cultandclay
          </a>
        </div>
      </div>
    </section>
  );
}
