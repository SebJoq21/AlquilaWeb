import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import AuthModal from '../components/AuthModal'

function Home() {
  const [authModal, setAuthModal] = useState(null)

  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar
        onLogin={() => setAuthModal('login')}
        onRegister={() => setAuthModal('register')}
      />
      <Hero />
      <Portfolio />
      <HowItWorks />
      <Pricing onRegister={() => setAuthModal('register')} />
      <Footer />

      {authModal && (
        <AuthModal
          mode={authModal}
          onClose={() => setAuthModal(null)}
          onToggle={setAuthModal}
        />
      )}
    </main>
  )
}

export default Home
