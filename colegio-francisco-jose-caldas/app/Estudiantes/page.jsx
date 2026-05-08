import Navbar from "@/componentes/Navbar";
import Footer from "@/componentes/Footer";

export default function Estudiantes() {
  return (
    <div className="font-sans">
      <Navbar />

{/* PERFIL DEL ALUMNO */}
<section className="p-6 md:p-10 bg-white">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start">
    
    <img
      src="/images/estudiante.jpg"
      alt="Perfil del Alumno"
      className="w-full md:w-1/2 h-auto object-cover rounded shadow"
    />

    <div className="md:w-1/2">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Perfil del Alumno
      </h2>

      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>
          Basados en la misión-visión planteada en el P.E.I. de la Institución
          Educativa Instituto Nacional Francisco José de Caldas, el perfil del
          estudiante se debe fundamentar en una persona humana con gran sentido
          de pertenencia que:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            Proyecte sus conocimientos y sus principios para integrarse
            activamente a su comunidad y transformarla.
          </li>

          <li>
            Sea una persona ante todo humana, integral en todos sus actos.
          </li>

          <li>
            Sea cumplidora de sus deberes académicos de manera crítica y
            analítica.
          </li>

          <li>
            Sea capaz de aceptar, recibir y seleccionar todo aquello que
            contribuya a fortalecer su voluntad y enriquecer sus sentimientos.
          </li>

          <li>
            Enfrente con responsabilidad y acierto los distintos compromisos
            que depare su entorno socio-cultural, proyectando su capacidad para
            alcanzar un futuro exitoso.
          </li>

          <li>
            Contribuya con la preservación del derecho ajeno, con la justicia
            social y la honra ciudadana.
          </li>

          <li>
            Sea solidario y adquiera hábitos de sociabilidad que le faciliten
            la adopción del medio cultural y el éxito total en la vida pública.
          </li>

          <li>
            Se proponga alcanzar un nivel académico que le permita ingresar a
            la educación superior y desarrollar un gran espíritu de
            receptividad.
          </li>

          <li>
            Sea respetuoso por los principios políticos, filosóficos y de la
            familia.
          </li>

          <li>
            Valore el medio ambiente que le rodea y contribuya a su
            conservación.
          </li>

          <li>
            Sea un líder que proyecte sus actividades con visión y sentido de
            pertenencia hacia toda la comunidad educativa y organizaciones
            regionales.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* MANUAL DE CONVIVENCIA */}
<section className="p-6 md:p-10 bg-gray-100">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">
      Manual de Convivencia
    </h2>

    <div className="bg-white rounded shadow overflow-hidden">
      <iframe
        src="/Documentos/manualconvi.pdf"
        width="100%"
        height="600"
        className="w-full"
      />

      <div className="p-4 border-t">
        <a
          href="/Documentos/manualconvi.pdf"
          download
          className="inline-block bg-gray-700 hover:bg-gray-800 text-white text-sm px-5 py-2 rounded transition"
        >
          Descargar Manual de Convivencia
        </a>
      </div>
    </div>
  </div>
</section>

{/* SIE */}
<section className="p-6 md:p-10 bg-white">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">
      SIE
    </h2>

    <div className="bg-gray-50 rounded shadow overflow-hidden">
      <iframe
        src="/Documentos/siecaldas.pdf"
        width="100%"
        height="600"
        className="w-full"
      />

      <div className="p-4 border-t">
        <a
          href="/Documentos/siecaldas.pdf"
          download
          className="inline-block bg-gray-700 hover:bg-gray-800 text-white text-sm px-5 py-2 rounded transition"
        >
          Descargar SIE
        </a>
      </div>
    </div>
  </div>
</section>

{/* PEI CALDAS */}
<section className="p-6 md:p-10 bg-gray-100">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">
      PEI Caldas
    </h2>

    <div className="bg-white rounded shadow overflow-hidden">
      <iframe
        src="/Documentos/peicaldas2024.pdf"
        width="100%"
        height="600"
        className="w-full"
      />

      <div className="p-4 border-t">
        <a
          href="/Documentos/peicaldas2024.pdf"
          download
          className="inline-block bg-gray-700 hover:bg-gray-800 text-white text-sm px-5 py-2 rounded transition"
        >
          Descargar PEI Caldas
        </a>
      </div>
    </div>
  </div>
</section>

      {/* INFORMACIÓN RELEVANTE */}
      <section className="p-6 md:p-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Información Relevante
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tarjeta 1 */}
            <div className="bg-gray-50 rounded shadow p-5">
              <h3 className="font-bold text-gray-700 mb-2">
                Academicos
              </h3>

              <p className="text-sm text-gray-500">
                {/* DESCRIPCIÓN */}
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-gray-50 rounded shadow p-5">
              <h3 className="font-bold text-gray-700 mb-2">
                Bienestar
              </h3>

              <p className="text-sm text-gray-500">
                {/* DESCRIPCIÓN */}
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-gray-50 rounded shadow p-5">
              <h3 className="font-bold text-gray-700 mb-2">
                Trámites y Servicios
              </h3>

              <p className="text-sm text-gray-500">
                {/* DESCRIPCIÓN */}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}