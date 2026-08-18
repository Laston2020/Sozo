export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-6">Welcome to Sozo</h2>
        <h3 className="text-2xl font-light mb-8">Miracle Harvest Church</h3>
        <p className="text-xl mb-8 text-blue-100">
          "Come boldly before the throne of grace, that you may obtain mercy and find grace to help in time of need."
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Join Us This Sunday
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
