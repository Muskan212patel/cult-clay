import { useEffect, useRef } from "react";

const TILES = [
  {
    gradient: "linear-gradient(135deg, #8B7355 0%, #D9C2A7 60%, #F5F2E9 100%)",
    rate: 0.05,
    width: "85%",
    top: "0",
    left: "0",
    zIndex: 1,
    aspect: "aspect-[3/4]",
    watermark: false,
  },
  {
    gradient: "linear-gradient(160deg, #D9C2A7 0%, #8B7355 45%, #2D1F12 100%)",
    rate: 0.1,
    width: "75%",
    top: "18%",
    left: "20%",
    zIndex: 2,
    aspect: "aspect-[4/5]",
    watermark: true,
  },
  {
    gradient: "linear-gradient(110deg, #F5F2E9 0%, #D9C2A7 40%, #8B7355 100%)",
    rate: 0.15,
    width: "60%",
    top: "42%",
    left: "38%",
    zIndex: 3,
    aspect: "aspect-[2/3]",
    watermark: false,
  },
];

export function ManifestoSection() {
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    if (reducedMotion) return;

    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = -rect.top;

      for (const [i, tile] of tileRefs.current.entries()) {
        if (!tile) continue;
        const rate = TILES[i].rate;
        tile.style.transform = `translateY(${scrolled * rate}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  // Intersection observer for data-reveal
  useEffect(() => {
    const revealEls = document.querySelectorAll("#our-story [data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    for (const el of revealEls) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative overflow-hidden bg-background"
      data-ocid="manifesto.section"
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #8B7355 2px, #8B7355 3px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-[55fr_45fr] gap-16 lg:gap-24 items-start">
          {/* ── LEFT: Parallax gallery ── */}
          <div
            className="relative min-h-[540px] md:min-h-[680px] select-none"
            aria-hidden="true"
            data-ocid="manifesto.gallery"
          >
            {TILES.map((tile, i) => (
              <div
                key={tile.gradient}
                ref={(el) => {
                  tileRefs.current[i] = el;
                }}
                className="absolute overflow-hidden shadow-elevated"
                style={{
                  width: tile.width,
                  top: tile.top,
                  left: tile.left,
                  zIndex: tile.zIndex,
                  willChange: "transform",
                  transition: reducedMotion ? "none" : undefined,
                }}
              >
                <div
                  className={`w-full ${tile.aspect} relative`}
                  style={{ background: tile.gradient }}
                >
                  {/* Grain layer for depth */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
                      backgroundSize: "200px 200px",
                    }}
                  />
                  {tile.watermark && (
                    <span
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 font-display italic text-xs tracking-[0.3em] uppercase opacity-40 text-nowrap"
                      style={{ color: "#F5F2E9" }}
                    >
                      Slow made
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT: Text content ── */}
          <div className="pt-8 md:pt-16 flex flex-col gap-7">
            {/* Section label */}
            <p
              className="font-body text-xs tracking-[0.3em] uppercase font-medium"
              style={{ color: "#8B7355" }}
              data-reveal="up"
            >
              Our Story
            </p>

            {/* Pull quote */}
            <div data-reveal="up" data-reveal-delay="1">
              <h2
                className="font-display leading-[1.1] mb-1"
                style={{
                  fontSize: "clamp(2.75rem, 5vw, 4rem)",
                  fontWeight: 300,
                  color: "#2D1F12",
                }}
              >
                We don&rsquo;t make clothes.
              </h2>
              <h2
                className="font-display italic leading-[1.1]"
                style={{
                  fontSize: "clamp(2.75rem, 5vw, 4rem)",
                  fontWeight: 300,
                  color: "#8B7355",
                }}
              >
                We make decisions.
              </h2>
            </div>

            {/* Divider */}
            <div
              className="h-px w-12"
              style={{ background: "#D9C2A7" }}
              data-reveal="up"
              data-reveal-delay="2"
            />

            {/* Body paragraphs */}
            <div
              className="flex flex-col gap-5"
              data-reveal="up"
              data-reveal-delay="3"
            >
              <p
                className="font-body text-base leading-8"
                style={{ color: "rgba(45,31,18,0.72)" }}
              >
                Cult &amp; Clay was born in the quiet hours before a market
                opened. In the smell of wet earth and fresh Khadi. In the belief
                that the most radical thing a woman can do is choose to wear
                less — and mean every piece.
              </p>
              <p
                className="font-body text-base leading-8"
                style={{ color: "rgba(45,31,18,0.72)" }}
              >
                We source from cooperatives where weavers set their own hours.
                We dye with roots that come back every year. We make silhouettes
                that work in Mumbai at noon and Berlin at midnight.
              </p>
              <p
                className="font-body text-base leading-8"
                style={{ color: "rgba(45,31,18,0.72)" }}
              >
                This isn&rsquo;t slow fashion. This is slow living — dressed up
                to go somewhere.
              </p>
            </div>

            {/* Signature rule */}
            <hr
              className="border-0 h-px my-1"
              style={{
                background: "linear-gradient(to right, #8B7355, transparent)",
              }}
              data-reveal="up"
              data-reveal-delay="4"
            />

            {/* CTA */}
            <button
              type="button"
              className="font-body text-sm tracking-wide transition-smooth inline-flex items-center gap-1 group"
              style={{ color: "#8B7355" }}
              data-reveal="up"
              data-reveal-delay="5"
              data-ocid="manifesto.cta_link"
              onClick={() => {
                document
                  .getElementById("our-story")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="underline underline-offset-4 decoration-[#D9C2A7] group-hover:decoration-[#8B7355] transition-smooth">
                Read the Full Manifesto
              </span>
              <span className="transition-smooth group-hover:translate-x-1 inline-block">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
