import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const products = [
  {
    id: 1,
    title: "Cloud Sneaker Pro",
    subtitle: "Bestseller #1",
    price: "$189",
    tag: "Most Loved",
    img: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1200",
    accent: "#c8f0de",
  },
  {
    id: 2,
    title: "Urban Drift Low",
    subtitle: "Bestseller #2",
    price: "$149",
    tag: "Trending",
    img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200",
    accent: "#fde8d8",
  },
  {
    id: 3,
    title: "Night Runner X",
    subtitle: "Bestseller #3",
    price: "$219",
    tag: "Editor's Pick",
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200",
    accent: "#e0d8fd",
  },
  {
    id: 4,
    title: "Retro Blaze Mid",
    subtitle: "Bestseller #4",
    price: "$165",
    tag: "Fan Favourite",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
    accent: "#fdf4c8",
  },
  {
    id: 5,
    title: "Apex Trail Zero",
    subtitle: "Bestseller #5",
    price: "$239",
    tag: "New Drop",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200",
    accent: "#d8eafd",
  },
]

// Each card independently manages its own scroll segment
function ScrollCard({ product, index, total, scrollYProgress }) {
  const segments = Math.max(1, total - 1)
  const segmentSize = 1 / segments

  let input, xOutput, scaleOutput, opacityOutput

  if (index === 0) {
    input = [0, 1]
    xOutput = ["0%", `-${segments * 6}%`]
    scaleOutput = [1, 1 - segments * 0.05]
    opacityOutput = [1, 0.5]
  } else {
    const enterStart = (index - 1) * segmentSize
    const enterEnd = index * segmentSize

    if (index === total - 1) {
      input = [Math.max(0, enterStart - 0.001), enterStart, 1]
      xOutput = ["120%", "120%", "0%"]
      scaleOutput = [1, 1, 1]
      opacityOutput = [0, 1, 1]
    } else {
      input = [Math.max(0, enterStart - 0.001), enterStart, enterEnd, 1]
      xOutput = ["120%", "120%", "0%", `-${(segments - index) * 6}%`]
      scaleOutput = [1, 1, 1, 1 - (segments - index) * 0.05]
      opacityOutput = [0, 1, 1, 0.5]
    }

    if (enterStart === 0) {
      if (index === total - 1) {
        input = [0, 1]
        xOutput = ["120%", "0%"]
        scaleOutput = [1, 1]
        opacityOutput = [1, 1]
      } else {
        input = [0, enterEnd, 1]
        xOutput = ["120%", "0%", `-${(segments - index) * 6}%`]
        scaleOutput = [1, 1, 1 - (segments - index) * 0.05]
        opacityOutput = [1, 1, 0.5]
      }
    }
  }

  const x = useTransform(scrollYProgress, input, xOutput)
  const scale = useTransform(scrollYProgress, input, scaleOutput)
  const opacity = useTransform(scrollYProgress, input, opacityOutput)

  return (
    <motion.div
      style={{
        x,
        scale,
        opacity,
        zIndex: index,
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        transformOrigin: "center left",
      }}
    >
      <div
        className="relative w-full h-full rounded-3xl overflow-hidden"
        style={{
          background: product.accent,
          boxShadow: "-8px 0 32px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        {/* Background image */}
        <img
          src={product.img}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.88 }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.12) 45%, rgba(0,0,0,0.82) 100%)",
          }}
        />

        {/* Top row */}
        <div className="absolute top-7 left-7 right-7 flex items-center justify-between">
          <span
            className="text-xs font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full"
            style={{ background: product.accent, color: "#111" }}
          >
            {product.tag}
          </span>
          <span
            className="text-sm font-mono font-semibold"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {String(product.id).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-9">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-2"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {product.subtitle}
          </p>
          <div className="flex items-end justify-between mb-5">
            <h3
              className="text-4xl md:text-5xl font-bold leading-none text-white"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.03em" }}
            >
              {product.title}
            </h3>
            <span
              className="text-3xl font-bold text-white ml-4 shrink-0"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {product.price}
            </span>
          </div>

          <div className="flex gap-3">
            <button
              className="flex-1 py-4 rounded-2xl text-sm font-bold tracking-wide transition-transform hover:scale-105"
              style={{ background: product.accent, color: "#111", border: "none" }}
            >
              Shop Now
            </button>
            <button
              className="px-5 py-4 rounded-2xl text-sm font-bold transition-transform hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.2)",
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

function ProgressDot({ index, total, scrollYProgress }) {
  const segments = Math.max(1, total - 1)
  const activeAt = index / segments

  let input, widthOutput, opacityOutput
  if (activeAt === 0) {
    input = [0, 0.1]
    widthOutput = [24, 8]
    opacityOutput = [1, 0.3]
  } else if (activeAt === 1) {
    input = [0.9, 1]
    widthOutput = [8, 24]
    opacityOutput = [0.3, 1]
  } else {
    input = [activeAt - 0.1, activeAt, activeAt + 0.1]
    widthOutput = [8, 24, 8]
    opacityOutput = [0.3, 1, 0.3]
  }

  const width = useTransform(scrollYProgress, input, widthOutput)
  const opacity = useTransform(scrollYProgress, input, opacityOutput)

  return (
    <motion.div
      style={{ width, opacity }}
      className="h-2 rounded-full bg-white flex-shrink-0"
    />
  )
}

function BestSellers() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0a0a0a]"
      // (total cards) * 100vh gives one full viewport of scroll per card
      style={{ height: `${products.length * 100 + 50}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-between overflow-hidden py-6 px-4">

        {/* Header */}
        <div className="text-center z-10 pt-1 shrink-0">
          <p
            className="text-[10px] tracking-[0.4em] uppercase mb-1"
            style={{ color: "rgba(255,255,255,0.28)", fontFamily: "monospace" }}
          >
            Scroll to explore
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.03em" }}
          >
            Best Sellers
          </h2>
        </div>

        {/* Card stack */}
        <div
          className="relative w-full flex-1 my-4"
          style={{
            maxWidth: "520px",
            maxHeight: "calc(100vh - 155px)",
          }}
        >
          {/* Render in original order; ScrollCard uses index for zIndex to place later elements on top */}
          {products.map((product, index) => {
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

        {/* Progress dots */}
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

      </div>
    </section>
  )
}

export default BestSellers
