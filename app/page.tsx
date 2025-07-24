'use client'
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MessageCircle, Code, Database, Globe, Server, Smartphone } from 'lucide-react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Engine } from 'tsparticles-engine';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

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

// Typewriter Effect Component
const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      aria-live="polite"
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
        className="inline-block w-1 h-6 bg-[#A0753A] ml-1"
      />
    </motion.span>
  );
};

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
};

// Main Portfolio Component
const Portfolio: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', icon: <Globe />, level: 90 },
    { name: 'Next.js', icon: <Server />, level: 90 },
    { name: 'MongoDB', icon: <Database />, level: 60 },
    { name: 'Tailwind CSS', icon: <Globe />, level: 90 },
    { name: 'Laravel', icon: <Server />, level: 75 },
    { name: 'MySQL', icon: <Database />, level: 85 },
    { name: 'TypeScript', icon: <Code />, level: 80 },
    { name: 'Figma', icon: <Smartphone />, level: 100 }
  ];

  const projects: Project[] = [
    {
      title: 'Web_Educativo_Next',
      description: 'Sitio educativo interactivo construido con Next.js para enseñar conceptos de forma clara y visual. Organizado para usuarios de todos los niveles.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'GSAP'],
      github: 'https://github.com/SomiesProxs/Web_Educativo_Next',
      demo: 'https://web-educativo.vercel.app/',
      image: 'https://web-educativo.vercel.app/miniportada.jpg',
    },
    {
      title: 'TaskManager',
      description: 'Aplicación de gestión de tareas con autenticación de usuarios, CRUD en tiempo real y diseño responsivo. Ideal para equipos y productividad personal.',
      technologies: ['React', 'Firebase', 'Tailwind', 'Node.js'],
      github: 'https://github.com/SomiesProxs/TaskManager',
      demo: 'https://taskmanager-demo.vercel.app/',
      image: '/taskmanager.jpg',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración. Optimizada para SEO y rendimiento.',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Vercel'],
      github: 'https://github.com/SomiesProxs/ECommerce',
      demo: 'https://ecommerce-demo.vercel.app/',
      image: '/ecommerce.jpg',
    }
  ];

  const contactItems = [
    {
      icon: <Mail />,
      title: 'Email',
      value: '1534209@senati.pe',
      href: 'mailto:1534209@senati.pe',
    },
    {
      icon: <Github />,
      title: 'GitHub',
      value: 'github.com/SomiesProxs',
      href: 'https://github.com/SomiesProxs',
    },
    {
      icon: <Linkedin />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/misael-esteban-soria-jimenez-938a70348/',
      href: 'https://linkedin.com/in/misael-esteban-soria-jimenez-938a70348/',
    },
    {
      icon: <MessageCircle />,
      title: 'WhatsApp',
      value: '+51 949 871 410',
      href: 'https://wa.me/51949871410?text=Hola,%20quiero%20contactarte%20por%20una%20colaboración.',
    },
  ];

  // Animation Controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Particle Initialization
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  // WhatsApp Click Handler
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/51949871410?text=Hola,%20quiero%20contactarte%20por%20una%20colaboración.', '_blank', 'noopener,noreferrer');
  };

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes integrar una API para enviar el formulario
    setFormStatus('Mensaje enviado con éxito!');
    setTimeout(() => setFormStatus(''), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative font-sans">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' }
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 }
            }
          },
          particles: {
            color: { value: '#A0753A' },
            links: { color: '#A0753A', distance: 150, enable: true, opacity: 0.3, width: 1 },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 1.5,
              straight: false
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.3 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } }
          },
          detectRetina: true
        }}
        className="absolute inset-0 z-0"
      />
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
        <motion.div 
          className="max-w-6xl mx-auto text-center z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          role="banner"
        >
          <motion.div 
            className="w-60 h-60 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#A0753A] shadow-2xl relative"
            variants={scaleIn}
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/profile.jpg"
              alt="Foto de perfil de Misael Soria"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover transform hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            variants={fadeInUp}
          >
            <span className="text-white">Hola, soy </span>
            <span className="text-[#A0753A] relative inline-block">
              <TypewriterText text="Misael Soria" delay={0.5} />
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#A0753A]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 2 }}
              />
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8"
            variants={fadeInUp}
          >
            <TypewriterText text="Desarrollador Full Stack | Creador de Experiencias Digitales" delay={2.5} />
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
          >
            <motion.button 
              variants={fadeInUp}
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[#A0753A] text-white rounded-lg hover:bg-[#A0753A]/90 transition-colors font-semibold relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Ver mis proyectos"
            >
              <span className="relative z-10">Ver Mis Proyectos</span>
              <motion.span
                className="absolute inset-0 bg-[#A0753A]/50"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button 
              variants={fadeInUp}
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-[#A0753A] text-[#A0753A] rounded-lg hover:bg-[#A0753A] hover:text-white transition-colors font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contáctame"
            >
              Contáctame
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-16 px-4 sm:px-6 relative">
        <motion.div 
          className="max-w-6xl mx-auto"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          style={{ background: 'rgba(0, 0, 0, 0.3)', transform: 'translateZ(0)' }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            <span className="text-[#A0753A]">Sobre</span> Mí
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div variants={fadeInUp}>
              <p className="text-base sm:text-lg text-gray-200 mb-6">
                Soy estudiante de 5to semestre en Desarrollo de Software en SENATI, con experiencia como practicante especializado en desarrollo front-end y conocimientos sólidos en back-end.
              </p>
              <p className="text-base sm:text-lg text-gray-200 mb-6">
                Me especializo en crear interfaces modernas y responsivas usando React, Next.js y Tailwind CSS, integrando APIs y desarrollando funcionalidades del lado del servidor con Laravel. También tengo experiencia en automatización y análisis de datos con Python.
              </p>
              <p className="text-base sm:text-lg text-gray-200 mb-6">
                Me destaco por mi proactividad, capacidad de aprendizaje rápido, dedicación y facilidad para trabajar en equipo.
              </p>
              <motion.div 
                className="flex flex-wrap gap-6 sm:gap-8 justify-center"
                variants={staggerContainer}
              >
                {[
                  { value: '1+', label: 'Años de Experiencia' },
                  { value: '3+', label: 'Proyectos Completados' },
                  { value: '8+', label: 'Tecnologías' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    variants={scaleIn}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-xl sm:text-2xl font-bold text-[#A0753A]">{stat.value}</div>
                    <div className="text-gray-300 text-sm sm:text-base">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              {[
                { icon: <Globe />, title: 'Frontend', desc: 'Interfaces modernas, accesibles y responsivas' },
                { icon: <Server />, title: 'Backend', desc: 'APIs sólidas y escalables con enfoque en rendimiento' },
                { icon: <Database />, title: 'Base de Datos', desc: 'Modelado y gestión eficiente de datos' },
                { icon: <Smartphone />, title: 'Figma', desc: 'Diseño de interfaces y prototipos interactivos' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-[#A0753A]/20 hover:border-[#A0753A]/50 transition-all duration-300"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-[#A0753A] mb-4 w-8 h-8"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-16 px-4 sm:px-6 bg-gray-900/50 relative">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            <span className="text-[#A0753A]">Mis</span> Habilidades
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {skills.map((skill: Skill, index: number) => (
              <motion.div 
                key={index}
                className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-[#A0753A]/20 hover:border-[#A0753A]/50 transition-all duration-300"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="text-[#A0753A] mr-3 w-6 h-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="font-semibold text-base sm:text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                  <motion.div 
                    className="bg-[#A0753A] h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="text-sm text-gray-300">{skill.level}% Competencia</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-16 px-4 sm:px-6 relative">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            <span className="text-[#A0753A]">Mis</span> Proyectos
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {projects.map((project: Project, index: number) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 px-4 sm:px-6 bg-gray-900/50 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-8"
            variants={fadeInUp}
          >
            <span className="text-[#A0753A]">Trabajemos</span> Juntos
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-200 mb-12"
            variants={fadeInUp}
          >
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            variants={staggerContainer}
          >
            {contactItems.map((contact, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-[#A0753A]/20 hover:border-[#A0753A]/50 transition-all duration-300"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                onClick={contact.title === 'WhatsApp' ? handleWhatsAppClick : undefined}
              >
                <motion.div
                  className="text-[#A0753A] mx-auto mb-4 w-8 h-8"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {contact.icon}
                </motion.div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">{contact.title}</h3>
                {contact.title === 'WhatsApp' ? (
                  <span 
                    className="text-gray-300 hover:text-[#A0753A] transition-colors cursor-pointer"
                    role="link"
                    aria-label="Contactar por WhatsApp"
                  >
                    {contact.value}
                  </span>
                ) : (
                  <a
                    href={contact.href}
                    className="text-gray-300 hover:text-[#A0753A] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contactar por ${contact.title}`}
                  >
                    {contact.value}
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;