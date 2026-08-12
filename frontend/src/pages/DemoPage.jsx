import { useParams, useNavigate } from 'react-router-dom';

const demoData = {
  criolla: {
    name: 'Sentimiento Peruano',
    slogan: 'El verdadero sabor de casa',
    theme: 'bg-orange-600',
    textColor: 'text-orange-500',
    template: 'elegant',
    heroBg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    about: {
      description: 'Desde hace más de 15 años, nos dedicamos a rescatar las recetas de antaño, aquellas que se cocinaban a fuego lento en las ollas de barro de nuestras abuelas. Cada plato es un homenaje a la rica herencia culinaria del Perú, utilizando ingredientes frescos y de origen local.',
      years: '15+ Años de Tradición',
      location: 'Av. José Pardo 456, Miraflores - Lima',
      schedule: 'Martes a Domingo: 12:00 PM - 10:30 PM',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    items: [
      { name: 'Ceviche Clásico', desc: 'Pesca del día, leche de tigre al ají limo, cebolla roja, camote glaseado y choclo.', price: '$18.00', image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
      { name: 'Causa Limeña', desc: 'Suave masa de papa amarilla con ají, rellena de pulpa de cangrejo y palta.', price: '$12.00', image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
      { name: 'Lomo Saltado', desc: 'Fino corte de lomo de res flameado al pisco, cebolla, tomate, ají amarillo y papas nativas.', price: '$22.00', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
      { name: 'Arroz con Pato', desc: 'Arroz graneado al culantro y chicha de jora, tierna pierna de pato confitada y sarsa criolla.', price: '$24.00', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
      { name: 'Ají de Gallina', desc: 'Crema de ají amarillo, nueces y queso parmesano, servida con pechuga deshilachada y papas.', price: '$16.00', image: 'https://images.unsplash.com/photo-1604908177422-77119dd225d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
      { name: 'Anticuchos de Corazón', desc: 'Macerados en ají panca y vinagre, a la parrilla, con papas doradas y salsa de rocoto.', price: '$14.00', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
    ]
  },
  postres: {
    name: 'Tu postre a la limeña',
    slogan: 'Dulzura artesanal en cada bocado',
    theme: 'bg-pink-500',
    textColor: 'text-pink-600',
    template: 'playful', // Nueva propiedad
    heroBg: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    items: [
      { name: 'Cupcake de Fresa', desc: 'Bizcocho suave con frosting de fresas frescas.', price: '$4.00' },
      { name: 'Macarons Surtidos', desc: 'Caja de 6 macarons de distintos sabores.', price: '$12.00' },
      { name: 'Tarta de Limón', desc: 'Masa quebrada con crema de limón y merengue.', price: '$6.50' }
    ]
  },
  cafe: {
    name: 'Café Express',
    slogan: 'Tu pausa perfecta del día',
    theme: 'bg-slate-900',
    textColor: 'text-slate-900',
    template: 'minimalist', // Nueva propiedad
    heroBg: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    items: [
      { name: 'Espresso Doble', desc: 'Grano seleccionado de tueste oscuro.', price: '$3.50' },
      { name: 'Capuccino Artesanal', desc: 'Espresso con leche cremada y cacao.', price: '$4.50' },
      { name: 'Croissant de Mantequilla', desc: 'Horneado del día, crujiente por fuera.', price: '$3.00' }
    ]
  }
};

export default function DemoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = demoData[id] || demoData.cafe;

  // 1. PLANTILLA: ELEGANTE (Restaurante Clásico - Modo Oscuro)
  const renderElegant = () => (
    <div className="min-h-screen bg-slate-950 text-white font-serif selection:bg-orange-500/30">

      {/* Hero - Mantiene bg-slate-950 base */}
      <header className="relative w-full h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img src={data.heroBg} alt={data.name} className="absolute inset-0 w-full h-full object-cover z-0 grayscale-[20%]" />
        <div className="relative z-20 px-4 py-12 flex flex-col items-center">
          <div className="w-px h-16 bg-orange-500/50 mb-8 mx-auto"></div>
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase mb-6">{data.name}</h1>
          <p className={`text-2xl ${data.textColor} italic font-light`}>{data.slogan}</p>
          <div className="w-px h-16 bg-orange-500/50 mt-8 mx-auto"></div>
        </div>
      </header>

      {/* Sección Quiénes Somos - Contraste con bg-slate-900 */}
      <section className="w-full bg-slate-900 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Columna Imagen Historia */}
            <div className="relative h-[500px] w-full hidden lg:block group overflow-hidden">
              <img src={data.about.image} alt="Nuestro Local" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
              {/* Marco decorativo */}
              <div className="absolute inset-4 border border-white/20 z-10 pointer-events-none"></div>
            </div>

            {/* Columna Texto */}
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-sm tracking-[0.3em] uppercase text-slate-500 mb-4">Nuestra Historia</h2>
                <h3 className="text-3xl lg:text-4xl font-light leading-snug mb-6 text-slate-200">
                  Rescatando la esencia de la gastronomía peruana.
                </h3>
                <p className="text-slate-400 font-sans font-light leading-relaxed mb-6 text-lg">
                  {data.about.description}
                </p>
                <p className={`font-medium ${data.textColor} tracking-widest uppercase text-sm`}>
                  {data.about.years}
                </p>
              </div>
              {/* Info Box */}
              <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs tracking-widest uppercase text-slate-500 mb-2">Ubicación</h4>
                  <p className="text-slate-300 font-sans text-sm">{data.about.location}</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-widest uppercase text-slate-500 mb-2">Horario</h4>
                  <p className="text-slate-300 font-sans text-sm">{data.about.schedule}</p>
                </div>
                <div className="sm:col-span-2 pt-4 border-t border-white/10">
                  <button className="w-full bg-slate-100 hover:bg-white text-slate-900 font-sans font-semibold py-3 transition-colors text-sm uppercase tracking-wider">
                    Reservar una Mesa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección La Carta - Vuelve a bg-slate-950 */}
      <main className="w-full bg-slate-950">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-light text-center uppercase tracking-widest mb-2">La Carta</h2>
          <div className="w-12 h-px bg-orange-500 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {data.items.map((item, i) => (
              <div key={i} className="flex gap-6 group cursor-pointer">
                {/* Imagen del Plato */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                {/* Detalles del Plato */}
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-xl sm:text-2xl font-medium tracking-wide text-slate-200 group-hover:text-white transition-colors">{item.name}</h3>
                    <span className={`text-xl font-light ${data.textColor}`}>{item.price}</span>
                  </div>
                  {/* Línea punteada decorativa */}
                  <div className="w-full border-b border-dashed border-white/10 mb-3 hidden sm:block"></div>
                  <p className="text-slate-400 font-sans font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );

  // 2. PLANTILLA: DIVERTIDA (Pastelería - Colores pastel y redondeados)
  const renderPlayful = () => (
    <div className="min-h-screen bg-pink-50 font-sans">
      <header className="relative w-full h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-pink-900/40 z-10"></div>
        <img src={data.heroBg} alt={data.name} className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="relative z-20 text-center px-4 bg-white/90 p-8 rounded-[3rem] shadow-xl mx-4 transform translate-y-16">
          <h1 className={`text-4xl md:text-6xl font-black ${data.textColor} mb-2`}>{data.name}</h1>
          <p className="text-lg text-slate-600 font-medium">{data.slogan}</p>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all text-center border-2 border-pink-100">
              <span className={`block text-3xl font-black ${data.textColor} mb-4`}>{item.price}</span>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.name}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );

  // 3. PLANTILLA: MINIMALISTA (Cafetería - Limpio, alineado a la izquierda)
  const renderMinimalist = () => (
    <div className="min-h-screen bg-white font-sans">
      <header className="relative w-full h-[60vh] flex items-center justify-start">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
        <img src={data.heroBg} alt={data.name} className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="relative z-20 px-8 md:px-24 max-w-3xl">
          <div className="w-16 h-1 bg-white mb-6"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">{data.name}</h1>
          <p className="text-xl text-slate-300">{data.slogan}</p>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-8 py-20">
        <div className="space-y-8">
          {data.items.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-50 rounded-lg">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                <p className="text-slate-600 mt-1">{item.desc}</p>
              </div>
              <span className="text-xl font-bold text-slate-900 bg-white px-4 py-2 rounded shadow-sm">{item.price}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );

  return (
    <>
      {/* Botón Flotante Global (Aparece en todas las plantillas) */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 bg-indigo-600 text-white px-5 py-2.5 rounded-full font-medium shadow-lg flex items-center gap-2 hover:bg-indigo-700 hover:scale-105 transition-all"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Volver a AlquilaWeb
      </button>

      {/* Renderizado Condicional de Plantillas */}
      {data.template === 'elegant' && renderElegant()}
      {data.template === 'playful' && renderPlayful()}
      {data.template === 'minimalist' && renderMinimalist()}

      {/* Footer Global para la demo */}
      <footer className={`${data.theme} text-white py-12 text-center relative z-20`}>
        <p className="font-medium text-lg">© 2026 {data.name}</p>
        <p className="text-sm opacity-70 mt-2">Sitio web demo generado por AlquilaWeb</p>
      </footer>
    </>
  );
}