import Link from 'next/link';
import Image from 'next/image'; 
import logoEnergia from '@/img/logo-energia.jpg';
import logoPorto from '@/img/logo-porto.jpg';

const ProjetosPage = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meus Projetos</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Aqui estão alguns dos projetos que mais me orgulho de ter construído, demonstrando minhas habilidades em diversas tecnologias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* --- CARD DE PROJETO 1 --- */}
                    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/20">
            <div className="w-full h-56 bg-slate-700 flex items-center justify-center">
              <Image 
                src={logoEnergia}
                alt="Ícone de folha verde dentro de setas de reciclagem"
                width={200} 
                height={200} 
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-white">Verdis</h3>
              <p className="text-gray-300 mb-4">
                Esse site foi feito com o objetivo de mostrar sobre cada uma das energias renováveis e suas tecnologias .
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-yellow-900 text-yellow-300 text-xs font-semibold px-2.5 py-1 rounded-full">Java</span>
                <span className="bg-emerald-900 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-full">Next.js</span>
                <span className="bg-sky-900 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">TypeScript</span>
              </div>
              <div className="flex gap-4">
                <Link 
                  href="https://github.com/mateuscastronappe/inovatech?tab=readme-ov-file" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full text-center"
                >
                  Ver Código (GitHub)
                </Link>
                <Link 
                  href="https://inovatech-pied.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg w-full text-center"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

          {/* --- CARD DE PROJETO 2 --- */}
            <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/20">
            <div className="w-full h-56 bg-slate-700 flex items-center justify-center">
              <Image 
                src={logoPorto}
                alt="Ícone azul da Porto Seguro com três barras pretas"
                width={200} 
                height={200} 
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-white">Porto Seguro</h3>
              <p className="text-gray-300 mb-4">
                Esse site foi feito com o objetivo de facilitar o chamado e agendamento de manutenções dos automóveis dos usuários, com planos que podem ser assinados para mais benefícios.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-yellow-900 text-yellow-300 text-xs font-semibold px-2.5 py-1 rounded-full">Java</span>
                <span className="bg-emerald-900 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-full">Next.js</span>
                <span className="bg-sky-900 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">TypeScript</span>
              </div>
              <div className="flex gap-4">
                <Link 
                  href="https://github.com/mateuscastronappe/Projeto-Porto-site" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full text-center"
                >
                  Ver Código (GitHub)
                </Link>
                <Link 
                  href="https://porto-dun-tau.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg w-full text-center"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjetosPage;