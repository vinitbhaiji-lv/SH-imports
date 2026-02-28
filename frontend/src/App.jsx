import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "./components/Navbar"

// ─── Product Data ─────────────────────────────────────────────────────────────

const products = [
  {
    id: 1,
    title: "Cloud Sneaker Pro",
    subtitle: "Bestseller #1",
    price: "$189",
    tag: "Most Loved",
    img: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1200",
  },
  {
    id: 2,
    title: "Urban Drift Low",
    subtitle: "Bestseller #2",
    price: "$149",
    tag: "Trending",
    img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200",
  },
  {
    id: 3,
    title: "Night Runner X",
    subtitle: "Bestseller #3",
    price: "$219",
    tag: "Editor's Pick",
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200",
  },
  {
    id: 4,
    title: "Retro Blaze Mid",
    subtitle: "Bestseller #4",
    price: "$165",
    tag: "Fan Favourite",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
  },
  {
    id: 5,
    title: "Apex Trail Zero",
    subtitle: "Bestseller #5",
    price: "$239",
    tag: "New Drop",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200",
  },
]

// Brand tokens — mirrors your Tailwind config
const EMERALD = "#0d4a3a"      // brand-emerald (adjust if your value differs)
const GOLD = "#DBB74F"      // brand-gold

// ─── Scroll Card ──────────────────────────────────────────────────────────────

function ScrollCard({ product, index, total, scrollYProgress }) {
  const segmentSize = 1 / total
  const exitStart = index * segmentSize
  const exitEnd = exitStart + segmentSize
  const enterStart = Math.max(0, (index - 1) * segmentSize)
  const enterEnd = index * segmentSize
  const isLastCard = index === total - 1

  const y = useTransform(scrollYProgress, [exitStart, exitEnd], ["0%", "-115%"])
  const opacity = useTransform(scrollYProgress, [exitStart, exitEnd * 0.85, exitEnd], [1, 1, 0])
  const exitScale = useTransform(scrollYProgress, [exitStart, exitEnd], [1, 0.96])
  const enterScale = useTransform(scrollYProgress, [enterStart, enterEnd], [0.88, 1])
  const enterY = useTransform(scrollYProgress, [enterStart, enterEnd], ["4%", "0%"])

  return (
    <motion.div
      style={{
        y: isLastCard ? enterY : y,
        opacity: isLastCard ? 1 : opacity,
        scale: isLastCard ? enterScale : exitScale,
        zIndex: total - index,
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    >
      {/* Card shell — deep emerald background */}
      <div
        className="relative w-full h-full rounded-3xl overflow-hidden"
        style={{
          background: EMERALD,
          boxShadow: `0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(219,183,79,0.15)`,
        }}
      >
        {/* Photo */}
        <img
          src={product.img}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.45, mixBlendMode: "luminosity" }}
        />

        {/* Emerald tint wash over photo */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, ${EMERALD}cc 0%, ${EMERALD}55 40%, ${EMERALD}ee 100%)`,
          }}
        />

        {/* Subtle gold radial glow — centre */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 40%, rgba(219,183,79,0.08) 0%, transparent 70%)`,
          }}
        />

        {/* Top row */}
        <div className="absolute top-7 left-7 right-7 flex items-center justify-between">
          <span
            className="text-xs font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full"
            style={{
              background: "rgba(219,183,79,0.15)",
              color: GOLD,
              border: `1px solid rgba(219,183,79,0.3)`,
              backdropFilter: "blur(8px)",
            }}
          >
            {product.tag}
          </span>
          <span
            className="text-sm font-mono font-semibold"
            style={{ color: `rgba(219,183,79,0.45)` }}
          >
            {String(product.id).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Decorative gold divider line */}
        <div
          className="absolute left-7 right-7"
          style={{
            bottom: "155px",
            height: "1px",
            background: `linear-gradient(to right, transparent, rgba(219,183,79,0.3), transparent)`,
          }}
        />

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-7 pb-8">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-2"
            style={{ color: `rgba(219,183,79,0.5)` }}
          >
            {product.subtitle}
          </p>
          <div className="flex items-end justify-between mb-5">
            <h3
              className="text-4xl md:text-5xl font-bold leading-none"
              style={{
                color: GOLD,
                fontFamily: "'Georgia', serif",
                letterSpacing: "-0.03em",
              }}
            >
              {product.title}
            </h3>
            <span
              className="text-2xl font-bold ml-4 shrink-0"
              style={{ color: GOLD, fontFamily: "'Georgia', serif" }}
            >
              {product.price}
            </span>
          </div>

          <div className="flex gap-3">
            {/* Primary CTA — gold fill */}
            <button
              className="flex-1 py-4 rounded-2xl text-sm font-bold tracking-wide transition-opacity hover:opacity-90"
              style={{ background: GOLD, color: EMERALD, border: "none" }}
            >
              Shop Now
            </button>
            {/* Wishlist — glass */}
            <button
              className="px-5 py-4 rounded-2xl text-sm font-bold transition-colors hover:bg-white/10"
              style={{
                background: "rgba(219,183,79,0.1)",
                color: GOLD,
                border: `1px solid rgba(219,183,79,0.25)`,
                backdropFilter: "blur(8px)",
              }}
            >
              ♡
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Progress Dot ─────────────────────────────────────────────────────────────

