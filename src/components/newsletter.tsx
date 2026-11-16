import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setTimeout(() => { setDone(false); setEmail(""); }, 2800);
  };

  return (
    <section className="w-full bg-[#f3f1ed] py-24 sm:py-28">
      <div className="mx-auto max-w-[720px] px-5 text-center sm:px-8">
        <h2 className="text-[clamp(28px,4.5vw,40px)] leading-[1.1] font-semibold tracking-[-0.025em] text-[#111]">
          Get the ingredient breakdown.
        </h2>
        <p className="mx-auto mt-4 max-w-[44ch] text-[16px] leading-[1.5] text-[#4a4a4a]">
          One email a month. New formulas, lab notes, and the occasional restock alert.
          No marketing fluff.
        </p>

        <form onSubmit={submit} className="mx-auto mt-8 flex max-w-[420px] items-center gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="h-12 flex-1 rounded-[10px] border border-[#c8c2ba] bg-white px-4 text-[15px] text-[#111] outline-none transition-[border-color] focus:border-[#111]"
          />
          <button
            type="submit"
            className="grid h-12 w-12 place-items-center rounded-[10px] bg-[#111] text-white transition-[background-color,transform] hover:bg-black active:scale-95"
            aria-label="Subscribe"
          >
            <AnimatePresence mode="wait">
              {done ? (
                <motion.span key="ok" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Check className="size-5" />
                </motion.span>
              ) : (
                <motion.span key="arr" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <ArrowRight className="size-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </form>
        {done && <p className="mt-3 text-[14px] text-[#5a7c4e]">You're on the list. See you next month.</p>}
      </div>
    </section>
  );
}
