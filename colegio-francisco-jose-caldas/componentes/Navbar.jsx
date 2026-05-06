"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between md:items-center px-4 md:px-8 py-4 bg-white shadow-md gap-4">

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

      {/* DERECHA: MENÚ */}
      <ul className="hidden md:flex items-center gap-6 font-medium text-sm md:text-base">
        <li className="px-5 py-2 text-black border-2 border-black rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-500 hover:text-white hover:border-gray-900 active:scale-95">
          <Link href="/">Inicio</Link>
        </li>
        <li className="text-black cursor-pointer transition-colors hover:text-gray-900">
          <Link href="/Institucion">Institución</Link>
        </li>
        <li className="text-black cursor-pointer transition-colors hover:text-gray-900">
          <Link href="/Estudiantes">Estudiantes</Link>
        </li>
        <li className="text-black cursor-pointer transition-colors hover:text-gray-900">
          <Link href="/Docentes">Docentes</Link>
        </li>
        <li className="text-black cursor-pointer transition-colors hover:text-gray-900">
          <Link href="/Padres">Padres</Link>
        </li>
        <li className="text-black cursor-pointer transition-colors hover:text-gray-900">
          <Link href="/Egresados">Egresados</Link>
        </li>
        <li className="text-black cursor-pointer transition-colors hover:text-gray-900">
          <Link href="/Contactos">Contacto</Link>
        </li>
      </ul>

    </nav>
  );
}