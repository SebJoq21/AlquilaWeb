import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import Terminos from './pages/Terminos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App