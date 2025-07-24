//components/Footer.tsx

'use client';

import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import React from 'react';

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-[#A0753A]/20 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/SomiesProxs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-[#A0753A] transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/misael-esteban-soria-jimenez-938a70348/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-[#A0753A] transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:1534209@senati.pe"
            aria-label="Email"
            className="text-gray-400 hover:text-[#A0753A] transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://wa.me/1234567890?text=Buenas%20tardes%2C%20me%20pongo%20en%20contacto%20porque%20estoy%20interesado%20en%20explorar%20una%20posible%20colaboraci%C3%B3n%20con%20usted%20para%20unirse%20a%20nuestro%20equipo."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-gray-400 hover:text-[#A0753A] transition-colors"
          >
            <MessageCircle size={24} />
          </a>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Mi Portfolio. Hecho con React y mucho
        </p>
      </div>
    </footer>
  );
};

export default Footer;