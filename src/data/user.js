// src/data/user.js

export const user = {
  name: "Leonardo José Medina Flores",
  role: "Estudiante de Ingeniería de Sistemas y Computación",
  description: "Soy un apasionado por la tecnología y la innovación. Me define la curiosidad y el interés constante por aprender cosas nuevas, desde arquitecturas de software hasta las últimas herramientas de IA. Busco un entorno donde pueda aportar mis habilidades y seguir desafiándome profesionalmente.",
  social: {
    github: "https://github.com/leoMedi09", 
    linkedin: "https://www.linkedin.com/in/leomedina", 
    email: "mailto:leomedinaflores09@gmail.com"
  }
};

export const skills = [
  { name: "Python (Flask/FastAPI)", level: 90 },
  { name: "Java & POO", level: 85 },
  { name: "SQL (MySQL/PostgreSQL)", level: 85 }, 
  { name: "React & Frontend", level: 75 }, 
  { name: "Desarrollo Móvil Android", level: 75 },
];

export const projects = [
  {
    title: "Sistema de Gestión (CRUD)",
    description: "Aplicación web full-stack para administrar inventarios o usuarios. Permite crear, leer, actualizar y eliminar registros en tiempo real. Este proyecto demuestra mi capacidad para manejar bases de datos relacionales y conectar el backend con el frontend eficientemente.",
    tags: ["React", "Python Flask", "MySQL", "Gestión"],
    link: "https://github.com/leoMedi09/Proyecto_CRUD_Gestion", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
  },
  {
    title: "Chatbot con IA",
    description: "Asistente virtual inteligente capaz de responder preguntas y procesar lenguaje natural. Desarrollado integrando APIs modernas de Inteligencia Artificial, explorando cómo la tecnología puede automatizar la atención y mejorar la experiencia del usuario.",
    tags: ["Python", "OpenAI API", "Streamlit", "IA"],
    link: "https://github.com/leoMedi09/Chatbot_IA.git",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" 
  },
  {
    title: "Cita Salud - App Móvil",
    description: "Solución móvil nativa diseñada para reservar citas médicas en zonas rurales. Incluye una App Android intuitiva y un panel administrativo web, resolviendo una problemática real de accesibilidad a la salud mediante tecnología.",
    tags: ["Android Studio", "FastAPI", "PostgreSQL", "App Nativa"], 
    link: "https://github.com/leoMedi09/Cita_Salud_RobleFarma",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000" 
  }
];