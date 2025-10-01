import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou Nome (Link para a Home) */}
        <Link href="/" className="text-xl font-bold hover:text-cyan-400 transition-colors">
          Mateus de Castro Nappe
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <Link href="/pages/projetos" className="hover:text-cyan-400 transition-colors">
            Projetos
          </Link>
          <Link href="/pages/contato" className="hover:text-cyan-400 transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;