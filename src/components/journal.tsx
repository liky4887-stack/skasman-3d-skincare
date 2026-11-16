import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    tag: "Ingredients",
    title: "Why ceramides need cholesterol to work",
    excerpt: "Ceramides alone are like bricks without mortar. Here's what the clinical ratios actually look like, and why we follow them.",
    read: "6 min read",
    image: "https://images.pexels.com/photos/8450120/pexels-photo-8450120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    tag: "Routine",
    title: "How to layer actives without irritation",
    excerpt: "Retinol, acids, vitamin C — the order matters more than the products. A dermatist's guide to a calm barrier.",
    read: "8 min read",
    image: "https://images.pexels.com/photos/15831825/pexels-photo-15831825.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    tag: "Lab notes",
    title: "What pH does to your skin barrier",
    excerpt: "We formulate every product between pH 4.5 and 5.5. Here's the chemistry behind that number and why it's non-negotiable.",
    read: "5 min read",
    image: "https://images.pexels.com/photos/16100838/pexels-photo-16100838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

export function Journal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journal" ref={ref} className="w-full bg-[#ebe7e1] py-24 sm:py-32">
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", bounce: 0, duration: 0.7 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <div className="text-[13px] font-medium tracking-[0.1em] text-[#6f6a64]">THE JOURNAL</div>
            <h2 className="mt-4 text-[clamp(32px,5vw,48px)] leading-[1.05] font-semibold tracking-[-0.03em] text-[#111]">
              Read the label with us.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1 text-[15px] font-medium text-[#111] underline-offset-4 hover:underline">
            All articles <ArrowUpRight className="size-4" />
          </a>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <motion.a
              key={post.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", bounce: 0, duration: 0.7, delay: 0.15 + i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white/70 backdrop-blur-sm transition-[box-shadow,transform] duration-300 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[12px] font-medium text-[#111] backdrop-blur">
                  {post.tag}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[19px] font-semibold leading-tight tracking-[-0.01em] text-[#111]">{post.title}</h3>
                <p className="mt-2 flex-1 text-[14px] leading-[1.5] text-[#4a4a4a]">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-4">
                  <span className="text-[12px] text-[#8f8982]">{post.read}</span>
                  <ArrowUpRight className="size-4 text-[#111] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
