import { motion } from "motion/react";
import { ArrowDown, Leaf, Sparkles } from "lucide-react";

const SPRING = { type: "spring" as const, bounce: 0, duration: 0.7 };

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] w-full overflow-hidden bg-[#f3f1ed]">
      {/* ambient gradient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#e8ddd0] opacity-60 blur-[120px]" />
        <div className="absolute right-[5%] bottom-[10%] h-[380px] w-[380px] rounded-full bg-[#dfe5e8] opacity-50 blur-[130px]" />
      </div>

      <div className="relative mx-auto flex min-h-[100dvh] max-w-[1180px] flex-col justify-center px-5 pt-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.1 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-black/[0.08] bg-white/60 px-3.5 py-1.5 text-[13px] text-[#3a3a3a] backdrop-blur"
        >
          <Leaf className="size-3.5 text-[#5a7c4e]" />
          Clinically tested. Clean by default.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.18 }}
          className="mt-6 max-w-[16ch] text-[clamp(44px,8vw,84px)] leading-[0.98] font-semibold tracking-[-0.035em] text-[#111]"
        >
          Skincare built for the skin you live in.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.26 }}
          className="mt-6 max-w-[48ch] text-[clamp(17px,2vw,20px)] leading-[1.5] text-[#4a4a4a]"
        >
          Twelve formulas, one shelf. Ceramides, peptides and actives at honest
          concentrations — pick a product, spin it in 3D, and build the routine
          your barrier asks for.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.34 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#shelf"
            className="inline-flex h-12 items-center gap-2 rounded-[10px] bg-[#111] px-6 text-[15px] font-medium text-white transition-[transform,background-color] duration-100 hover:bg-black active:scale-[0.98]"
          >
            <Sparkles className="size-4" />
            Explore the shelf
          </a>
          <a
            href="#routine"
            className="inline-flex h-12 items-center rounded-[10px] border border-[#c8c2ba] bg-white/70 px-6 text-[15px] font-medium text-[#111] backdrop-blur transition-[border-color] duration-100 hover:border-[#8f8982]"
          >
            Build a routine
          </a>
        </motion.div>

        {/* stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.42 }}
          className="mt-16 grid max-w-[640px] grid-cols-3 gap-6 border-t border-black/[0.08] pt-6"
        >
          {[
            { n: "4.7★", l: "Avg. rating" },
            { n: "120k+", l: "Reviews" },
            { n: "100%", l: "Fragrance free" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-[clamp(22px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#111]">{s.n}</div>
              <div className="mt-0.5 text-[13px] text-[#6f6a64]">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#shelf"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[#6f6a64] sm:flex"
      >
        <span className="text-[12px] tracking-[0.1em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
