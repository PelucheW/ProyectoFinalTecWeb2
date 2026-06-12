import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import "./Home.css"; 

export default function Home() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    document.title = "Dashboard | MOVIEGO";
  }, []);

  const stats = [
    { title: "Películas Activas", value: "1,204" },
    { title: "Usuarios Registrados", value: "8,530" },
    { title: "Boletos Vendidos", value: "45.2K" },
    { title: "Ingresos (Mes)", value: "$124,000" }
  ];

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1 className="welcome-title">
          Hola, <span>{user.name}</span> 
        </h1>
        <p className="welcome-subtitle">
          Bienvenido a tu panel de control como <strong>{user.role}</strong>. Aquí tienes el resumen de hoy.
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-info">
              <p className="stat-title">{stat.title}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="content-card">
          <h3>Tareas Pendientes</h3>
          <ul className="todo-list">
            <li>Revisar sinopsis de "Dune 2"</li>
            <li>Actualizar pósters de estrenos de esta semana</li>
            <li>Dar de baja películas antiguas</li>
          </ul>
        </div>

        <div className="content-card">
          <h3> Próximos Estrenos</h3>
          <ul className="todo-list">
            <li>Deadpool & Wolverine - <span>25 Jul</span></li>
            <li>Gladiador 2 - <span>15 Nov</span></li>
            <li>Mufasa: El Rey León - <span>20 Dic</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}