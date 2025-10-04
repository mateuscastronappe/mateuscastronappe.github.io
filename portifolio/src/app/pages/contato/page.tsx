import Link from 'next/link';


const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);


const ContatoPage = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vamos Conversar!</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para me contatar por qualquer um dos canais abaixo.
          </p>
        </div>

       
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-2">Contatos Diretos</h2>
            
            <Link 
              href="mailto:mateusdecastronappe@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 group"
            >
              <MailIcon className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-lg text-gray-300 group-hover:underline">mateusdecastronappe@gmail.com</span>
            </Link>
            
            <Link 
              href="https://www.linkedin.com/in/mateus-castro-0a43b82b3/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 group"
            >
              <LinkedinIcon className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-lg text-gray-300 group-hover:underline">LinkedIn</span>
            </Link>
            
            <Link 
              href="https://github.com/mateuscastronappe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 group"
            >
              <GithubIcon className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-lg text-gray-300 group-hover:underline">GitHub</span>
            </Link>
          </div>

          
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Ou me envie uma mensagem</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full bg-slate-800 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full bg-slate-800 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensagem</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-slate-800 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
                  Enviar Mensagem
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Ainda estou configurando o envio deste formulário. Por favor, utilize os contatos diretos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContatoPage;