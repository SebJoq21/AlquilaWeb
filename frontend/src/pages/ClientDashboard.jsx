import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CheckCircle2,
  CreditCard,
  Layers,
  LifeBuoy,
  Monitor,
  Puzzle,
} from 'lucide-react'

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

const tickets = [
  {
    id: '#TK-0012',
    subject: 'Actualizar menú de temporada',
    status: 'En proceso',
    updated: 'Hoy, 10:30 AM',
  },
  {
    id: '#TK-0008',
    subject: 'Duda sobre reservas',
    status: 'Resuelto',
    updated: 'Hace 2 días',
  },
]

function SupportBadge({ status }) {
  const isResolved = status === 'Resuelto'
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        isResolved ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
      }`}
    >
      {status}
    </span>
  )
}

const plans = [
  {
    id: 'basico',
    name: 'Plan Básico',
    price: '$40',
    description:
      'Carta digital QR sin sitio web completo. Ideal para locales pequeños.',
  },
  {
    id: 'profesional',
    name: 'Plan Profesional',
    price: '$70',
    description:
      'Landing page completa, dominio propio y gestión por nuestro equipo.',
    isCurrent: true,
  },
]

function PlanModal({ onClose }) {
  const [selectedPlan, setSelectedPlan] = useState('profesional')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-[scaleUp_0.2s_ease-out]">
        {/* Header del Modal */}
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">
            Gestiona tu suscripción
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cuerpo del Modal (Solo Planes) */}
        <div className="p-6 md:p-8">
          <p className="text-slate-600 mb-6">
            Selecciona el plan que mejor se adapte a las necesidades actuales
            de tu restaurante.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  selectedPlan === plan.id
                    ? 'border-indigo-600 bg-indigo-50/50'
                    : 'border-slate-200 hover:border-indigo-200 bg-white'
                }`}
              >
                {plan.isCurrent && (
                  <div className="absolute -top-3 left-6 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    Plan Actual
                  </div>
                )}
                <h3 className="font-bold text-slate-900 mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-2xl font-black text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-500">/mes</span>
                </div>
                <p className="text-sm text-slate-600">{plan.description}</p>

                {/* Indicador visual de selección */}
                <div
                  className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === plan.id
                      ? 'border-indigo-600'
                      : 'border-slate-300'
                  }`}
                >
                  {selectedPlan === plan.id && (
                    <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer del Modal */}
        <div className="bg-slate-50 p-6 flex flex-col sm:flex-row justify-end items-center gap-4 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 font-medium px-4 py-2 w-full sm:w-auto text-center cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-indigo-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto shadow-sm cursor-pointer"
          >
            Confirmar cambio
          </button>
        </div>
      </div>
    </div>
  )
}

function Sidebar({ activeTab, onTabChange }) {
  const items = [
    { id: 'servicio', label: 'Tu servicio', icon: Monitor },
    { id: 'pagos', label: 'Pagos', icon: CreditCard },
    { id: 'modulos', label: 'Añadir Módulos', icon: Puzzle },
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
      <div className="mt-auto p-4 border-t border-slate-100">
        <button
          type="button"
          onClick={() => onTabChange('soporte')}
          className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center gap-3 transition-colors ${
            activeTab === 'soporte'
              ? 'bg-indigo-50 text-indigo-700 font-medium cursor-pointer'
              : 'text-slate-600 hover:bg-slate-50 cursor-pointer'
          }`}
        >
          <LifeBuoy className="w-5 h-5" />
          <span className="font-medium text-sm">Soporte Técnico</span>
        </button>
      </div>
    </aside>
  )
}

function TopBar({ activeTab }) {
  const titles = {
    servicio: 'Resumen de tu servicio',
    pagos: 'Gestión de pagos',
    soporte: 'Soporte Técnico',
    modulos: 'Módulos y Mejoras',
  }
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <h1 className="text-xl font-bold text-slate-900">{titles[activeTab]}</h1>
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

function NextPaymentCard({ onChangePlan }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full">
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm font-medium text-slate-500">
          Próximo pago (Plan Profesional)
        </span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-1">
        1 de Noviembre, 2026
      </h3>
      <p className="text-3xl font-black text-slate-900 mb-6">$70.00</p>

      <div className="mt-auto space-y-3">
        <button
          type="button"
          disabled
          className="w-full bg-slate-100 text-slate-400 font-medium py-2.5 rounded-lg cursor-not-allowed"
        >
          Pagar ahora
        </button>
        <button
          type="button"
          onClick={onChangePlan}
          className="w-full text-indigo-600 font-medium py-2 rounded-lg hover:bg-indigo-50 transition-colors text-sm cursor-pointer"
        >
          Cambiar plan
        </button>
      </div>
    </div>
  )
}

function PaymentsView({ onChangePlan }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FinanceCard />
        <NextPaymentCard onChangePlan={onChangePlan} />
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
                <tr
                  key={`${payment.date}-${payment.concept}`}
                  className="border-t border-slate-100"
                >
                  <td className="px-6 py-4 text-slate-600">{payment.date}</td>
                  <td className="px-6 py-4 text-slate-600">
                    {payment.concept}
                  </td>
                  <td className="px-6 py-4 text-slate-900 font-medium">
                    {payment.amount}
                  </td>
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

function SupportView() {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-slate-900">
          Centro de Ayuda y Tickets
        </h2>
        <button
          type="button"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          Crear nuevo ticket
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left text-slate-500">
                <th className="px-6 py-3 font-medium">ID Ticket</th>
                <th className="px-6 py-3 font-medium">Asunto</th>
                <th className="px-6 py-3 font-medium">Estado</th>
                <th className="px-6 py-3 font-medium">Última actualización</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-t border-slate-100"
                >
                  <td className="px-6 py-4 font-medium text-indigo-600">
                    {ticket.id}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{ticket.subject}</td>
                  <td className="px-6 py-4">
                    <SupportBadge status={ticket.status} />
                  </td>
                  <td className="px-6 py-4 text-slate-500">{ticket.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

const moduleOptions = [
  {
    id: 'whatsapp',
    title: 'Automatización de WhatsApp',
    description:
      'Envía recordatorios automáticos de reservas y confirmaciones de pedidos directamente al WhatsApp de tus clientes.',
    price: '+$25.00/mes',
    iconColor: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 'loyalty',
    title: 'Sistema de Fidelización',
    description:
      'Crea cupones de descuento y acumulación de puntos para premiar a tus clientes más frecuentes.',
    price: '+$20.00/mes',
    iconColor: 'bg-indigo-100 text-indigo-600',
  },
]

function ModuleCard({ module }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-2">
        <span
          className={`w-10 h-10 rounded-full flex items-center justify-center ${module.iconColor}`}
        >
          <Puzzle className="w-5 h-5" />
        </span>
        <h3 className="font-bold text-lg text-slate-900">{module.title}</h3>
      </div>
      <p className="text-slate-600 text-sm mt-2 mb-6">{module.description}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="font-bold text-slate-900">{module.price}</span>
        <button
          type="button"
          className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          Solicitar activación
        </button>
      </div>
    </div>
  )
}

function CustomModuleCard() {
  return (
    <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg mt-2 flex flex-col md:flex-row gap-8 items-center lg:col-span-2">
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold mb-2">
          ¿Necesitas una funcionalidad a medida?
        </h3>
        <p className="text-slate-300 text-sm">
          Si tienes una idea específica para tu restaurante que no está en
          nuestro catálogo (ej. integración con tu sistema de facturación
          local), cuéntanosla.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <textarea
          rows={3}
          placeholder="Explica brevemente tu idea..."
          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 resize-none"
        />
        <div className="flex gap-3">
          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium text-sm flex-1 transition-colors cursor-pointer"
          >
            Enviar propuesta
          </button>
          <button
            type="button"
            className="bg-white text-slate-900 hover:bg-slate-100 px-4 py-2 rounded-lg font-medium text-sm flex-1 text-center transition-colors cursor-pointer"
          >
            Agendar reunión
          </button>
        </div>
      </div>
    </div>
  )
}

function ModulesView() {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-slate-900">
          Potencia tu web con nuevos módulos
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {moduleOptions.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
        <CustomModuleCard />
      </div>
    </>
  )
}

function ClientDashboard() {
  const [activeTab, setActiveTab] = useState('servicio')
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false)

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar activeTab={activeTab} />
        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'servicio' && <ServiceView />}
          {activeTab === 'pagos' && (
            <PaymentsView onChangePlan={() => setIsPlanModalOpen(true)} />
          )}
          {activeTab === 'soporte' && <SupportView />}
          {activeTab === 'modulos' && <ModulesView />}
        </div>
      </div>

      {isPlanModalOpen && <PlanModal onClose={() => setIsPlanModalOpen(false)} />}
    </div>
  )
}

export default ClientDashboard