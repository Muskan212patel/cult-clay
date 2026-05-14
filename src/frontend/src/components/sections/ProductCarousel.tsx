import { useEmailCapture } from "@/hooks/useEmailCapture";
import type { CurrencyMode, Product } from "@/types";
import { CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";

const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Khadi Oversized Shirt",
    imageUrl: "/assets/generated/product-khadi-shirt.dim_800x1000.jpg",
    priceINR: 4800,
    priceUSD: 58,
    description: "Breathes with you.",
    tag: "",
    category: "apparel",
  },
  {
    id: "p2",
    name: "South Cotton Blouse",
    imageUrl: "/assets/generated/product-cotton-blouse.dim_800x1000.jpg",
    priceINR: 3600,
    priceUSD: 43,
    description: "Simple as morning.",
    tag: "",
    category: "apparel",
  },
  {
    id: "p3",
    name: "Jute Trousers",
    imageUrl: "/assets/generated/product-jute-trousers.dim_800x1000.jpg",
    priceINR: 5200,
    priceUSD: 62,
    description: "Worn without effort.",
    tag: "",
    category: "apparel",
  },
  {
    id: "p4",
    name: "Natural Ittar",
    imageUrl: "/assets/generated/product-ittar-bottle.dim_800x1000.jpg",
    priceINR: 1800,
    priceUSD: 22,
    description: "Memory in a bottle.",
    tag: "LAUNCH EXCLUSIVE",
    category: "ittar",
  },
];

function NotifyForm({
  productId,
  index,
}: {
  productId: string;
  index: number;
}) {
  const { submit, status, reset } = useEmailCapture();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleToggle = () => {
    if (open && status !== "idle") {
      reset();
      setEmail("");
    }
    setOpen((v) => !v);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    await submit(email.trim(), `product-${productId}`);
  };

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={handleToggle}
        className="w-full text-[10px] tracking-[0.25em] uppercase font-body border border-[#111111]/25 text-[#111111] px-4 py-2.5 hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-all duration-300"
        data-ocid={`the-drop.notify_button.${index}`}
      >
        {open ? "Close" : "Notify Me"}
      </button>

      {open && (
        <div
          className="mt-2 border border-[#D8D2C8] p-3 bg-[#F4F4F2]"
          data-ocid={`the-drop.notify_form.${index}`}
        >
          {status === "success" ? (
            <div
              className="flex items-center gap-2 text-xs font-body text-[#8B1E2D] py-1"
              data-ocid={`the-drop.notify_success.${index}`}
            >
              <CheckCircle2 size={13} className="shrink-0" />
              <span>You&rsquo;re on the list.</span>
            </div>
          ) : status === "error" ? (
            <div
              className="flex items-center gap-2 text-xs font-body text-red-600 py-1"
              data-ocid={`the-drop.notify_error.${index}`}
            >
              <XCircle size={13} className="shrink-0" />
              <span>Try again.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 min-w-0 text-xs font-body bg-transparent border-b border-[#D8D2C8] py-1 px-0 text-[#111111] placeholder:text-[#6E6E6E] focus:outline-none focus:border-[#8B1E2D] transition-colors duration-200"
                data-ocid={`the-drop.notify_input.${index}`}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="text-[10px] tracking-[0.2em] uppercase font-body bg-[#8B1E2D] text-white px-3 py-1 hover:bg-[#6d1622] transition-colors duration-200 disabled:opacity-60 shrink-0"
                data-ocid={`the-drop.notify_submit.${index}`}
              >
                {status === "loading" ? "…" : "Join"}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

function ProductCard({
  product,
  currency,
  index,
}: {
  product: Product;
  currency: CurrencyMode;
  index: number;
}) {
  const price =
    currency === "INR"
      ? `₹${product.priceINR.toLocaleString("en-IN")}`
      : `$${product.priceUSD}`;

  return (
    <div className="group flex flex-col" data-ocid={`the-drop.item.${index}`}>
      <div
        className="relative overflow-hidden bg-[#D8D2C8]/30"
        style={{ aspectRatio: "4/5" }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-[#8B1E2D] text-white text-[9px] tracking-[0.2em] uppercase px-2 py-1 font-body">
            {product.tag}
          </span>
        )}
      </div>
      <div className="pt-4 pb-2">
        <h3 className="font-display text-[#111111] text-base font-normal leading-snug mb-1">
          {product.name}
        </h3>
        <p className="font-body text-[#6E6E6E] text-sm italic leading-relaxed mb-2">
          {product.description}
        </p>
        <span className="font-body text-[#111111] text-sm tracking-wide">
          {price}
        </span>
        <NotifyForm productId={product.id} index={index} />
      </div>
    </div>
  );
}

export function ProductCarousel() {
  const [currency, setCurrency] = useState<CurrencyMode>("INR");

  return (
    <section
      id="the-drop"
      className="py-28 md:py-40 bg-[#F4F4F2]"
      data-ocid="the-drop.section"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14"
          data-reveal
        >
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#6E6E6E] mb-5">
              Shop the Drop
            </p>
            <h2
              className="font-display font-normal text-[#111111]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              The First Drop.
            </h2>
            <p className="font-body italic text-[#6E6E6E] text-base mt-2">
              A small collection. Each piece considered.
            </p>
          </div>

          <div
            className="flex items-center gap-0 border border-[#D8D2C8] mt-6 md:mt-0"
            data-ocid="the-drop.currency_toggle"
            aria-label="Currency selection"
          >
            {(["INR", "USD"] as CurrencyMode[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`px-5 py-2 text-[10px] tracking-[0.15em] font-body transition-all duration-200 ${
                  currency === c
                    ? "bg-[#111111] text-white"
                    : "text-[#6E6E6E] hover:text-[#111111]"
                }`}
                aria-pressed={currency === c}
                data-ocid={`the-drop.currency_${c.toLowerCase()}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div
          className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible md:pb-0"
          style={{ scrollbarWidth: "none" }}
        >
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className="flex-none w-[68vw] sm:w-64 md:w-auto snap-start"
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              <ProductCard
                product={product}
                currency={currency}
                index={i + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