function ProgressDot({ index, total, scrollYProgress }) {
  const segmentSize = 1 / total
  const start = index * segmentSize
  const end = start + segmentSize

  const width = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.001), start, Math.min(1, end - 0.001), end],
    [8, 24, 24, 8]
  )
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.001), start, Math.min(1, end - 0.001), end],
    [0.3, 1, 1, 0.3]
  )

  return (
    <motion.div
      style={{ width, opacity, background: GOLD }}
      className="h-2 rounded-full flex-shrink-0"
    />
  )
}

// ─── Hero + BestSellers ───────────────────────────────────────────────────────

function HeroWithBestSellers() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.03], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.03], ["0%", "-8%"])
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.03], [0, 1])

  return (
    <section
      ref={containerRef}
      className="relative bg-brand-emerald"
      style={{ height: `${products.length * 100 + 100}vh` }}
    >
      {/* Gold spotlight — fixed behind everything */}
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[900px] h-[900px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(219,187,79,0.12) 0%, rgba(219,187,79,0.05) 35%, transparent 70%)",
        }}
      />

      <div className="sticky top-0 h-screen flex flex-col items-center justify-between overflow-hidden">

        {/* Hero text */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 text-center pointer-events-none"
        >
          <h1 className="text-6xl md:text-7xl text-brand-gold font-semibold tracking-wide">
            Curated Luxury Fragrances
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-gold/80 max-w-2xl mx-auto">
            Discover timeless scents crafted for distinction.
          </p>
          <p
            className="mt-10 text-xs tracking-[0.4em] uppercase animate-bounce"
            style={{ color: "rgba(219,187,79,0.4)", fontFamily: "monospace" }}
          >
            Scroll to explore
          </p>
        </motion.div>

        {/* Card stack */}
        <motion.div
          style={{ opacity: cardsOpacity }}
          className="w-full h-full flex flex-col items-center justify-between py-6 px-4"
        >
          <div className="text-center z-10 pt-1 shrink-0">
            <p
              className="text-[10px] tracking-[0.4em] uppercase"
              style={{ color: "rgba(219,187,79,0.4)", fontFamily: "monospace" }}
            >
              Best Sellers
            </p>
          </div>

          <div
            className="relative w-full flex-1 my-3"
            style={{ maxWidth: "520px", maxHeight: "calc(100vh - 120px)" }}
          >
            {[...products].reverse().map((product, reversedIndex) => {
              const index = products.length - 1 - reversedIndex
              return (
                <ScrollCard
                  key={product.id}
                  product={product}
                  index={index}
                  total={products.length}
                  scrollYProgress={scrollYProgress}
                />
              )
            })}
          </div>

          <div className="flex items-center gap-2 z-10 pb-1 shrink-0">
            {products.map((_, i) => (
              <ProgressDot
                key={i}
                index={i}
                total={products.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  return (
    <div className="min-h-screen bg-brand-emerald">
      <Navbar />
      <HeroWithBestSellers />

      <section className="min-h-screen flex items-center justify-center text-brand-gold">
        <h2 className="text-4xl">Next Section</h2>
      </section>
    </div>
  )
}

export default App
