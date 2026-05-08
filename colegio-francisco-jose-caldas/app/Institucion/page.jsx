import Navbar from "@/componentes/Navbar";
import Footer from "@/componentes/Footer";

export default function Institucion() {
  return (
    <div className="font-sans">
      <Navbar />

      {/* MISIÓN Y VISIÓN */}
      <section className="p-6 md:p-10 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Misión */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Misión</h2>
            <p className="text-gray-600 leading-relaxed">
              Somos una institución educativa de carácter oficial, que se propone brindar a la comunidad Metense un ambiente óptimo en los niveles de Preescolar, Primaria educación básica Secundaria y media, propiciando una formación integral en las dimensiones humana, científica, cultural y deportiva que facilite la comprensión de la realidad local, regional y nacional, para consolidar los valores de: Participación, Tolerancia, Respeto, Solidaridad, Honestidad, Justicia, Autenticidad, Democracia, Convivencia social, orientando a los estudiantes en las disciplinas del conocimiento para proyectarlos a la educación superior, para hacer de ellos personas activas y participativas en la solución de los problemas de su región, mejorando el entorno social en que se desenvuelven.
            </p>
          </div>

          {/* Visión */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Visión</h2>
            <p className="text-gray-600 leading-relaxed">
              En el año 2020 La Institución Educativa, Instituto Nacional Francisco José de Caldas será una institución líder en la formación de bachilleres con fundamentos altamente competitivos en las áreas de desarrollo social, económico, político y cultural; hombres formados con autonomía, responsabilidad, con valores éticos para que ayuden a formar el ciudadano dinámico, trascendente, creativo y positivo que requiere la sociedad del nuevo milenio en el departamento del Meta.
            </p>
          </div>

        </div>
      </section>

      {/* INSTITUCIÓN */}
      <section className="p-6 md:p-10 bg-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <img
          src="/images/fotoinstitucion.jpg"
          alt="Institución"
          className="w-full md:w-1/2 h-auto aspect-video object-cover rounded shadow"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Institución</h2>
            <p className="text-gray-600 leading-relaxed">
              LA INSTITUCIÓN EDUCATIVA, INSTITUTO NACIONAL FRANCISCO JOSE DE CALDAS, de la ciudad de Villavicencio, inició sus labores académicas en 1950, con un grupo de estudiantes matriculados en el grado quinto de preparatoria, quienes se conviertieron en semillero para el bachillerato con jornada diurna y perduró así hasta 1962. Obtuvo su aprobación según resolución 83 del 24 de marzo de 1951.
            </p>
          </div>
        </div>
      </section>

      {/* ESTRUCTURA DE LA INSTITUCIÓN EDUCATIVA */}
      <section className="p-6 md:p-10 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse gap-8 items-center">
          <img
            src="/images/estructura.png"
            alt="Estructura de la Institución"
            className="w-full md:w-1/2 h-auto object-contain rounded shadow"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Estructura de la Institución Educativa
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {/* COLOCA AQUÍ EL TEXTO DE LA ESTRUCTURA */}
            </p>
          </div>
        </div>
      </section>

      {/* SEDES */}
      <section className="p-6 md:p-10 bg-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <img
            src="/images/sedes.jpg"
            alt="Sedes"
            className="w-full md:w-1/2 h-64 object-cover rounded shadow"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sedes</h2>
            <p className="text-gray-600 leading-relaxed">
              {/* COLOCA AQUÍ EL TEXTO DE LAS SEDES */}
            </p>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="p-6 md:p-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Historia</h2>

          {/* Institución */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Institución</h3>
           <img
              src="/images/colegio1.jpeg"
              alt="Institución"
              className="w-full h-auto object-contain rounded shadow"
            />
          </div>

          {/* Instituto Nacional Francisco José de Caldas */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Instituto Nacional Francisco José de Caldas
            </h3>
            <p className="text-gray-600 leading-relaxed">
              El Instituto Caldas es un colegio público y mixto en Villavicencio, Meta . Fue fundado en 1950. En esa época había otros dos colegios, La Salle para varones de los Hermanos Cristianos de La Salle y el colegio femenino de la Sabiduría de las Hermana Monfortianas. En sus primeros veinte años el Caldas fue un colegio para muchachos. Estos tres colegios trajeron la educación secundaria a este pueblo ganadero y agrícola que habría de convertirse en la mayor ciudad de la orinoquia colombiana. Villavicencio todavía en esa época estaba muy tenuamente connectada a la capital por una carretera que se derrumbaba en el invierno y se empolvaba en el verano por el paso de buses y automotores. Había días cuando un viaje de 8 horas era normal. Y había épocas cuando por los derrumbes la gente dormía a lo largo de la carreteras esperando a que llegara la maquinaria pesada para abrir el paso.
              <br /><br />
              El instituto es reconocido como un centro cultural del Meta de ideas seglares e innovadoras. A el llegaron jóvenes maestros que se habían graduado de colegio normalistas, colegios que el gobierno nacional había formado para modernizar la educación de Colombia. Estos jóvenes maestros trajeron al Meta una cultura ampliamente nacional.De sus aulas salieron los primeros abogados, medicos, maestros, políticos y servidores públicos del Meta. Paso a la juventud, decia la gente mayor cuando los colegiales del Caldas pasaban por el centro del pueblo. Villavicencio estaba muy orgullosa de su colegio nacional.
            </p>
          </div>

         {/* La Fusión Caldista */}
        <div className="mb-8">
           <h3 className="text-xl font-semibold text-gray-700 mb-3">La Fusión Caldista</h3>
              <p className="text-gray-600 leading-relaxed">
                 Durante la primera década del siglo XXI, motivado por las políticas educativas nacionales, el colegio Caldas fue una de las instituciones que recibió en una fusión a otras instituciones educativas de la ciudad de nivel básica primaria con el fin de diseñar planes curriculares que se enfoquen de forma adecuada para el aprendizaje de los estudiantes de primaria con los niveles de secundaria. Inicialmente fueron adheridas tres instituciones, pero años más tarde, la institución Jaime Rook fue asignada a otra institución educativa. Finalmente, después de estos cambios, y estabilización de esta reforma educativa en la región, las sedes que actualmente forman parte de colegio Caldas son:
                  <br /><br />
                  Sede Concepción Palacios
                  <br />
                  Sede Francisco Miranda
              </p>
        </div>

          {/* Reconstrucción de la sede principal */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Reconstrucción de la Sede Principal
            </h3>
            <p className="text-gray-600 leading-relaxed">
              En 2008 Darío Vásquez Sánchez, siendo gobernador del Meta y como ex-alumno del colegio, anuncio que el plantel del colegio sería remodelada completamente. La demolición de la antigua estructura e inicio de la construcción de la nueva edificación de la sede principal ocurrió en el año 2010. La entrega e inauguración se tiene programada para el primer semestre del año 2011.
                <br /><br />
            El objetivo de esta remodelación fue mejorar el ambiente en el cual estudiantes y profesores interactúan entre sí, y dignificarlo. La propuesta pretende la construcción de bloques de entre cuatro y cinco pisos destinadas a contener aulas de clase, laboratorios y área administrativa con el fin de despejar un área importante que será destinada para la adecuación de zonas verdes, áreas recreativas e instalar plazoletas de comidas.
                <br /><br />
            Para tal proyecto no solo se contempla el área de la antigua estructura, además contempla el área del colegio Marco Fidel Suárez, el cual está al lado del Caldas, más precisamente en el costado norte, y que sería fusionado para completar este proyecto.
                  <br /><br />
            La última parte mencionada de la propuesta presenta muchas contradictores. Aún se desconoce cual será el destino de la Marco Fidel Suárez y sí finalmente se integrara al Colegio Caldas como se ha mencionado durante muchos años.
            </p>
          </div>

{/* SÍMBOLOS INSTITUCIONALES */}
<section className="p-6 md:p-10 bg-white">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-8">Símbolos Institucionales</h2>

    {/* Escudo y Bandera */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

      {/* Escudo */}
      <div className="flex flex-col items-center text-center gap-3 bg-gray-50 rounded shadow p-6">
        <img
          src="/images/logo1.jpg"
          alt="Escudo"
          className="w-48 h-auto object-contain"
        />
        <h3 className="font-bold text-gray-700 text-lg">Escudo</h3>
        <p className="text-sm text-gray-500">
          {/* DESCRIPCIÓN DEL ESCUDO */}
        </p>
      </div>

      {/* Bandera */}
      <div className="flex flex-col items-center text-center gap-3 bg-gray-50 rounded shadow p-6">
        <img
          src="/images/banderavillavo.jpg"
          alt="Bandera"
          className="w-100 h-auto object-contain"
        />
        <h3 className="font-bold text-gray-700 text-lg">Bandera</h3>
        <p className="text-sm text-gray-500">
          {/* DESCRIPCIÓN DE LA BANDERA */}
        </p>
      </div>

    </div>

    {/* Coro */}
    <div className="bg-gray-50 rounded shadow p-6">
      <h3 className="font-bold text-gray-700 text-lg mb-3">Coro</h3>
      <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line mb-4">
        {`Cantamos confiados que en nuestro colegio
Por todos los años se ven florecer
Los buenos modales, sabiduría
De todo el que viene deseando aprender

Oh! Larga partida la que iniciaremos
Al dejar las aulas para no volver,
Nuestras esperanzas son la luz y guía
Para ver mañana, un nuevo amanecer.

Nuestro caldas, querido colegio
Con orgullo y amor quedará
En el alma el recuerdo grabado,
Y que el tiempo jamás borrará.`}
      </p>
      <p className="text-sm text-gray-500 mb-4">
        <span className="font-semibold">Letra:</span> Miguel Ángel Martín<br />
        <span className="font-semibold">Música:</span> Pedro Ladino<br />
        <span className="font-semibold">Arreglos Musicales:</span> Jhon Berrio Álvarez, Fabio Giraldo
      </p>
      <audio controls className="w-full">
        <source src="/audio/himnocaldas.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>
    </div>

  </div>
</section>


{/* INSTALACIONES */}
<section className="p-6 md:p-10 bg-gray-100">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-8">Instalaciones</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {/* Aulas */}
      <div className="bg-white rounded shadow overflow-hidden">
        <img
          src="/images/aulas.jpg"
          alt="Aulas"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-gray-700">Aulas</h3>
          <p className="text-sm text-gray-500 mt-1">
            {/* DESCRIPCIÓN */}
          </p>
        </div>
      </div>

      {/* Coordinación */}
      <div className="bg-white rounded shadow overflow-hidden">
        <img
          src="/images/coordinacion.jpg"
          alt="Coordinación"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-gray-700">Coordinación</h3>
          <p className="text-sm text-gray-500 mt-1">
            {/* DESCRIPCIÓN */}
          </p>
        </div>
      </div>

      {/* Biblioteca */}
      <div className="bg-white rounded shadow overflow-hidden">
        <img
          src="/images/biblioteca.jpg"
          alt="Biblioteca"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-gray-700">Biblioteca</h3>
          <p className="text-sm text-gray-500 mt-1">
            {/* DESCRIPCIÓN */}
          </p>
        </div>
      </div>

      {/* Cancha */}
      <div className="bg-white rounded shadow overflow-hidden">
        <img
          src="/images/cancha.jpg"
          alt="Cancha"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-gray-700">Cancha Deportiva</h3>
          <p className="text-sm text-gray-500 mt-1">
            {/* DESCRIPCIÓN */}
          </p>
        </div>
      </div>

      {/* Sala de sistemas */}
      <div className="bg-white rounded shadow overflow-hidden">
        <img
          src="/images/sistemas.jpg"
          alt="Sala de Sistemas"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-gray-700">Sala de Sistemas</h3>
          <p className="text-sm text-gray-500 mt-1">
            {/* DESCRIPCIÓN */}
          </p>
        </div>
      </div>

      {/* Cafetería */}
      <div className="bg-white rounded shadow overflow-hidden">
        <img
          src="/images/cafeteria.jpg"
          alt="Cafetería"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-gray-700">Cafetería</h3>
          <p className="text-sm text-gray-500 mt-1">
            {/* DESCRIPCIÓN */}
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

        </div>
      </section>
{/* UBICACIÓN */}
<section className="p-6 md:p-10 bg-gray-100">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Ubicación</h2>
    <div className="rounded shadow overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1989.6814058456919!2d-73.6320319!3d4.1488577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2de7be3f36e7%3A0xd35d57b9e26a3058!2sColegio%20Francisco%20Jos%C3%A9%20de%20Caldas!5e0!3m2!1ses-419!2sco!4v1778204928097!5m2!1ses-419!2sco"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}