export default function Events() {
  const events = [
    {
      title: 'Monthly Prayer Night',
      date: 'First Friday of every month',
      time: '7:00 PM',
      location: 'Main Sanctuary',
      description: 'Join us for a powerful night of intercessory prayer and worship.'
    },
    {
      title: 'Youth Group Meeting',
      date: 'Every Saturday',
      time: '6:00 PM',
      location: 'Fellowship Hall',
      description: 'Fun activities, games, and spiritual growth for teens.'
    },
    {
      title: 'Community Outreach',
      date: 'Second Saturday',
      time: '9:00 AM',
      location: 'Various Locations',
      description: 'Help serve our community through various charitable activities.'
    },
    {
      title: 'Women\'s Bible Study',
      date: 'Tuesday Mornings',
      time: '10:00 AM',
      location: 'Conference Room',
      description: 'Deep dive into Scripture with women from our church community.'
    },
  ]

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p><strong>📅 Date:</strong> {event.date}</p>
                <p><strong>🕐 Time:</strong> {event.time}</p>
                <p><strong>📍 Location:</strong> {event.location}</p>
              </div>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
