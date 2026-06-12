import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./NotFound.css";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - No encontrado | MOVIEGO";
  }, []);

  return (
    <div className="notfound-container">
      <h1 className="notfound-code">404</h1>
      <p className="notfound-text">
         La página que buscas no existe o fue movida.
      </p>
      <Link 
        to="/" 
        className="btn-back-home"
      >
        Volver al inicio
      </Link>
    </div>
  );
}