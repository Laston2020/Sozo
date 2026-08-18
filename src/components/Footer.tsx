export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sozo Miracle Harvest Church</h3>
            <p className="text-gray-400">
              Growing in faith, serving our community, and experiencing God's transforming grace.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hero" className="hover:text-white transition">Home</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#events" className="hover:text-white transition">Events</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and spiritual insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-800"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {currentYear} Sozo Miracle Harvest Church. All rights reserved.</p>
            <p className="mt-2 text-sm">
              <a href="#" className="hover:text-white transition">Privacy Policy</a> | 
              <a href="#" className="hover:text-white transition"> Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
