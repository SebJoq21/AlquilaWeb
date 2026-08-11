function Portfolio() {
  return (
    <section id="demos" className="bg-white py-24">
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
  )
}

export default Portfolio
