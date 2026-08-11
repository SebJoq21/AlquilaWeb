import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, CreditCard, Layers, Monitor } from 'lucide-react'

const kpis = [
  { title: 'Visitas Totales', value: '1,245', growth: '+12% este mes' },
  { title: 'Escaneos QR en mesa', value: '850', growth: '+8% este mes' },
  { title: 'Clics en Reservar', value: '112', growth: '+5% este mes' },
  { title: 'Clics a WhatsApp', value: '45', growth: '+15% este mes' },
]

const paymentHistory = [
  {
    date: '01 Oct 2026',
    concept: 'Plan Profesional - Mensualidad',
    amount: '$70.00',
    status: 'Pagado',
  },
  {
    date: '01 Sep 2026',
    concept: 'Plan Profesional - Adelanto 50%',
    amount: '$35.00',
    status: 'Pagado',
  },
]

function Sidebar({ activeTab, onTabChange }) {
  const items = [
    { id: 'servicio', label: 'Tu servicio', icon: Monitor },
    { id: 'pagos', label: 'Pagos', icon: CreditCard },
  ]

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
      <div className="p-6 border-b border-slate-100">
        <span className="flex items-center gap-2 text-xl font-black tracking-tighter text-slate-900">
          <Layers className="w-5 h-5 text-indigo-600" />
          AlquilaWeb
        </span>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center transition-colors ${
                isActive
                  ? 'bg-indigo-50 text-indigo-700 font-medium cursor-pointer'
                  : 'text-slate-600 hover:bg-slate-50 cursor-pointer'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

function TopBar({ activeTab }) {
  const title = activeTab === 'servicio' ? 'Resumen de tu servicio' : 'Gestión de pagos'
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <h1 className="text-xl font-bold text-slate-900">{title}</h1>
      <div className="flex items-center gap-4">
        {/* Icono de Campana */}
        <button
          type="button"
          className="text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        {/* Contenedor del Dropdown */}
        <div className="relative">
          {/* Disparador (Trigger) */}
          <div
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1.5 rounded-lg transition-colors select-none"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
              MR
            </div>
            <span className="text-sm font-medium text-slate-700 hidden sm:block">
              Mi Restaurante S.A.C.
            </span>
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform ${
                isProfileMenuOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Menú Desplegable */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-50 animate-[fadeIn_0.1s_ease-out]">
              <button
                type="button"
                className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                onClick={() => setIsProfileMenuOpen(false)}
              >
                Configuración
              </button>
              <div className="border-t border-slate-100 my-1" />
              <button
                type="button"
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                onClick={() => {
                  setIsProfileMenuOpen(false)
                  navigate('/')
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function DomainCard() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex justify-between items-center mb-8">
      <div>
        <p className="text-sm text-slate-500 mb-1">Dominio Principal</p>
        <a
          href="https://www.mirestaurante.com"
          className="text-indigo-600 font-medium hover:underline"
        >
          www.mirestaurante.com
        </a>
      </div>
      <span className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-sm font-medium">
        <CheckCircle2 className="w-4 h-4" />
        Activo
      </span>
    </div>
  )
}

function KpiCard({ kpi }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <p className="text-sm text-slate-500 mb-2">{kpi.title}</p>
      <p className="text-3xl font-extrabold text-slate-900 mb-2">{kpi.value}</p>
      <p className="text-sm text-emerald-600 font-medium">{kpi.growth}</p>
    </div>
  )
}

function ServiceView() {
  return (
    <>
      <DomainCard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.title} kpi={kpi} />
        ))}
      </div>
    </>
  )
}

function FinanceCard() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
      <p className="text-sm text-slate-500 mb-2">Deuda actual</p>
      <p className="text-4xl font-extrabold text-slate-900 mb-2">$0.00</p>
      <p className="text-sm text-emerald-600 font-medium">Todo al día</p>
    </div>
  )
}

function NextPaymentCard() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
      <p className="text-sm text-slate-500 mb-2">Próximo pago</p>
      <p className="text-2xl font-extrabold text-slate-900 mb-1">
        1 de Noviembre, 2026
      </p>
      <p className="text-3xl font-extrabold text-slate-900 mb-4">$70.00</p>
      <button
        type="button"
        disabled
        className="w-full bg-slate-200 text-slate-500 font-medium py-2.5 rounded-lg cursor-not-allowed"
      >
        Pagar ahora
      </button>
    </div>
  )
}

function PaymentsView() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FinanceCard />
        <NextPaymentCard />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="font-bold text-slate-900">Historial de Pagos</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left text-slate-500">
                <th className="px-6 py-3 font-medium">Fecha</th>
                <th className="px-6 py-3 font-medium">Concepto</th>
                <th className="px-6 py-3 font-medium">Monto</th>
                <th className="px-6 py-3 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment) => (
                <tr key={`${payment.date}-${payment.concept}`} className="border-t border-slate-100">
                  <td className="px-6 py-4 text-slate-600">{payment.date}</td>
                  <td className="px-6 py-4 text-slate-600">{payment.concept}</td>
                  <td className="px-6 py-4 text-slate-900 font-medium">{payment.amount}</td>
                  <td className="px-6 py-4">
                    <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-medium">
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

function ClientDashboard() {
  const [activeTab, setActiveTab] = useState('servicio')

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar activeTab={activeTab} />
        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'servicio' ? <ServiceView /> : <PaymentsView />}
        </div>
      </div>
    </div>
  )
}

export default ClientDashboard