import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Landing.css"; 

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Bienvenido a MOVIEGO | Descubre el Cine";
  }, []);

  return (
    <div className="landing-container">
      <h1 className="landing-title">MOVIEGO</h1>
      <p className="landing-subtitle">
        La plataforma definitiva para amantes del séptimo arte.
      </p>
      
      <div className="landing-actions">
        <button 
          className="btn-primary"
          onClick={() => navigate("/login")}
        >
          Comenzar Ahora
        </button>
      </div>

      <div className="stats-grid landing-stats">
        <div className="stat-card">
          <div className="stat-icon">🎬</div>
          <p className="stat-title">+10,000 Películas</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <p className="stat-title">Reviews Reales</p>
        </div>
        <div className="stat-icon-wrapper">
          <div className="stat-icon">🔥</div>
          <p className="stat-title">Tendencias Diarias</p>
        </div>
      </div>
    </div>
  );
}
