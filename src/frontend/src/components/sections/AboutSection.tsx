export function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 md:py-40 bg-[#F4F4F2]"
      data-ocid="about.section"
    >
      <div className="max-w-3xl mx-auto px-8 md:px-12">
        {/* Section label */}
        <div className="mb-10" data-reveal>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#6E6E6E] mb-6">
            About Us
          </p>
          <div className="h-px w-full bg-[#D8D2C8]" />
        </div>

        {/* Main copy */}
        <div data-reveal data-reveal-delay="1">
          <p
            className="font-display font-normal text-[#111111] leading-[1.55] mb-6"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)" }}
          >
            We are not a trend.
          </p>
          <p className="font-body text-[#6E6E6E] text-[1.0625rem] leading-[1.85] mb-6">
            Cult &amp; Clay is a return to slower, more intentional dressing —
            rooted in the tactile honesty of Indian materials, shaped for a
            contemporary global life.
          </p>
          <p className="font-body text-[#6E6E6E] text-[1.0625rem] leading-[1.85]">
            We make clothes that ask you to pause.
          </p>
        </div>

        {/* Bottom rule */}
        <div
          className="mt-12 h-px w-full bg-[#D8D2C8]"
          data-reveal
          data-reveal-delay="2"
        />
      </div>
    </section>
  );
}
