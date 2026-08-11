const steps = [
  {
    number: '1',
    title: 'Crea tu cuenta',
    description:
      'Regístrate en nuestra plataforma y elige el plan que mejor se adapte al tamaño de tu restaurante.',
  },
  {
    number: '2',
    title: 'Realiza tu pago',
    description:
      'Abónalo fácilmente por transferencia o billetera digital y sube la captura de pantalla de tu comprobante en tu panel.',
  },
  {
    number: '3',
    title: 'Sube tu material',
    description:
      'Compártenos las fotos de tus platos, tu logo y los precios de tu carta directamente desde tu cuenta.',
  },
  {
    number: '4',
    title: 'Lanzamos tu web',
    description:
      'Nosotros ensamblamos todo. En tiempo récord, te entregamos tu sitio web profesional y tu código QR listo para usar.',
  },
]

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Lanza tu web en 4 simples pasos
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16">
          Un proceso diseñado para que tú sigas cocinando mientras nosotros
          hacemos la magia técnica.
        </p>

        <div className="relative">
          {/* Línea de timeline (solo desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-6 left-8 right-8 h-px bg-indigo-100"
          />

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
