import './Acerca.css'; 

export function Acerca() {
  return (
    <section className="acerca-section col-12 col-md-10 mx-auto">
      <h2 className="text-primary fw-bold mb-3">GestorApp:</h2>
      
      <p className="text-muted text-justify">
        🌿 Bienvenido a GestorApp, la solución perfecta para quienes buscan relajarse sin complicaciones.  
        Nuestra plataforma te permite explorar y reservar fácilmente las mejores opciones para tu descanso, entretenimiento y diversión con solo un clic.
      </p>
      
      <ul className="list-unstyled text-justify">
        <li className="mb-2">
          🏡 <strong>Encuentra tu refugio ideal:</strong> Desde acogedoras cabañas en la montaña hasta escapadas junto al lago.
        </li>
        <li className="mb-2">
          💆‍♀️ <strong>Zonas de descanso premium:</strong> Disfruta de espacios como sauna, piscina, jacuzzi, y mucho más.
        </li>
        <li className="mb-2">
          📅 <strong>Reserva sin estrés:</strong> Consulta disponibilidad en tiempo real y asegura tu estadía de manera rápida y segura.
        </li>
        <li className="mb-2">
          🔒 <strong>Tranquilidad garantizada:</strong> Con un proceso de reserva confiable y atención personalizada.
        </li>
      </ul>
      
      <p className="fw-bold text-justify mt-4">
        ✨ ¡Explora, elige y relájate con GestorApp! ✨
      </p>
    </section>
  );
}
