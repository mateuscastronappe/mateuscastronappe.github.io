import Image from "next/image";

import backgroundImage from "@/img/backgroundImage.jpg";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-5 text-center">

      
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Imagem de fundo com tema de tecnologia abstrata"
          fill
          style={{ objectFit: "cover" }}
          quality={80}
          className="opacity-30"
          placeholder="blur" 
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Mateus de Castro Nappe
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          Desenvolvedor Full-Stack transformando ideias em código com React, TypeScript e Node.js.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
            Ver Meus Projetos
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
            Entrar em Contato
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;