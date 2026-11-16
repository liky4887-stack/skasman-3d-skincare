import { Instagram, Twitter, Youtube } from "lucide-react";

const COLS = [
  { title: "Shop", links: ["Skincare", "Treatments", "Fragrance", "Body & lips", "Sets"] },
  { title: "About", links: ["Our philosophy", "Ingredients", "Lab notes", "Sustainability", "Careers"] },
  { title: "Help", links: ["Shipping", "Returns", "Track order", "Contact", "FAQ"] },
];

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#1a1a1a] py-16 text-[#b8b2aa]">
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="text-[18px] font-semibold tracking-[0.22em] text-[#f3f1ed]">SKASMAN</div>
            <p className="mt-4 max-w-[28ch] text-[14px] leading-[1.5]">
              Clinically dosed skincare, built for the skin you live in. Made in small batches.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid size-9 place-items-center rounded-lg border border-white/10 text-[#b8b2aa] transition-colors hover:border-white/30 hover:text-white"
                >
                  <Icon className="size-[16px]" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <div className="text-[14px] font-semibold text-[#f3f1ed]">{col.title}</div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[14px] text-[#9c958c] transition-colors hover:text-white">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-[#8f8982] sm:flex-row">
          <p>© {new Date().getFullYear()} Skasman. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
