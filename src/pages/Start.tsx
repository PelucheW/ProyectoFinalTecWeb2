import { Helmet } from "react-helmet-async";
import "./Home.css"; 
import "./Start.css"; 

export default function Start() {

  return (
    <div className="home-container">
      <Helmet>
        <title>Inicio | MOVIEGO</title>
        <meta name="description" content="Explora el catálogo de MOVIEGO, consulta horarios de cine y descubre las películas más populares del momento." />
        <meta name="keywords" content="cine, películas, cartelera, estrenos, entretenimiento" />
      </Helmet>
      <div className="welcome-section">
        <h1 className="welcome-title">Bienvenido a <span>MOVIEGO</span></h1>
        <p className="welcome-subtitle">
          Tu destino definitivo para explorar el mundo del cine.
        </p>
      </div>

      <div className="content-card start-content-card">
        <h2 className="start-title-accent">¿Qué es MOVIEGO?</h2>
        <p className="start-description">
          MOVIEGO es una plataforma diseñada para entusiastas del cine que buscan estar al día con los 
          estrenos más populares, consultar horarios de funciones y gestionar su propio catálogo de películas. 
          Nuestra misión es facilitar el acceso a la información cinematográfica de manera rápida, elegante y eficiente.
        </p>
        <p className="start-description start-description-margin">
          Como usuario de nuestra plataforma, puedes navegar por nuestra extensa cartelera, ver detalles técnicos 
          de cada film y estar al tanto de las novedades de la industria. ¡Prepárate para vivir la mejor 
          experiencia de cine desde tu pantalla!
        </p>
      </div>
    </div>
  );
}
