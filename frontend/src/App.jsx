import Navbar from "./components/Navbar"
import BestSellers from "./components/bestsellers"

function App() {
  return (
    <div className="min-h-screen bg-brand-emerald">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-emerald">

        {/* Gold Spotlight */}
        <div
          className="absolute left-1/2 top-1/2 
                     -translate-x-1/2 -translate-y-1/2
                     w-[900px] h-[900px]
                     rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(219,187,79,0.12) 0%, rgba(219,187,79,0.05) 35%, transparent 70%)",
          }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl text-brand-gold font-semibold tracking-wide">
            Curated Luxury Fragrances
          </h1>

          <p className="mt-6 text-lg md:text-xl text-brand-gold/80 max-w-2xl mx-auto">
            Discover timeless scents crafted for distinction.
          </p>
        </div>

      </section>

      {/* BEST SELLERS ANIMATION SECTION */}
      <BestSellers />

      {/* NEXT SECTION */}
      <section className="min-h-screen flex items-center justify-center text-brand-gold">
        <h2 className="text-4xl">Next Section</h2>
      </section>

    </div>
  )
}

export default App
