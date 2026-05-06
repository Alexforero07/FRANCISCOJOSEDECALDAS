"use client";

import { useState, useEffect } from "react";
import { hero, cards, noticias } from "../data/contenido";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import Link from "next/link";


export default function Home() {
  const [index, setIndex] = useState(0);

  const heroImages = [
    "/images/colegio1.jpeg",
    "/images/colegio2.jpeg",
    "/images/colegio3.jpeg",
    "/images/colegio4.jpeg",
    "/images/colegio5.jpeg",
    "/images/colegio6.jpeg",
    "/images/colegio7.jpeg",
    "/images/colegio8.jpeg",
  ];

  useEffect(() => {
    if (heroImages.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="font-sans">

 <Navbar />

      {/* HERO */}
      <div
        className="relative h-[350px] md:h-[500px] lg:h-[550px] flex items-center text-white"
        style={{
          backgroundImage: `url(${heroImages[index] || "/images/colegio1.jpeg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-4 md:px-10 max-w-xl md:max-w-3xl">
          <p className="text-sm md:text-lg">Bienvenidos al</p>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            {hero?.titulo || "Colegio Francisco José de Caldas"}
          </h1>

          <p className="mt-2 md:mt-4 text-sm md:text-lg">
            {hero?.descripcion || "Formamos estudiantes íntegros."}
          </p>

          <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/Institucion">
            <button className="bg-gray-600 px-4 md:px-5 py-2 rounded text-sm md:text-base">
             {hero?.boton1 || "Conoce más"}
            </button>
          </Link>
          <Link href="/Proyectocultural">
            <button className="bg-gray-900 px-4 md:px-5 py-2 rounded text-sm md:text-base">
             {hero?.boton2 || "Más info"}
            </button>
          </Link>
</div>
        </div>

        {/* INDICADORES */}
        <div className="absolute bottom-3 md:bottom-5 right-4 md:right-10 flex gap-2">
          {heroImages.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                index === i ? "bg-gray-500" : "bg-white"
              }`}
            ></div>
          ))}
        </div>
      </div>


{/* CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 md:p-10 bg-gray-100">
  {cards.map((card) => {

    // SOLO IMAGEN (ASOPADRES)
    if (card.tipo === "imagen") {
      return (
        <a key={card.id} href={card.imagen} target="_blank">
          <div className="bg-white rounded shadow hover:shadow-lg transition p-5 cursor-pointer">
            
            <img
              src={card.imagen}
              alt={card.titulo}
              className="w-full h-40 object-cover rounded"
            />

            <h3 className="font-bold mt-4 text-gray-800">
              {card.titulo}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {card.descripcion.split("\n").map((linea, i) => (
                <span key={i}>
                  {linea}
                  <br />
                </span>
              ))}
            </p>

          </div>
        </a>
      );
    }

    // SUBMENÚ (BOTONES)
    if (card.tipo === "submenu") {
      return (
        <div key={card.id} className="bg-white rounded shadow p-5">
          
          <img
            src={card.imagen}
            alt={card.titulo}
            className="w-full h-40 object-cover rounded"
          />

          <h3 className="font-bold mt-4 text-gray-800">
            {card.titulo}
          </h3>

          <p className="text-gray-600 text-sm mb-3 leading-relaxed">
            {card.descripcion.split("\n").map((linea, i) => (
              <span key={i}>
                {linea}
                <br />
              </span>
            ))}
          </p>

          <div className="flex flex-col gap-2">
            {card.opciones.map((op, i) => (
              <a
                key={i}
                href={op.link}
                className="bg-gray-600 text-white text-sm px-3 py-2 rounded hover:bg-gray-700"
              >
                {op.nombre}
              </a>
            ))}
          </div>

        </div>
      );
    }

    return null; 
  })}
</div>

{/* NOTICIAS */}
<div className="p-6 md:p-10 bg-black text-white">

  <h2 className="font-bold text-xl md:text-2xl mb-6 text-gray-400">
    Noticias destacadas
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {noticias.map((n) => (
      <div
        key={n.id}
        className="bg-gray-900 p-4 rounded shadow hover:shadow-lg transition"
      >
        <img
          src={n.imagen}
          alt={n.titulo}
          className="w-full h-40 object-cover rounded"
        />

        <p className="text-xs text-gray-400 mt-2">
          {n.fecha}
        </p>

        <h4 className="font-bold text-sm md:text-base mt-1">
          {n.titulo}
        </h4>

        <p className="text-sm text-gray-300">
          {n.descripcion}
        </p>

        <a
          href={n.link}
          className="text-gray-400 text-sm mt-2 inline-block hover:underline"
        >
          Leer más →
        </a>
      </div>
    ))}
  </div>


</div>
 <Footer />
</div>
  );
}