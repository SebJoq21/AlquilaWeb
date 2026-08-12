export default function Navbar({ onLogin, onRegister }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      {/* Contenedor más ancho (1400px) con mayor padding lateral en pantallas grandes */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center h-20">

        {/* Izquierda: Logo y Marca */}
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          {/* Reemplaza este SVG por el tuyo, o ajusta sus dimensiones (w-8 h-8) */}
          <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-2xl font-black text-slate-900 tracking-tight">AlquilaWeb</span>
        </div>

        {/* Centro: Enlaces de Navegación (Tipografía más grande: text-base) */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#inicio" className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors">Inicio</a>
          <a href="#demos" className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors">Demos</a>
          <a href="#como-funciona" className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors">Cómo funciona</a>
          <a href="#planes" className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors">Precios</a>
        </div>

        {/* Derecha: Botones de Acción */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={onLogin}
            className="text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={onRegister}
            className="bg-indigo-600 text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            Regístrate
          </button>
        </div>

      </div>
    </nav>
  )
}