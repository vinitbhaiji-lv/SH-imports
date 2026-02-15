import { motion, useScroll, useTransform } from "framer-motion"

function BestSellers() {
  const { scrollYProgress } = useScroll()

  // Use tighter scroll window
  const progress = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  // Card 1
  const scale1 = useTransform(progress, [0, 0.5, 1], [1, 0.92, 0.88])
  const y1 = useTransform(progress, [0, 0.5, 1], [0, -30, -60])
  const opacity1 = useTransform(progress, [0, 0.5, 1], [1, 0.85, 0.7])

  // Card 2
  const scale2 = useTransform(progress, [0, 0.5, 1], [0.92, 1, 0.92])
  const y2 = useTransform(progress, [0, 0.5, 1], [30, 0, -30])
  const opacity2 = useTransform(progress, [0, 0.5, 1], [0.85, 1, 0.85])

  // Card 3
  const scale3 = useTransform(progress, [0, 0.5, 1], [0.88, 0.92, 1])
  const y3 = useTransform(progress, [0, 0.5, 1], [60, 30, 0])
  const opacity3 = useTransform(progress, [0, 0.5, 1], [0.7, 0.85, 1])

  return (
    <section className="relative min-h-screen bg-brand-emerald flex items-center justify-center">

      <div className="relative w-[520px] h-[480px]">

        {/* CARD 1 */}
        <motion.div
          style={{ scale: scale1, y: y1, opacity: opacity1, zIndex: 3 }}
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
          style={{ scale: scale2, y: y2, opacity: opacity2, zIndex: 2 }}
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
          style={{ scale: scale3, y: y3, opacity: opacity3, zIndex: 1 }}
          className="absolute w-full h-full rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1000"
            className="w-full h-full object-cover"
            alt=""
          />
        </motion.div>

      </div>

    </section>
  )
}

export default BestSellers
