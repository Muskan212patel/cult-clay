import { useEmailCapture } from "@/hooks/useEmailCapture";
import { Instagram, Linkedin, Loader2 } from "lucide-react";
import { useRef, useState } from "react";

function PinterestIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label="Pinterest"
    >
      <title>Pinterest</title>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

export function SiteFooter() {
  const { submit, status, message } = useEmailCapture();
  const emailRef = useRef<HTMLInputElement>(null);
  const [typed, setTyped] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value.trim() ?? "";
    if (!email) return;
    submit(email, "footer");
  };

  return (
    <footer
      id="contact"
      data-ocid="footer.section"
      className="py-24 md:py-32 bg-[#111111]"
    >
      <div className="max-w-4xl mx-auto px-8 md:px-12 text-center">
        {/* Final CTA */}
        <div data-reveal>
          <h2
            className="font-display font-normal text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)" }}
          >
            Enter the first layer.
          </h2>
          <p className="font-body text-[#D8D2C8]/70 text-base mb-10">
            Be the first to know when we drop.
          </p>
        </div>

        {/* Email form */}
        <div
          className="max-w-sm mx-auto mb-20"
          data-reveal
          data-reveal-delay="1"
        >
          {status === "success" ? (
            <div
              className="flex items-center justify-center gap-2 font-body text-sm text-[#D8D2C8]"
              data-ocid="footer.success_state"
            >
              <span>{message || "Welcome to the circle."}</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex"
              data-ocid="footer.email_form"
            >
              <input
                ref={emailRef}
                type="email"
                required
                value={typed}
                onChange={(e) => setTyped(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-transparent font-body text-sm text-white placeholder:text-[#D8D2C8]/30 focus:outline-none border border-white/15 border-r-0"
                data-ocid="footer.email_input"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-clay px-6 py-3 font-body text-[10px] tracking-[0.25em] uppercase bg-[#8B1E2D] text-white hover:bg-[#6d1622] flex items-center gap-1.5 disabled:opacity-50 transition-colors duration-200"
                data-ocid="footer.submit_button"
              >
                {status === "loading" ? (
                  <Loader2 size={12} className="animate-spin" />
                ) : (
                  "Join"
                )}
              </button>
            </form>
          )}
          {status === "error" && (
            <p
              className="font-body text-xs mt-2 text-[#D8D2C8]/70"
              data-ocid="footer.error_state"
            >
              {message || "Try again."}
            </p>
          )}
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex justify-center mb-6">
            <img
              src="/assets/cult-clay-logo.png"
              alt="Cult & Clay"
              className="h-8 w-auto object-contain opacity-70"
            />
          </div>
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-[#D8D2C8]/50 mb-6">
            Launching soon on cultandclay.com
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="https://instagram.com/cultandclay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @cultandclay"
              className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 text-[#D8D2C8]/60 hover:text-[#8B1E2D] hover:border-[#8B1E2D]/50 transition-all duration-200"
              data-ocid="footer.instagram_link"
            >
              <Instagram size={13} />
            </a>
            <a
              href="https://pinterest.com/cultandclay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 text-[#D8D2C8]/60 hover:text-[#8B1E2D] hover:border-[#8B1E2D]/50 transition-all duration-200"
              data-ocid="footer.pinterest_link"
            >
              <PinterestIcon size={13} />
            </a>
            <a
              href="https://linkedin.com/company/cultandclay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 text-[#D8D2C8]/60 hover:text-[#8B1E2D] hover:border-[#8B1E2D]/50 transition-all duration-200"
              data-ocid="footer.linkedin_link"
            >
              <Linkedin size={13} />
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 font-body text-[10px] tracking-wider text-[#D8D2C8]/30">
            <span>
              &copy; {new Date().getFullYear()} Cult &amp; Clay. All rights
              reserved.
            </span>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="hover:text-[#D8D2C8]/60 transition-colors duration-200"
                data-ocid="footer.privacy_link"
              >
                Privacy
              </button>
              <span>·</span>
              <button
                type="button"
                className="hover:text-[#D8D2C8]/60 transition-colors duration-200"
                data-ocid="footer.contact_link"
              >
                Contact
              </button>
              <span>·</span>
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== "undefined"
                    ? window.location.hostname
                    : "cultandclay.com",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D8D2C8]/60 transition-colors duration-200"
              >
                Built with caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
