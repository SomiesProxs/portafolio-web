'use client'
import React from 'react';
import { Github, Linkedin, Mail, Code, Database, Globe, Server, Smartphone } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from "next/image";

// Interfaces
interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
}


// Main Portfolio Component
const Portfolio: React.FC = () => {
const skills: Skill[] = [
  { name: 'React', icon: <Globe />, level: 90 },        // Frontend (Globe)
  { name: 'Next.js', icon: <Server />, level: 90 },     // Backend/API (Server)
  { name: 'MongoDB', icon: <Database />, level: 60 },   // Database
  { name: 'Tailwind CSS', icon: <Globe />, level: 90 }, // Frontend (Globe)
  { name: 'Laravel', icon: <Server />, level: 75 },     // Backend (Server)
  { name: 'MySQL', icon: <Database />, level: 85 },     // Database
  { name: 'TypeScript', icon: <Code />, level: 80 },    // Código general (Code)
  { name: 'Figma', icon: <Smartphone />, level: 100 }   // Diseño (Smartphone, o puedes cambiarlo si quieres)
];


const projects: Project[] = [
{
  title: "Web_Educativo_Next",
  description: "Sitio educativo interactivo construido con Next.js que busca enseñar de forma clara y visual. Ideal para quienes desean aprender sin complicaciones: solo navega, explora y comprende cada concepto al instante. Todo está organizado para que cualquier persona —sin importar su nivel— pueda entenderlo con facilidad.",
  technologies: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
  github: "https://github.com/SomiesProxs/Web_Educativo_Next",
  demo: "https://registar.vercel.app/",
  image: "https://registar.vercel.app/miniportada.jpg"
}
];


  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
          <div className="w-60 h-60 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#A0753A] shadow-2xl relative">
            <Image
              src="/profile.jpg"
              alt="Mi foto de perfil"
              fill
              className="object-cover"
            />
          </div>
        </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Hola, soy </span>
            <span className="text-[#A0753A]">Misael Soria</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Desarrollador Full Stack | Creador de Experiencias Digitales
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[#A0753A] text-white rounded-lg hover:bg-[#A0753A]/80 transition-colors font-semibold"
            >
              Ver Mis Proyectos
            </button>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-[#A0753A] text-[#A0753A] rounded-lg hover:bg-[#A0753A] hover:text-white transition-colors font-semibold"
            >
              Contáctame
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-[#A0753A]">Sobre</span> Mí
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                Soy estudiante de 5to semestre en Desarrollo de Software en SENATI, con experiencia como practicante especializado en desarrollo front-end y conocimientos en back-end.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Me especializo en crear interfaces modernas y responsivas usando React, Next.js y Tailwind CSS, integrando APIs y desarrollando funcionalidades del lado del servidor con Laravel. Además, tengo experiencia en automatización y análisis de datos con Python.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Me destaco por mi proactividad, capacidad de aprendizaje rápido, dedicación y facilidad para trabajar en equipo.
              </p>

              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#A0753A]">1+</div>
                  <div className="text-gray-400">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#A0753A]">1+</div>
                  <div className="text-gray-400">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#A0753A]">8+</div>
                  <div className="text-gray-400">Tecnologías</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 p-6 rounded-lg border border-[#A0753A]/20">
                <Globe className="text-[#A0753A] mb-4" size={32} />
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-gray-400 text-sm">Interfaces modernas, accesibles y responsivas</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-[#A0753A]/20">
                <Server className="text-[#A0753A] mb-4" size={32} />
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-gray-400 text-sm">APIs sólidas y escalables con enfoque en rendimiento</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-[#A0753A]/20">
                <Database className="text-[#A0753A] mb-4" size={32} />
                <h3 className="font-semibold mb-2">Base de Datos</h3>
                <p className="text-gray-400 text-sm">Modelado y gestión eficiente de datos relacionales y no relacionales</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-[#A0753A]/20">
                <Smartphone className="text-[#A0753A] mb-4" size={32} />
                <h3 className="font-semibold mb-2">Figma</h3>
                <p className="text-gray-400 text-sm">Diseño de interfaces atractivas, prototipos interactivos y flujo de usuario</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-[#A0753A]">Mis</span> Habilidades
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill: Skill, index: number) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-[#A0753A]/20 hover:border-[#A0753A]/50 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="text-[#A0753A] mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-[#A0753A] h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-400">{skill.level}% Competencia</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-[#A0753A]">Mis</span> Proyectos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index: number) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-[#A0753A]">Trabajemos</span> Juntos
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 p-6 rounded-lg border border-[#A0753A]/20">
              <Mail className="text-[#A0753A] mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400">1534209@senati.pe</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-[#A0753A]/20">
              <Github className="text-[#A0753A] mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">github.com/SomiesProxs</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-[#A0753A]/20">
              <Linkedin className="text-[#A0753A] mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">linkedin.com/in/misael-esteban-soria-jimenez-938a70348/
</p>
            </div>
          </div>
          <a 
            href="mailto:1534209@senati.pe"
            className="inline-block px-8 py-3 bg-[#A0753A] text-white rounded-lg hover:bg-[#A0753A]/80 transition-colors font-semibold"
          >
            Envíame un Mensaje
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;