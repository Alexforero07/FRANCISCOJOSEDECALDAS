export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm md:text-base">

      {/* Columna 1 */}
      <div className="flex flex-row gap-4 items-center">
        <img 
          src="/images/logo1-sinfondo.png" 
          alt="Logo Colegio Francisco José de Caldas" 
          className="w-20 h-20 object-contain flex-shrink-0"
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold">Colegio Francisco José de Caldas</h3>
          <p>Formamos personas, construimos futuro.</p>
          <p className="text-xs text-gray-500 mt-1">
            © 2026 Colegio Francisco José de Caldas.<br />
            Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Columna 2 - Redes con tus imágenes */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Redes</h3>
        
        <a 
          href="https://www.facebook.com/colegiocaldas/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 w-fit"
        >
          <img src="/images/facebookicon.png" alt="Facebook" className="w-5 h-5 object-contain" />
          Facebook
        </a>

        <a 
          href="https://www.instagram.com/colegiofrciscosjosecaldas" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 w-fit"
        >
          <img src="/images/instagramicon.png" alt="Instagram" className="w-5 h-5 object-contain" />
          Instagram
        </a>

        <a 
          href="https://x.com/caldasvillavo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 w-fit"
        >
          <img src="/images/xicon.png" alt="Twitter" className="w-5 h-5 object-contain" />
          Twitter
        </a>
      </div>

      {/* Columna 3 - Contacto */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Contacto</h3>
        <p className="flex items-start gap-2">
          <img src="/images/mapa.png" alt="Dirección" className="w-5 h-5 object-contain mt-0.5 flex-shrink-0" />
          <span>Carrera 26 No. 35-68, Villavicencio</span>
        </p>
        <p className="flex items-start gap-2">
          <img src="/images/gmail.png" alt="Correo" className="w-5 h-5 object-contain mt-0.5 flex-shrink-0" />
          <span>caldasvillavo@edu.co</span>
        </p>
      </div>

    </footer>
  );
}