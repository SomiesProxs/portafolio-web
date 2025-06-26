//components/Navbar.
'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-[#A0753A]/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-[#A0753A] font-bold text-xl">Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white hover:text-[#A0753A] transition-colors"
              >
                {section === 'inicio' && 'Inicio'}
                {section === 'sobre-mi' && 'Sobre Mí'}
                {section === 'habilidades' && 'Habilidades'}
                {section === 'proyectos' && 'Proyectos'}
                {section === 'contacto' && 'Contacto'}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#A0753A] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-[#A0753A]/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-[#A0753A] transition-colors"
                >
                  {section === 'inicio' && 'Inicio'}
                  {section === 'sobre-mi' && 'Sobre Mí'}
                  {section === 'habilidades' && 'Habilidades'}
                  {section === 'proyectos' && 'Proyectos'}
                  {section === 'contacto' && 'Contacto'}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
