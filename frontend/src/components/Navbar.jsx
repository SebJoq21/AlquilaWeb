import { Layers } from 'lucide-react'

function Navbar({ onLogin, onRegister }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <a
          href="#"
          className="flex items-center gap-2 text-2xl font-black tracking-tighter text-slate-900"
        >
          <Layers className="w-6 h-6 text-indigo-600" />
          AlquilaWeb
        </a>
        <div className="hidden md:flex gap-8">
          <a
            href="#inicio"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Inicio
          </a>
          <a
            href="#como-funciona"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Cómo funciona
          </a>
          <a
            href="#demos"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Demos
          </a>
          <a
            href="#planes"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Precios
          </a>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            onClick={onLogin}
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 mr-6 transition-colors cursor-pointer"
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            onClick={onRegister}
            className="bg-indigo-600 text-white text-sm px-5 py-2.5 rounded-full font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Regístrate
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
