import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  )
}

export default Home
