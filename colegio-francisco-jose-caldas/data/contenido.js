// /data/contenido.js

export const hero = {
  titulo: "Colegio Francisco José de Caldas",
  descripcion:
    "Formamos estudiantes íntegros, críticos y comprometidos con su entorno.",
  imagen: "/images/colegio1.jpeg",
  boton1: "Conoce más",
  boton2: "Proyecto Cultural"
};

export const cards = [
  {
    id: 1,
    titulo: "Asopadres",
    descripcion: "Asociación de padres de familia para fortalecer la comunidad educativa.",
    imagen: "/images/asopadres.png",
    tipo: "imagen"
  },
  {
    id: 2,
    titulo: "PREMATRÍCULA",
    descripcion: "Actualiza los datos del estudiante antiguo en la plataforma Pegasus, adjuntando los documentos requeridos.\nPara traslado a otra institución, debes indicar si continuará o no en el colegio; de lo contrario, no podrá retirarse del sistema (SIMAT).",
    imagen: "/images/prematricula.png",
    tipo: "submenu",
    opciones: [
      {
        nombre: "Primaria Antiguos Estudiantes",
        link: "/prematricula/primaria"
      },
      {
        nombre: "Secundaria Antiguos Estudiantes",
        link: "/prematricula/secundaria"
      }
    ]
  },
  {
    id: 3,
    titulo: "INSCRIPCIONES",
    descripcion: "Proceso para estudiantes nuevos: diligencia la información del aspirante, imprime y firma la inscripción, y entrégala con los documentos requeridos en la sede correspondiente.\nLa edad mínima para preescolar es de 5 años y la solicitud no garantiza la admisión.",
    imagen: "/images/inscripciones.png",
    tipo: "submenu",
    opciones: [
      {
        nombre: "Primaria Nuevos Estudiantes",
        link: "/inscripciones/primaria"
      },
      {
        nombre: "Secundaria Nuevos Estudiantes",
        link: "/inscripciones/secundaria"
      }
    ]
  }
];

export const noticias = [
  {
    id: 1,
    titulo: "Semana Cultural",
    descripcion: "Actividades para promover el talento.",
    imagen: "/images/semanacultural.png",
    fecha: "15 de mayo 2024",
    link: "#"
  },
  {
    id: 2,
    titulo: "Feria de la Ciencia",
    descripcion: "Proyectos innovadores.",
    imagen: "/images/feriaciencia.jpg",
    fecha: "10 de mayo 2024",
    link: "#"
  }
  
];