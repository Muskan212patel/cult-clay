const POSTS = [
  {
    title: "What is Khadi, really?",
    tag: "Material",
    excerpt:
      "Before it was fashion, it was resistance. Before resistance, it was just cloth.",
    date: "March 2025",
  },
  {
    title: "Why slow fashion feels different",
    tag: "Philosophy",
    excerpt:
      "Speed erases memory. Slow fashion puts it back — stitch by stitch.",
    date: "April 2025",
  },
  {
    title: "Fabric as identity",
    tag: "Culture",
    excerpt: "What we wear is what we believe. Sometimes without realising it.",
    date: "May 2025",
  },
];

export function JournalSection() {
  return (
    <section
      id="journal"
      className="py-28 md:py-40 bg-[#F4F4F2]"
      data-ocid="journal.section"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        {/* Section header */}
        <div className="mb-14" data-reveal>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#6E6E6E] mb-5">
            Journal
          </p>
          <h2
            className="font-display font-normal text-[#111111]"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Reading the fabric.
          </h2>
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-3 gap-0 border-t border-[#D8D2C8]">
          {POSTS.map(({ title, tag, excerpt, date }, i) => (
            <article
              key={title}
              className="group border-r last:border-r-0 border-[#D8D2C8] px-0 md:px-8 first:pl-0 last:pr-0 pt-10 pb-10"
              data-reveal
              data-reveal-delay={String(i)}
              data-ocid={`journal.item.${i + 1}`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="font-body text-[9px] tracking-[0.25em] uppercase text-[#8B1E2D] border border-[#8B1E2D]/30 px-2 py-0.5">
                  {tag}
                </span>
                <span className="font-body text-[10px] text-[#6E6E6E]">
                  {date}
                </span>
              </div>

              <h3
                className="font-display font-normal text-[#111111] leading-[1.3] mb-4 group-hover:text-[#8B1E2D] transition-colors duration-300"
                style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)" }}
              >
                {title}
              </h3>

              <p className="font-body text-[#6E6E6E] text-sm leading-[1.8] mb-6">
                {excerpt}
              </p>

              <button
                type="button"
                className="font-body text-xs text-[#6E6E6E] tracking-wide hover:text-[#8B1E2D] transition-colors duration-200 group/link"
                data-ocid={`journal.read_more.${i + 1}`}
              >
                <span className="underline underline-offset-4 decoration-[#D8D2C8] group-hover/link:decoration-[#8B1E2D] transition-all duration-200">
                  Read more
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
