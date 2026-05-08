"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/Institucion", label: "Institución" },
    { href: "/Estudiantes", label: "Estudiantes" },
    { href: "/Docentes", label: "Docentes" },
    { href: "/Padres", label: "Padres" },
    { href: "/Egresados", label: "Egresados" },
    { href: "/Contactos", label: "Contacto" },
  ];

  return (
    <nav className="bg-white shadow-md px-4 md:px-8 py-4">

      <div className="flex justify-between items-center">

        {/* IZQUIERDA: LOGO + TEXTO */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo1.jpg"
            alt="Logo colegio"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <div>
            <h1 className="text-black font-bold text-sm md:text-lg leading-tight">
              Colegio Francisco José de Caldas
            </h1>
            <p className="text-xs md:text-sm text-gray-500">
              Formamos personas, construimos futuro.
            </p>
          </div>
        </div>

        {/* BOTÓN HAMBURGUESA — solo móvil */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setAbierto(!abierto)}
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${abierto ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${abierto ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${abierto ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* MENÚ ESCRITORIO */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-sm md:text-base">
          {links.map((link, i) => (
            <li key={i}>
              {i === 0 ? (
                <Link
                  href={link.href}
                  className="px-5 py-2 text-black border-2 border-black rounded-full transition-all duration-300 hover:bg-gray-500 hover:text-white hover:border-gray-900 active:scale-95"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-black transition-colors hover:text-gray-500"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

      </div>

      {/* MENÚ MÓVIL */}
      {abierto && (
        <ul className="md:hidden flex flex-col mt-4 gap-3 font-medium text-sm border-t pt-4">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="block text-black hover:text-gray-500 py-1"
                onClick={() => setAbierto(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </nav>
  );
}