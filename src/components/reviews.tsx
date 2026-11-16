import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Maya R.",
    product: "Barrier Restore Cream",
    rating: 5,
    text: "Six weeks in and my skin stopped flaking around my nose for the first time in a winter. This is the only cream that doesn't make me reactive.",
  },
  {
    name: "Jin L.",
    product: "Niacinamide 10% + Zinc 1%",
    rating: 4,
    text: "Visible difference in pore size after three weeks. Not a miracle, but steady. Worth the $12 twice over.",
  },
  {
    name: "Amani K.",
    product: "Invisible Fluid SPF 50",
    rating: 5,
    text: "Finally a sunscreen that doesn't leave a cast on dark skin. I've re ordered it four times — it's my daily.",
  },
  {
    name: "Elena V.",
    product: "Glazing Milk",
    rating: 5,
    text: "The texture is unreal. It layers under my retinol without pilling and my makeup sits better all day.",
  },
  {
    name: "Sofia M.",
    product: "Glycolic Acid 7%",
    rating: 4,
    text: "Use it twice a week max. Brightened my post-acne marks noticeably and my foundation goes on smoother.",
  },
  {
    name: "Theo B.",
    product: "No. 1 Eau de Parfum",
    rating: 5,
    text: "Smells like clean laundry and warm skin. Subtle, not a cloud. I get asked what I'm wearing constantly.",
  },
];

export function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="reviews" ref={ref} className="w-full bg-[#f3f1ed] py-24 sm:py-32">
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", bounce: 0, duration: 0.7 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <div className="text-[13px] font-medium tracking-[0.1em] text-[#6f6a64]">REVIEWS</div>
            <h2 className="mt-4 text-[clamp(32px,5vw,48px)] leading-[1.05] font-semibold tracking-[-0.03em] text-[#111]">
              120,000 people, one shelf.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[15px] text-[#4a4a4a]">
            <span className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-4 fill-[#111]" strokeWidth={0} />
              ))}
            </span>
            4.7 average across all products
          </div>
        </motion.div>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", bounce: 0, duration: 0.6, delay: (i % 3) * 0.08 }}
              className="break-inside-avoid rounded-2xl border border-black/[0.06] bg-white/70 p-6 backdrop-blur-sm"
            >
              <Quote className="size-5 text-[#c8c2ba]" />
              <blockquote className="mt-4 text-[15px] leading-[1.55] text-[#2a2a2a]">"{r.text}"</blockquote>
              <figcaption className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-4">
                <div>
                  <div className="text-[14px] font-semibold text-[#111]">{r.name}</div>
                  <div className="mt-0.5 text-[12px] text-[#6f6a64]">{r.product}</div>
                </div>
                <span className="flex">
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star
                      key={s}
                      className="size-3.5"
                      fill={s < r.rating ? "#111" : "transparent"}
                      strokeWidth={1.2}
                    />
                  ))}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
