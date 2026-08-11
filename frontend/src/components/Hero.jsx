function Hero() {
  return (
    <section id="inicio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
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
          href="#planes"
          className="bg-white text-slate-700 border border-slate-200 rounded-full px-8 py-3 font-medium hover:bg-slate-50 transition-all"
        >
          Empezar ahora
        </a>
      </div>
    </section>
  )
}

export default Hero
