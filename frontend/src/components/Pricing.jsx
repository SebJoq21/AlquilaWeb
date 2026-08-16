import { CheckCircle2 } from 'lucide-react'

function Pricing({ onRegister }) {
  return (
    <section id="pricing" className="bg-slate-50 py-24">
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
              <button
                type="button"
                onClick={onRegister}
                className="block text-center w-full bg-white text-indigo-600 border border-indigo-600 rounded-full px-6 py-3 font-medium hover:bg-indigo-50 hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Elegir Básico
              </button>
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
              <button
                type="button"
                onClick={onRegister}
                className="block text-center w-full bg-indigo-600 text-white rounded-full px-6 py-3 font-medium shadow-sm hover:bg-indigo-700 hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Elegir Profesional
              </button>
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
              <button
                type="button"
                onClick={onRegister}
                className="block text-center w-full bg-white text-indigo-600 border border-indigo-600 rounded-full px-6 py-3 font-medium hover:bg-indigo-50 hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Personalizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
