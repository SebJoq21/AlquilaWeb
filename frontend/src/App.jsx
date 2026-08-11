import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import Terminos from './pages/Terminos'
import ClientDashboard from './pages/ClientDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App