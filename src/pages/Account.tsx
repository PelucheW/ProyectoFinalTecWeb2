import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import "./Account.css"; 

export default function Account() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    document.title = "Mi Cuenta | MOVIEGO";
  }, []);

  return (
    <div className="home-container">
      <div className="movies-header">
        <h2>👤 Mi Cuenta</h2>
        <p>Información personal y actividad de tu perfil</p>
      </div>

      <div className="account-grid">

        <div className="profile-card-large">
          <h3 className="account-name">{user.name}</h3>
          <p className="account-role">{user.role}</p>
          <p className="account-email">{user.email}</p>
        </div>

        <div className="content-card">
          <h3 className="activity-title">📊 Actividad Reciente</h3>
          <ul className="todo-list">
            <li> Visto: Interstellar (Hace 2 días)</li>
            <li>⭐ Calificado: Dune 2 - 9.0/10</li>
            <li> Añadido a favoritos: Batman (Hoy)</li>
            <li> Boleto comprado: Deadpool (Próximamente)</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
