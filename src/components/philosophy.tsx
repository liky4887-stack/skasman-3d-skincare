import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Beaker, Recycle, ShieldCheck, Rabbit } from "lucide-react";

const PILLARS = [
  { icon: Beaker, title: "Clinical concentrations", desc: "Actives are dosed at the percentages shown in published studies, not sprinkled for a label claim." },
  { icon: ShieldCheck, title: "Barrier first", desc: "Every formula is pH-balanced and tested on compromised skin — no stinging, no rebound dryness." },
  { icon: Rabbit, title: "Cruelty free, always", desc: "Leaping Bunny certified. We never test on animals and neither do the labs we work with." },
  { icon: Recycle, title: "Refillable packaging", desc: "Our bottles and jars are designed to be refilled. Aluminium and glass, not single-use plastic." },
];

export function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="philosophy" ref={ref} className="relative w-full overflow-hidden bg-[#1a1a1a] py-24 text-[#f3f1ed] sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#2a2a2a] opacity-60 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1080px] px-5 sm:px-8">
        <div className="grid items-end gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", bounce: 0, duration: 0.7 }}
          >
            <div className="text-[13px] font-medium tracking-[0.1em] text-[#8f8982]">OUR PHILOSOPHY</div>
            <h2 className="mt-4 text-[clamp(32px,5vw,48px)] leading-[1.05] font-semibold tracking-[-0.03em]">
              Less guesswork, better skin.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", bounce: 0, duration: 0.7, delay: 0.1 }}
            className="text-[17px] leading-[1.5] text-[#b8b2aa]"
          >
            Skincare shouldn't be a leap of faith. We publish every concentration,
            every pH, and every ingredient's reason for being in the bottle — so
            you can read the label and know exactly what you're putting on your face.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", bounce: 0, duration: 0.7, delay: 0.2 + i * 0.08 }}
                className="group bg-[#1a1a1a] p-7 transition-colors duration-300 hover:bg-[#222]"
              >
                <Icon className="size-6 text-[#d4c9b8]" strokeWidth={1.5} />
                <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.01em]">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-[#9c958c]">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
