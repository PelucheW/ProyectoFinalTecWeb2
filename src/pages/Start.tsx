import { useEffect } from "react";
import "./Home.css"; 

export default function Start() {
  useEffect(() => {
    document.title = "Inicio | MOVIEGO";
  }, []);

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1 className="welcome-title">Bienvenido a <span>MOVIEGO</span></h1>
        <p className="welcome-subtitle">
          Tu destino definitivo para explorar el mundo del cine.
        </p>
      </div>

      <div className="content-card" style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>
        <h2 style={{ color: "var(--accent-green)", marginBottom: "20px" }}>¿Qué es MOVIEGO?</h2>
        <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "17px" }}>
          MOVIEGO es una plataforma diseñada para entusiastas del cine que buscan estar al día con los 
          estrenos más populares, consultar horarios de funciones y gestionar su propio catálogo de películas. 
          Nuestra misión es facilitar el acceso a la información cinematográfica de manera rápida, elegante y eficiente.
        </p>
        <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "17px", marginTop: "20px" }}>
          Como usuario de nuestra plataforma, puedes navegar por nuestra extensa cartelera, ver detalles técnicos 
          de cada film y estar al tanto de las novedades de la industria. ¡Prepárate para vivir la mejor 
          experiencia de cine desde tu pantalla!
        </p>
      </div>
    </div>
  );
}
