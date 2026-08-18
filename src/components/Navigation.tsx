export default function Navigation() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Sozo</h1>
            <span className="ml-2 text-sm text-gray-600">Miracle Harvest Church</span>
          </div>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#hero" className="text-gray-700 hover:text-blue-600 transition">Home</a></li>
            <li><a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a></li>
            <li><a href="#events" className="text-gray-700 hover:text-blue-600 transition">Events</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a></li>
          </ul>
          <button className="md:hidden text-gray-700">☰</button>
        </div>
      </div>
    </nav>
  )
}
