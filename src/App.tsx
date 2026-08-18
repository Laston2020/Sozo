import './index.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Events />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
