import { useState } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const registerFields = [
  {
    id: 'ruc',
    label: 'RUC',
    type: 'text',
    placeholder: '20123456789',
  },
  {
    id: 'company',
    label: 'Razón Social',
    type: 'text',
    placeholder: 'Mi Empresa S.A.C.',
  },
  {
    id: 'restaurant',
    label: 'Nombre Comercial (Restaurante)',
    type: 'text',
    placeholder: 'Mi Restaurante',
    colSpan: 'sm:col-span-2',
  },
  {
    id: 'representative',
    label: 'Nombre del Representante',
    type: 'text',
    placeholder: 'Juan Pérez',
  },
  {
    id: 'phone',
    label: 'Celular / WhatsApp',
    type: 'tel',
    placeholder: '+51 987 654 321',
  },
  {
    id: 'email',
    label: 'Correo Electrónico',
    type: 'email',
    placeholder: 'tucorreo@ejemplo.com',
  },
  {
    id: 'password',
    label: 'Contraseña',
    type: 'password',
    placeholder: '••••••••',
  },
]

const loginFields = [
  {
    id: 'email',
    label: 'Correo Electrónico',
    type: 'email',
    placeholder: 'tucorreo@ejemplo.com',
  },
  {
    id: 'password',
    label: 'Contraseña',
    type: 'password',
    placeholder: '••••••••',
  },
]

const inputClass =
  'w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-slate-900 bg-slate-50 hover:bg-white transition-colors'

function Field({ field }) {
  return (
    <div className={field.colSpan || ''}>
      <label
        htmlFor={field.id}
        className="text-sm font-medium text-slate-700 mb-1 block"
      >
        {field.label}
      </label>
      <input
        id={field.id}
        type={field.type}
        placeholder={field.placeholder}
        className={inputClass}
      />
    </div>
  )
}

function AuthModal({ mode, onClose, onToggle, onSubmit }) {
  const isLogin = mode === 'login'
  const fields = isLogin ? loginFields : registerFields
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-md transition-opacity animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl w-full p-8 relative animate-[scaleUp_0.2s_ease-out] ${
          isLogin ? 'max-w-md' : 'max-w-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          {isLogin ? 'Bienvenido de nuevo' : 'Registro de tu restaurante'}
        </h2>

        <form onSubmit={handleSubmit}>
          <div
            className={
              isLogin
                ? 'mb-6'
                : 'grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'
            }
          >
            {fields.map((field) => (
              <Field key={field.id} field={field} />
            ))}
          </div>
          {!isLogin && (
            <div className="col-span-1 sm:col-span-2 flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="w-4 h-4 text-indigo-600 bg-slate-50 border-slate-300 rounded focus:ring-indigo-600 cursor-pointer"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-medium text-slate-700 cursor-pointer"
                >
                  He leído y acepto los{' '}
                  <Link
                    to="/terminos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    Términos y Condiciones
                  </Link>{' '}
                  y la Política de Privacidad.
                </label>
              </div>
            </div>
          )}
          <button
            type="submit"
            disabled={!isLogin && !acceptedTerms}
            className={`w-full font-medium py-2.5 rounded-lg transition-colors ${
              acceptedTerms || isLogin
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
          >
            {isLogin ? 'Entrar' : 'Crear cuenta'}
          </button>
        </form>

        <p className="text-sm text-slate-600 text-center mt-6">
          {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
          <span
            onClick={() => onToggle(isLogin ? 'register' : 'login')}
            className="text-indigo-600 font-medium cursor-pointer hover:underline"
          >
            {isLogin ? 'Regístrate' : 'Inicia sesión'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default AuthModal
