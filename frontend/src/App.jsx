import { CheckCircle2 } from 'lucide-react'

function App() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <span className="font-black text-2xl tracking-tighter text-slate-900">
            AlquilaWeb
          </span>
          <div className="flex items-center">
            <a
              href="#"
              className="text-slate-600 hover:text-indigo-600 font-medium mr-6 transition-colors"
            >
              Iniciar Sesión
            </a>
            <a
              href="#planes"
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-medium shadow-sm hover:bg-indigo-700 transition-all"
            >
              Empezar ahora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
          Tu restaurante en internet,
          <br />
          sin complicaciones técnicas.
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nosotros creamos, alojamos y mantenemos tu sitio web y carta digital
          mientras tú te enfocas en cocinar.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#planes"
            className="bg-indigo-600 text-white rounded-full px-8 py-3 font-medium shadow-sm hover:bg-indigo-700 transition-all"
          >
            Ver planes
          </a>
          <a
            href="#portafolio"
            className="bg-white text-slate-700 border border-slate-200 rounded-full px-8 py-3 font-medium hover:bg-slate-50 transition-all"
          >
            Ver demos
          </a>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 mb-12">
            Sitios web que abren el apetito
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 transition hover:shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Restaurante demo"
              className="h-96 w-full object-cover"
            />
            <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h3 className="font-bold text-lg text-slate-900">
                Sentimiento Peruano - Restaurante Criollo
              </h3>
              <div className="flex gap-2">
                <span className="bg-indigo-50 text-indigo-700 rounded-full px-3 py-1 text-sm font-medium">
                  Reservas Integradas
                </span>
                <span className="bg-indigo-50 text-indigo-700 rounded-full px-3 py-1 text-sm font-medium">
                  Carta QR
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planes" className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Planes claros, sin sorpresas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Plan Básico */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Básico</h3>
              <p className="text-3xl font-extrabold text-slate-900 mb-6">
                $30 - $40{' '}
                <span className="text-lg font-medium text-slate-500">
                  / mes
                </span>
              </p>
              <p className="text-sm text-slate-500 mb-6">(Sin Landing)</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  Carta Digital en Subdominio
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  Código QR
                </li>
              </ul>
              <div className="mt-auto">
                <a
                  href="#"
                  className="block text-center w-full bg-white text-indigo-600 border border-indigo-600 rounded-full px-6 py-3 font-medium hover:bg-indigo-50 transition-all"
                >
                  Elegir Básico
                </a>
              </div>
            </div>

            {/* Plan Profesional - Destacado */}
            <div className="bg-white p-8 rounded-2xl border-2 border-indigo-600 shadow-2xl relative md:scale-105 flex flex-col z-10">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                Producto Estrella
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Profesional
              </h3>
              <p className="text-3xl font-extrabold text-slate-900 mb-6">
                $65 - $80{' '}
                <span className="text-lg font-medium text-slate-500">
                  / mes
                </span>
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  Landing Page Completa
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  Dominio Propio
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  Carta Digital QR
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  Gestión de contenido por nuestro equipo
                </li>
              </ul>
              <div className="mt-auto">
                <a
                  href="#"
                  className="block text-center w-full bg-indigo-600 text-white rounded-full px-6 py-3 font-medium shadow-sm hover:bg-indigo-700 transition-all"
                >
                  Elegir Profesional
                </a>
              </div>
            </div>

            {/* Plan Añadidos */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Añadidos
              </h3>
              <p className="text-3xl font-extrabold text-slate-900 mb-6">
                + $25{' '}
                <span className="text-lg font-medium text-slate-500">
                  / módulo
                </span>
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  Funcionalidades extras a medida
                </li>
              </ul>
              <div className="mt-auto">
                <a
                  href="#"
                  className="block text-center w-full bg-white text-indigo-600 border border-indigo-600 rounded-full px-6 py-3 font-medium hover:bg-indigo-50 transition-all"
                >
                  Personalizar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>
            © 2026 AlquilaWeb. Todos los derechos reservados. Impulsando la
            gastronomía con tecnología.
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App
