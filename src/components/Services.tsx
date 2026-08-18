export default function Services() {
  const services = [
    {
      day: 'Sunday',
      time: '9:00 AM - 11:00 AM',
      type: 'Main Service',
      description: 'Join us for our weekly worship service with contemporary music, preaching, and prayer.'
    },
    {
      day: 'Sunday',
      time: '11:30 AM - 12:30 PM',
      type: 'Children\'s Ministry',
      description: 'Fun and engaging activities for children aged 3-12 with Bible lessons and worship.'
    },
    {
      day: 'Wednesday',
      time: '7:00 PM - 8:30 PM',
      type: 'Mid-Week Service',
      description: 'Intimate worship and prayer time for spiritual growth and fellowship.'
    },
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Service Times</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.day}</h3>
              <p className="text-lg font-bold text-gray-800 mb-2">{service.time}</p>
              <p className="text-sm font-semibold text-gray-600 mb-4">{service.type}</p>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
