const demos = [
  {
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Interior de restaurante',
    title: 'Sentimiento Peruano',
    subtitle: 'Restaurante de comida criolla',
    tags: ['Reservas', 'Carta QR'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Cupcakes y postres finos',
    title: 'Tu postre a la limeña',
    subtitle: 'Repostería artesanal',
    tags: ['Catálogo', 'Pedidos'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Cafetería y barista',
    title: 'Café Express',
    subtitle: 'Cafetería y desayunos',
    tags: ['Menú Digital', 'Delivery'],
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
            <article
              key={demo.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group cursor-pointer flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.alt}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
