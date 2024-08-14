import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import '../styles/blogScreenStyle.css'

const BookBlogPage = () => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      // Cambia el fondo basado en la posición del scroll
      if (scrollPosition < maxScroll / 2) {
        // Amanecer o día
        document.body.style.background = `linear-gradient(to bottom, #FFDDC1, #FF6E40)`;
      } else {
        // Anochecer
        document.body.style.background = `linear-gradient(to bottom, #001D3D, #2C3E50)`;
      }

      // Controla la opacidad de las estrellas
      const starOpacity = Math.max(0, (scrollPosition - maxScroll / 2) / (maxScroll / 2));
      document.querySelector('.stars').style.opacity = starOpacity;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>

      {/* Header */}
      <Header />

      {/* Banner con cielo estrellado y letras */}
      <div className="banner">
        <div className="banner-text">Bienvenidos al Blog del Libro</div>
      </div>

      {/* Main content */}
      <main className="container my-5">
        {/* Resumen */}
        <section className="mb-5">
          <h2>Resumen del Libro</h2>
          <p>
            Este es un breve resumen del libro. Aquí puedes escribir un resumen atractivo y conciso que
            capture la esencia del libro, sus temas principales, y una breve descripción de la trama.
          </p>
        </section>

        {/* Reseña */}
        <section className="mb-5">
          <h2>Reseña del Libro</h2>
          <p>
            En esta sección puedes escribir una reseña detallada del libro, destacando sus puntos fuertes,
            lo que te gustó, lo que no, y cómo se compara con otros libros del mismo género o autor.
          </p>
        </section>

        {/* Comentarios */}
        <section className="mb-5">
          <h2>Comentarios de los Lectores</h2>
          <p>
            Aquí puedes mostrar comentarios de los lectores sobre el libro. Podrías utilizar un sistema de 
            comentarios si decides implementarlo, o simplemente mostrar citas destacadas de los comentarios.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p>© 2024 Blog del Libro. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};


export default BookBlogPage;
