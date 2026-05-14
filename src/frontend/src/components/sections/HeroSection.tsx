import { useEmailCapture } from "@/hooks/useEmailCapture";
import { ArrowDown } from "lucide-react";
import { useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "About Us", id: "about" },
  { label: "Philosophy", id: "philosophy" },
  { label: "Sustainability", id: "sustainability" },
  { label: "Journal", id: "journal" },
  { label: "Shop the Drop", id: "the-drop" },
  { label: "Contact", id: "contact" },
] as const;

function ClayCTA({
  children,
  onClick,
  variant = "primary",
  className = "",
  "data-ocid": ocid,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
  "data-ocid"?: string;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const ripple = document.createElement("span");
    ripple.className = "ripple-circle";
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
    onClick?.();
  };

  const base =
    "btn-clay inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-body transition-all duration-300 focus-visible:outline-none";
  const variants = {
    primary: "bg-[#8B1E2D] text-white hover:bg-[#6d1622]",
    outline:
      "border border-[#111111]/30 text-[#111111] hover:border-[#8B1E2D] hover:text-[#8B1E2D]",
  };

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${className}`}
      data-ocid={ocid}
    >
      {children}
    </button>
  );
}

function HeroEmailCapture({ onClose }: { onClose: () => void }) {
  const { submit, status, message } = useEmailCapture();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    await submit(email.trim(), "hero-join-circle");
  };

  return (
    <div
      className="mt-4 bg-white/80 backdrop-blur-sm border border-[#D8D2C8] p-4 max-w-sm"
      data-ocid="hero.email_capture"
    >
      {status === "success" ? (
        <p className="font-body text-sm text-[#8B1E2D] tracking-wide">
          {message}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 min-w-0 font-body text-sm bg-transparent border-b border-[#D8D2C8] py-1.5 px-0 text-[#111111] placeholder:text-[#6E6E6E] focus:outline-none focus:border-[#8B1E2D] transition-colors duration-200"
            data-ocid="hero.email_input"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-clay font-body text-[10px] tracking-[0.2em] uppercase bg-[#8B1E2D] text-white px-4 py-1.5 hover:bg-[#6d1622] transition-colors duration-200 disabled:opacity-60"
            data-ocid="hero.email_submit"
          >
            {status === "loading" ? "…" : "Join"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-[#6E6E6E] hover:text-[#111111] transition-colors text-xs px-1"
            aria-label="Close"
          >
            ✕
          </button>
        </form>
      )}
    </div>
  );
}

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      data-ocid="hero.section"
    >
      {/* Sticky Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F4F2]/92 backdrop-blur-md border-b border-[#D8D2C8]/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="flex items-center hover:opacity-70 transition-opacity duration-200"
            data-ocid="hero.nav_logo"
            aria-label="Cult & Clay home"
          >
            <img
              src="/assets/cult-clay-logo.png"
              alt="Cult & Clay"
              className="h-8 w-auto object-contain"
            />
          </button>

          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="nav-link"
                data-ocid={`hero.nav_${id}`}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden flex flex-col gap-1.5 p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="hero.mobile_menu_toggle"
          >
            <span
              className={`block w-5 h-px bg-[#111111] transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-[#111111] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-[#111111] transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#F4F4F2]/98 backdrop-blur border-t border-[#D8D2C8]/60 px-6 pb-8 pt-5 flex flex-col gap-5">
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="nav-link text-left text-sm"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Background */}
      <div className="absolute inset-0 bg-[#F4F4F2]" aria-hidden="true" />
      <div className="absolute inset-0 khadi-texture" aria-hidden="true" />

      {/* Hero image */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full md:w-[50%] overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/assets/generated/hero-khadi-woman.dim_1400x900.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F4F2] via-[#F4F4F2]/50 to-transparent md:from-[#F4F4F2] md:via-[#F4F4F2]/30 md:to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative flex-1 flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 pt-28 pb-24 min-h-screen max-w-4xl">
        <p
          className="font-body text-[10px] tracking-[0.35em] uppercase text-[#6E6E6E] mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Est. 2024 &nbsp;·&nbsp; India
        </p>

        <div
          className="mb-5 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
          data-ocid="hero.logo_hero"
        >
          <img
            src="/assets/cult-clay-logo.png"
            alt="Cult & Clay"
            className="h-16 md:h-20 w-auto object-contain mb-4"
          />
        </div>

        <h1
          className="font-display font-normal leading-none tracking-[-0.01em] text-[#111111] mb-4 opacity-0 animate-fade-in-up"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5rem)",
            animationDelay: "0.7s",
            animationFillMode: "forwards",
          }}
          data-ocid="hero.headline"
        >
          Cult &amp; Clay
        </h1>

        <p
          className="font-display italic text-[#8B1E2D] opacity-0 animate-fade-in-up"
          style={{
            fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
            animationDelay: "0.85s",
            animationFillMode: "forwards",
            fontWeight: 400,
          }}
          data-ocid="hero.subheadline"
        >
          Earth&rsquo;s quiet language, worn.
        </p>

        <p
          className="mt-5 font-body text-[11px] tracking-[0.22em] uppercase text-[#6E6E6E] opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          data-ocid="hero.supporting_line"
        >
          Sustainable Roots &nbsp;—&nbsp; Philosophical Wear &nbsp;—&nbsp; First
          Drop Soon
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
        >
          <ClayCTA
            onClick={() => scrollToSection("about")}
            variant="outline"
            data-ocid="hero.enter_cta"
          >
            Enter
          </ClayCTA>
          <ClayCTA
            onClick={() => setShowEmailCapture((v) => !v)}
            variant="primary"
            data-ocid="hero.join_circle_cta"
          >
            Join the Circle
          </ClayCTA>
        </div>

        {showEmailCapture && (
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationFillMode: "forwards" }}
          >
            <HeroEmailCapture onClose={() => setShowEmailCapture(false)} />
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6E6E6E]/50 hover:text-[#8B1E2D] transition-colors duration-300 animate-float-gentle"
        data-ocid="hero.scroll_indicator"
      >
        <ArrowDown size={18} strokeWidth={1.2} />
      </button>
    </section>
  );
}
