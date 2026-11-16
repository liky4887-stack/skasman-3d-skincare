import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Sun, Droplets, Moon, Sparkles } from "lucide-react";

const STEPS = [
  {
    icon: Sun,
    time: "AM",
    title: "Cleanse & protect",
    desc: "Start with Squalane Cleanser to lift overnight oil, then layer Hyaluronic Acid on damp skin. Finish with Invisible Fluid SPF 50.",
    products: ["Squalane Cleanser", "Hyaluronic Acid 2% + B5", "Invisible Fluid SPF 50"],
  },
  {
    icon: Droplets,
    time: "Midday",
    title: "Refresh & hydrate",
    desc: "A few drops of Glazing Milk over makeup revives glow without disturbing the layer underneath. Press, don't rub.",
    products: ["Glazing Milk", "Niacinamide 10% + Zinc 1%"],
  },
  {
    icon: Moon,
    time: "PM",
    title: "Treat & restore",
    desc: "Glycolic Acid two nights a week for resurfacing. Every night, Barrier Butter seals everything in while bakuchiol works.",
    products: ["Glycolic Acid 7%", "Barrier Butter Night Cream", "Peptide Lip Treatment"],
  },
];

export function Routine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="routine" ref={ref} className="relative w-full bg-[#ebe7e1] py-24 sm:py-32">
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", bounce: 0, duration: 0.7 }}
          className="max-w-[560px]"
        >
          <div className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.1em] text-[#6f6a64]">
            <Sparkles className="size-3.5" /> THE ROUTINE
          </div>
          <h2 className="mt-4 text-[clamp(32px,5vw,48px)] leading-[1.05] font-semibold tracking-[-0.03em] text-[#111]">
            Three moments, one calm day.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.5] text-[#4a4a4a]">
            You don't need twelve products at once. Here's how our formulas layer
            from morning to night — the concentrations are chosen so nothing fights.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", bounce: 0, duration: 0.7, delay: 0.15 + i * 0.1 }}
                className="group rounded-2xl border border-black/[0.06] bg-white/70 p-7 backdrop-blur-sm transition-[box-shadow,transform] duration-300 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-full bg-[#f3f1ed] text-[#111]">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </div>
                  <span className="text-[13px] font-semibold tracking-[0.15em] text-[#8f8982]">{step.time}</span>
                </div>
                <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.02em] text-[#111]">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.55] text-[#4a4a4a]">{step.desc}</p>
                <div className="mt-6 space-y-2 border-t border-black/[0.06] pt-5">
                  {step.products.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-[14px] text-[#3a3a3a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#111]" />
                      {p}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
