function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center bg-slate-900"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Capa oscura con el gradiente exacto solicitado */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900/90 via-slate-900/75 to-slate-900/90 z-0" />

      {/* Contenido centrado */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Tu restaurante en internet,{' '}
          <span className="text-indigo-400">
            sin complicaciones técnicas.
          </span>
        </h1>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Nosotros creamos, alojamos y mantenemos tu sitio web y carta digital
          mientras tú te enfocas en cocinar.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#pricing"
            className="bg-indigo-600 text-white rounded-full px-8 py-3 font-medium shadow-sm hover:bg-indigo-700 transition-all"
          >
            Ver planes
          </a>
          <a
            href="#pricing"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm rounded-full px-8 py-3 font-medium transition-all"
          >
            Empezar ahora
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;