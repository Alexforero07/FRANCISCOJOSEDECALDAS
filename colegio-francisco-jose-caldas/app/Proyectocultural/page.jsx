import Navbar from "@/componentes/Navbar";
import Footer from "@/componentes/Footer";

export default function ProyectoCultural() {
  return (
    <div className="font-sans">
      <Navbar />

      {/* CONTENIDO DE PROYECTO CULTURAL */}
      <main className="p-6 md:p-10">
        <h1 className="text-2xl font-bold">Proyecto Cultural</h1>
        <p>Contenido de la página...</p>
      </main>

      <Footer />
    </div>
  );
}