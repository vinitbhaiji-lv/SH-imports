import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

function BestSellers() {
  const containerRef = useRef(null)

  // Track scroll relative to THIS section only
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Each card scales down slightly as we scroll
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <section
      ref={containerRef}
      className="relative bg-brand-emerald"
      style={{ height: "200vh" }} // Important: creates scroll space
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        
        <div className="relative w-[520px] h-[480px]">

          {/* CARD 1 */}
          <motion.div
            style={{ scale: scale1 }}
            className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1000"
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            style={{ scale: scale2 }}
            className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000"
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            style={{ scale: scale3 }}
            className="absolute w-full h-full rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1000"
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default BestSellers
