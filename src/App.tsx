import { NavLinks } from "@/components/nav-links";
import { Hero } from "@/components/hero";
import { ProductShelf } from "@/components/ui/skincare-product-shelf";
import { Routine } from "@/components/routine";
import { Philosophy } from "@/components/philosophy";
import { Reviews } from "@/components/reviews";
import { Journal } from "@/components/journal";
import { Newsletter } from "@/components/newsletter";
import { SiteFooter } from "@/components/site-footer";

export default function App() {
  return (
    <div className="min-h-dvh w-full bg-[#f3f1ed] font-sans text-[#111] antialiased">
      <NavLinks />
      <Hero />

      <div id="shelf" className="scroll-mt-16">
        <ProductShelf />
      </div>

      <Routine />
      <Philosophy />
      <Reviews />
      <Journal />
      <Newsletter />
      <SiteFooter />
    </div>
  );
}
