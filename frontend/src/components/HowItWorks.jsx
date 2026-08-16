import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Regístrate y sube tu material',
    description: 'Crea tu cuenta en segundos y compártenos tu menú, logo y fotos del local directamente desde tu panel. Sin intermediarios.',
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
    )
  },
  {
    number: '02',
    title: 'Abona el 50% inicial',
    description: 'Formaliza el proyecto realizando el pago de la mitad del servicio. Esto activa a nuestro equipo de desarrollo para empezar a ensamblar tu web.',
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
    )
  },
  {
    number: '03',
    title: 'Revisión y Feedback',
    description: 'Te presentaremos una versión de prueba de tu sitio web. Podrás revisarla, probarla y darnos tus comentarios para que quede exactamente como quieres.',
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
    )
  },
  {
    number: '04',
    title: 'Aprobación y Lanzamiento',
    description: 'Una vez que des el visto bueno, cancelas el saldo restante y publicamos tu página web en tu propio dominio. ¡Listo para recibir clientes!',
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5.25 15.75l7.5-7.5m-15 0L1.5 12l7.5 7.5 7.5-7.5zM3 15v6h6l12-12-6-6L3 15z"></path></svg>
    )
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-4 block">Proceso de Trabajo</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Lanza tu web en <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">4 simples pasos</span>
          </h2>
          <p className="text-lg text-slate-400">
            Un proceso diseñado para que tú sigas cocinando mientras nosotros hacemos la magia técnica.
          </p>
        </div>

        {/* Cuadrícula de Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">

          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Tarjeta */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <span className="text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>

              {/* Flecha conectora (Oculta en móviles, visible en desktop) */}
              {/* Flecha de 1 a 2 y de 3 a 4 */}
              {(index === 0 || index === 2) && (
                <div className="hidden md:block absolute top-1/2 -right-8 w-16 h-0 border-t-2 border-dashed border-slate-600 z-0">
                  <div className="absolute -right-2 -top-2 text-slate-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  </div>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
