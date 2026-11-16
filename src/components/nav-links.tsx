import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Shop", href: "#shelf" },
  { label: "Routine", href: "#routine" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Reviews", href: "#reviews" },
  { label: "Journal", href: "#journal" },
];

export function NavLinks() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Centered desktop nav — z-15 so it's hidden behind the product page overlay (z-20) */}
      <nav
        className={cn(
          "fixed top-0 left-1/2 z-[15] hidden -translate-x-1/2 items-center gap-7 px-4 transition-all duration-300 md:flex",
          scrolled ? "h-16" : "h-16",
        )}
      >
        {NAV.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[14px] text-[#3a3a3a] transition-colors hover:text-[#111]"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile menu trigger — z-15, same logic */}
      <button
        aria-label="Menu"
        onClick={() => setOpen(true)}
        className="fixed top-4 left-1/2 z-[15] -translate-x-1/2 grid size-11 place-items-center rounded-xl bg-white/80 text-[#111] shadow-[0_2px_12px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06] backdrop-blur-xl transition-colors hover:bg-white md:hidden"
      >
        <Menu className="size-[18px]" strokeWidth={1.7} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div className="absolute inset-0 bg-[#f3f1ed]" />
            <div className="relative flex h-full flex-col">
              <div className="flex h-16 items-center justify-end px-5">
                <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid size-10 place-items-center rounded-lg hover:bg-black/[0.06]">
                  <X className="size-[20px]" />
                </button>
              </div>
              <nav className="flex flex-col px-5">
                {NAV.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    className="border-b border-black/[0.06] py-5 text-[22px] font-medium tracking-[-0.01em]"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
