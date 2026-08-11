import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Layers } from 'lucide-react'
import DropZone from '../components/DropZone'

const steps = ['Identidad y Local', 'La Carta', 'Pago y Activación']

function Stepper({ current }) {
  return (
    <div className="flex items-center w-full max-w-2xl mb-14 px-4 sm:px-10">
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const isActive = current === stepNumber
        const isDone = current > stepNumber
        const circleClass =
          isDone || isActive
            ? 'bg-emerald-500 text-white'
            : 'bg-slate-200 text-slate-500'

        return (
          <Fragment key={step}>
            <div className="relative flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 shadow-sm transition-colors ${
                  isActive && !isDone ? 'bg-indigo-600' : circleClass
                }`}
              >
                {isDone ? <Check className="w-4 h-4" /> : stepNumber}
              </div>
              <span
                className={`absolute top-12 text-center text-xs font-semibold w-32 transition-colors ${
                  isActive || isDone ? 'text-indigo-600' : 'text-slate-700'
                }`}
              >
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 rounded transition-colors ${
                  current > index + 1 ? 'bg-emerald-500' : 'bg-slate-200'
                }`}
              />
            )}
          </Fragment>
        )
      })}
    </div>
  )
}

function StepIdentity() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">
        Conozcamos tu restaurante
      </h2>
      <label
        htmlFor="story"
        className="text-sm font-medium text-slate-700 mb-1 block"
      >
        Historia o Quiénes Somos (Hablaremos de tu equipo y tradición)
      </label>
      <textarea
        id="story"
        rows={2}
        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-slate-900 bg-slate-50 hover:bg-white transition-colors mb-4"
      />
      <label className="text-sm font-medium text-slate-700 mb-1 block">
        Sube fotos de tu local y tu equipo
      </label>
      <DropZone type="images" text="Haz clic o arrastra tus imágenes aquí" />
    </div>
  )
}

function StepMenu() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Tu catálogo de sabores
      </h2>
      <p className="text-slate-600 mb-4">
        Sube tu carta en formato PDF o fotos claras de tus menús.
      </p>
      <DropZone type="document" text="Haz clic o arrastra tu carta aquí" />
    </div>
  )
}

function StepPayment() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Último paso: Activa tu web
      </h2>
      <p className="text-slate-600 mb-4">
        Sube la captura de pantalla de tu transferencia o pago por billetera
        digital para que nuestro equipo ensamble tu sitio inmediatamente.
      </p>
      <DropZone
        type="payment"
        text="Haz clic o arrastra tu comprobante aquí"
      />
    </div>
  )
}

function Onboarding() {
  const [step, setStep] = useState(1)

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length))
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-slate-50 py-6 px-4">
      {/* Volver al inicio */}
      <Link
        to="/"
        className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Volver al inicio
      </Link>

      {/* Header simplificado */}
      <Link
        to="/"
        className="mb-6 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <span className="flex items-center gap-2 text-2xl font-black tracking-tighter text-slate-900">
          <Layers className="w-6 h-6 text-indigo-600" />
          AlquilaWeb
        </span>
      </Link>

      <div className="w-full max-w-2xl flex flex-col">
        {/* Stepper */}
        <Stepper current={step} />

        {/* Contenido del paso */}
        <div className="w-full bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          {step === 1 && <StepIdentity />}
          {step === 2 && <StepMenu />}
          {step === 3 && <StepPayment />}

          <div className="flex items-center justify-between mt-6">
            {step === 1 ? (
              <Link
                to="/"
                className="text-slate-500 hover:text-slate-800 font-medium px-4 py-2 transition-colors"
              >
                Cancelar
              </Link>
            ) : (
              <button
                type="button"
                onClick={handleBack}
                className="text-slate-500 hover:text-slate-800 font-medium px-4 py-2 transition-colors cursor-pointer"
              >
                ← Atrás
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              className="bg-indigo-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              {step === steps.length ? 'Finalizar y Enviar' : 'Siguiente'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding