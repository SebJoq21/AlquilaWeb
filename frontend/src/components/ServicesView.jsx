const services = [
  {
    id: 1,
    name: 'Cevichería El Puerto',
    domain: 'www.cevicheriaelpuerto.com',
    plan: 'Plan Profesional',
    status: 'activo',
  },
  {
    id: 2,
    name: 'Pizzería La Nonna',
    domain: 'www.lanonna.com',
    plan: 'Plan Básico',
    status: 'pendiente',
  },
]

function StatusBadge({ status }) {
  const isActive = status === 'activo'
  return (
    <span
      className={`shrink-0 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border ${
        isActive
          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
          : 'bg-amber-50 text-amber-700 border-amber-200'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isActive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
        }`}
      ></span>
      {isActive ? 'Activo' : 'Pendiente'}
    </span>
  )
}

export default function ServicesView({ onManageService, onAddNewService }) {
  return (
    <>
      {/* Encabezado: Título + CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Mis Servicios</h2>
          <p className="text-sm text-slate-500 mt-1">
            Gestiona todos los restaurantes asociados a tu cuenta.
          </p>
        </div>
        <button
          type="button"
          onClick={onAddNewService}
          className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-3 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer w-max"
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          Añadir nuevo servicio
        </button>
      </div>

      {/* Grid de tarjetas de servicio */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 p-6 flex flex-col"
          >
            {/* Header: Nombre + Badge de estado */}
            <div className="flex items-start justify-between gap-3 mb-6">
              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                {service.name}
              </h3>
              <StatusBadge status={service.status} />
            </div>

            {/* Body: Dominio + Plan */}
            <div className="mb-6 flex-1">
              <div className="flex items-center gap-2 text-indigo-600 font-semibold mb-1">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span className="truncate">{service.domain}</span>
              </div>
              <p className="text-sm text-slate-500">{service.plan}</p>
            </div>

            {/* Footer: Acción principal */}
            <button
              type="button"
              onClick={() => onManageService(service)}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-3 rounded-xl transition-colors cursor-pointer"
            >
              Gestionar Panel
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
