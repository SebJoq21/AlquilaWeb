import React from 'react';
import { Link } from 'react-router-dom';

const demos = [
  {
    id: 1,
    title: 'Sentimiento Peruano',
    category: 'Restaurante de comida criolla',
    // Imagen representativa de comida contundente / criolla
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags: ['Reservas', 'Carta QR'],
    link: '/demo/criolla'
  },
  {
    id: 2,
    title: 'Tu postre a la limeña',
    category: 'Repostería artesanal',
    // Imagen de postres más elaborados/tradicionales
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80',
    tags: ['Catálogo', 'Pedidos'],
    link: '/demo/postres'
  },
  {
    id: 3,
    title: 'Café Express',
    category: 'Cafetería y desayunos',
    // Imagen de un café de especialidad / brunch
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    tags: ['Menú Digital', 'Delivery'],
    link: '/demo/cafe'
  }
];

export default function Portfolio() {
  return (
    <section id="demos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Sitios web que abren el apetito
          </h2>
          <p className="text-lg text-slate-500">
            Explora nuestras plantillas optimizadas para conversión. Haz clic en cualquiera de ellas para interactuar con una demostración en vivo.
          </p>
        </div>

        {/* Cuadrícula del Portafolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo) => (
            <Link
              key={demo.id}
              to={demo.link}
              className="group block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Contenedor de la Imagen con Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={demo.image}
                  alt={`Demo de ${demo.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay oscuro al hacer hover */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    Ver Sitio Web
                  </span>
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  {demo.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 flex-1">
                  {demo.category}
                </p>

                {/* Etiquetas */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-50">
                  {demo.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
