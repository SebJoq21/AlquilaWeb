import { motion } from 'framer-motion'
import { CloudUpload, CreditCard, MessagesSquare, Rocket } from 'lucide-react'

const steps = [
  {
    title: 'Regístrate y sube tu material',
    description:
      'Crea tu cuenta en segundos y compártenos tu menú, logo y fotos del local directamente desde tu panel. Sin intermediarios.',
    icon: CloudUpload,
  },
  {
    title: 'Abona el 50% inicial',
    description:
      'Formaliza el proyecto realizando el pago de la mitad del servicio. Esto activa a nuestro equipo de desarrollo para empezar a ensamblar tu web.',
    icon: CreditCard,
  },
  {
    title: 'Revisión y Feedback',
    description:
      'Te presentaremos una versión de prueba de tu sitio web. Podrás revisarla, probarla y darnos tus comentarios para que quede exactamente como quieres.',
    icon: MessagesSquare,
  },
  {
    title: 'Aprobación y Lanzamiento',
    description:
      'Una vez que des el visto bueno, cancelas el saldo restante y publicamos tu página web en tu propio dominio. ¡Listo para recibir clientes!',
    icon: Rocket,
  },
]

function StepRow({ step, index }) {
  const Icon = step.icon
  const reversed = index % 2 !== 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col lg:flex-row items-center gap-12 ${
        reversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Columna de Texto */}
      <div className="w-full lg:w-1/2">
        <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-2 block">
          Paso {index + 1}
        </span>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          {step.title}
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Columna Gráfica */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="aspect-[4/3] max-w-md w-full rounded-3xl shadow-2xl shadow-indigo-500/10 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex items-center justify-center relative overflow-hidden border border-white/50"
        >
          <div className="absolute w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl" />
          <Icon className="w-24 h-24 text-indigo-600 relative" />
        </motion.div>
      </div>
    </motion.div>
  )
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Lanza tu web en 4 simples pasos
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Un proceso diseñado para que tú sigas cocinando mientras nosotros
            hacemos la magia técnica.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <StepRow key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks