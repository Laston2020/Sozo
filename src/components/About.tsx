export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Sozo</h2>
            <p className="text-gray-700 mb-4">
              Sozo Miracle Harvest Church is a thriving community of believers dedicated to spreading the Gospel of Jesus Christ and serving our community with love and compassion.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to create a welcoming environment where people can experience God's love, grow spiritually, and make a positive impact in the world.
            </p>
            <p className="text-gray-700 mb-6">
              We believe in the power of prayer, the importance of fellowship, and the transformative work of the Holy Spirit in our lives and communities.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-2xl text-blue-600 mr-3">✓</span>
                <p className="text-gray-700"><strong>Bible-Centered Teaching</strong> - Grounded in Scripture</p>
              </div>
              <div className="flex items-start">
                <span className="text-2xl text-blue-600 mr-3">✓</span>
                <p className="text-gray-700"><strong>Community Outreach</strong> - Serving those in need</p>
              </div>
              <div className="flex items-start">
                <span className="text-2xl text-blue-600 mr-3">✓</span>
                <p className="text-gray-700"><strong>Fellowship & Growth</strong> - Building meaningful relationships</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
            <p className="mb-6 text-blue-100">
              To be a beacon of hope and light in our community, transformed by God's grace and empowered by the Holy Spirit to reach, teach, and serve.
            </p>
            <h3 className="text-2xl font-bold mb-6">Our Values</h3>
            <ul className="space-y-3 text-blue-100">
              <li>• <strong>Faith</strong> - In Jesus Christ as our Savior</li>
              <li>• <strong>Love</strong> - For God and one another</li>
              <li>• <strong>Service</strong> - To our community and world</li>
              <li>• <strong>Growth</strong> - Spiritual maturity and development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
