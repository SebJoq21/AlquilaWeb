import { useState } from 'react'
import { Camera, FileText, ReceiptText, Check } from 'lucide-react'

const steps = [
  { number: 1, label: 'Identidad y Local' },
  { number: 2, label: 'La Carta' },
  { number: 3, label: 'Pago y Activación' },
]

function Stepper({ current }) {
  return (
    <div className="flex items-center w-full max-w-2xl mb-10 px-4 sm:px-10">
      {steps.map((step, index) => {
        const isActive = current === step.number
        const isDone = current > step.number
        const circleClass =
          isDone || isActive
            ? 'bg-emerald-500 text-white'
            : 'bg-slate-200 text-slate-500'

        return (
          <div key={step.number} className="contents">
            <div className="relative flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 shadow-sm transition-colors ${
                  isActive && !isDone ? 'bg-indigo-600' : circleClass
                }`}
              >
                {isDone ? <Check className="w-4 h-4" /> : step.number}
              </div>
              <span
                className={`absolute top-12 text-center text-xs font-semibold w-32 transition-colors ${
                  isActive || isDone ? 'text-indigo-600' : 'text-slate-700'
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 rounded transition-colors ${
                  current > index + 1 ? 'bg-emerald-500' : 'bg-slate-200'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

function DropArea({ icon: Icon, text, hint }) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    console.log('Archivos soltados:', e.dataTransfer?.files)
  }

  return (
    <div
      onClick={() => console.log('Abrir selector de archivos')}
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-xl py-10 px-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
        isDragging
          ? 'border-indigo-500 bg-indigo-50'
          : 'border-slate-300 bg-slate-50 hover:bg-slate-100'
      } text-slate-500`}
    >
      <Icon className="w-10 h-10 mb-3 text-slate-400" />
      <span className="text-sm font-medium text-slate-600">{text}</span>
      {hint && <span className="text-xs text-slate-400 mt-1">{hint}</span>}
    </div>
  )
}

const inputClass =
  'w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-slate-900 bg-slate-50 hover:bg-white transition-colors'

function StepIdentity() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Conozcamos tu restaurante
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1 block">
            RUC
          </label>
          <input
            type="text"
            placeholder="20123456789"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1 block">
            Razón Social
          </label>
          <input
            type="text"
            placeholder="Ej. Cevichería El Puerto S.A.C."
            className={inputClass}
          />
        </div>
      </div>

      <label className="text-sm font-medium text-slate-700 mb-1 block">
        Historia o Quiénes Somos (Hablaremos de tu equipo y tradición)
      </label>
      <textarea
        rows={3}
        className={`${inputClass} min-h-[100px] resize-none mb-6`}
      />

      <DropArea
        icon={Camera}
        text="Sube fotos de tu local y tu equipo"
        hint="Haz clic o arrastra tus imágenes aquí"
      />
    </div>
  )
}

function StepMenu() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Tu catálogo de sabores
      </h2>
      <p className="text-slate-600 mb-6">
        Sube tu carta en formato PDF o fotos claras de tus menús.
      </p>
      <DropArea
        icon={FileText}
        text="Haz clic o arrastra tu carta aquí"
      />
    </div>
  )
}

function StepPayment() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Último paso: Activa tu web
      </h2>
      <p className="text-slate-600 mb-6">
        Sube la captura de pantalla de tu transferencia o pago por billetera
        digital para que nuestro equipo ensamble tu sitio inmediatamente.
      </p>
      <DropArea
        icon={ReceiptText}
        text="Haz clic o arrastra tu comprobante aquí"
      />
    </div>
  )
}

export default function ServiceOnboardingWizard({ onCancel, onComplete }) {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep === steps.length) {
      if (onComplete) onComplete()
      return
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length))
  }

  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col">
      <Stepper current={currentStep} />

      <div className="w-full bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
        {currentStep === 1 && <StepIdentity />}
        {currentStep === 2 && <StepMenu />}
        {currentStep === 3 && <StepPayment />}

        <div className="flex items-center justify-between mt-8">
          {currentStep === 1 ? (
            <button
              type="button"
              onClick={onCancel}
              className="text-slate-500 hover:text-slate-800 font-medium px-4 py-2 transition-colors cursor-pointer"
            >
              Cancelar
            </button>
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
            className="bg-indigo-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            {currentStep === steps.length ? 'Finalizar y Enviar' : 'Siguiente'}
          </button>
        </div>
      </div>
    </div>
  )
}
