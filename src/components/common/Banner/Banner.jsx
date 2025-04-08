import './Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Banner() {
  return (
    <section className="banner d-flex align-items-center justify-content-center text-center">
      <h2 className="text-white">
        <span className="display-1 d-block fw-bold">GestorApp</span>
        <span className="fs-2">Descansa sin preocupaciones, reserva con un clic. 🌿✨</span>
      </h2>
    </section>
  );
}
