import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    restaurant: 'Cevichería El Muelle',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=150&q=80',
    quote: 'Antes perdíamos mucho tiempo enviando el menú por WhatsApp en PDF. Ahora los clientes escanean el QR en la mesa y piden directo. AlquilaWeb nos salvó la temporada.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sofía Arévalo',
    restaurant: 'Café & Brasa',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    quote: 'No sé nada de programación, pero configurar mi carta me tomó literalmente 15 minutos. El diseño es hermoso y el soporte es súper rápido.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Martín Cárdenas',
    restaurant: 'Pizzería La Nonna',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
    quote: 'Dudaba si pagar una mensualidad valía la pena, pero la imagen profesional que da tener mi propio dominio (.com) ha hecho que mis pedidos a domicilio aumenten un 30%.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Lucía Fernández',
    restaurant: 'Bistro 22',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    quote: 'Tener el control total para cambiar precios o esconder platos que se agotaron en tiempo real desde mi celular es increíble. 100% recomendado.',
    rating: 5,
  }
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-4 block">Casos de Éxito</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            Restaurantes que ya se digitalizaron
          </h2>
          <p className="text-lg text-slate-600">
            No confíes solo en nuestra palabra. Descubre cómo AlquilaWeb está ayudando a cientos de locales gastronómicos a modernizar su servicio.
          </p>
        </div>

        {/* Carrusel Infinito (Marquee) */}
        <div className="relative w-full overflow-hidden pb-8 pt-4">
          {/* Degradados laterales para suavizar la entrada y salida */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee flex gap-6 px-4">
            {/* Renderizamos el array DOS veces para el efecto de bucle infinito */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="w-[350px] shrink-0 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-default"
              >
                <StarRating rating={review.rating} />
                <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 flex-1">
                  "{review.quote}"
                </blockquote>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={review.image}
                    alt={`Foto de ${review.name}`}
                    className="w-14 h-14 rounded-full object-cover border-2 border-indigo-50"
                  />
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-sm text-indigo-600 font-medium">{review.restaurant}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
