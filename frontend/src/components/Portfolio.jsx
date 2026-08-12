const demos = [
  {
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Interior de restaurante',
    title: 'Sentimiento Peruano',
    subtitle: 'Restaurante de comida criolla',
    tags: ['Reservas', 'Carta QR'],
    url: '/demo/criolla',
  },
  {
    image:
      'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Cupcakes y postres finos',
    title: 'Tu postre a la limeña',
    subtitle: 'Repostería artesanal',
    tags: ['Catálogo', 'Pedidos'],
    url: '/demo/postres',
  },
  {
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Cafetería y barista',
    title: 'Café Express',
    subtitle: 'Cafetería y desayunos',
    tags: ['Menú Digital', 'Delivery'],
    url: '/demo/cafe',
  },
]

function Portfolio() {
  return (
    <section id="demos" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Sitios web que abren el apetito
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demos.map((demo) => (
            <a
              key={demo.title}
              href={demo.url}
              className="block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.alt}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay de llamada a la acción (Aparece al hacer hover) */}
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="bg-white text-slate-900 font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Ver demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-xl text-slate-900 mb-1">
                  {demo.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{demo.subtitle}</p>
                <div className="mt-auto flex gap-2">
                  {demo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
