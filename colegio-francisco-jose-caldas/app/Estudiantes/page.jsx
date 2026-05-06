import Navbar from "@/componentes/Navbar";
import Footer from "@/componentes/Footer";

export default function Estudiantes() {
  return (
    <div className="font-sans">
      <Navbar />

      {/* CONTENIDO DE ESTUDIANTES */}
      <main className="p-6 md:p-10">
        <h1 className="text-2xl font-bold">Estudiantes</h1>
        <p>Contenido de la página...</p>
      </main>

      <Footer />
    </div>
  );
}