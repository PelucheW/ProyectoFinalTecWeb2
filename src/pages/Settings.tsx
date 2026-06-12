import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import "./Settings.css"; 

export default function Settings() {
  const { user } = useContext(UserContext);
  
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("Español");

  useEffect(() => {
    document.title = "Configuración | MOVIEGO";
  }, []);

  const handleSave = () => {
    alert("Configuración guardada con éxito (Simulado)");
  };

  return (
    <div className="movies-container max-width-800">
      <div className="movies-header">
        <h2> Configuración</h2>
        <p>Gestiona tus preferencias y ajustes de cuenta</p>
      </div>

      <div className="settings-list">
        
        {/* Sección Perfil */}
        <section className="settings-section">
          <h3 className="settings-section-title">Perfil de Usuario</h3>
          <div className="settings-profile-info">
            <div className="settings-profile-text">
              <p>{user.name}</p>
              <p className="settings-profile-email">{user.email}</p>
              <span className="settings-role-tag">
                Rol: {user.role}
              </span>
            </div>
          </div>
        </section>

        {/* Sección Preferencias */}
        <section className="settings-section">
          <h3 className="settings-section-title">Preferencias de la App</h3>
          
          <div className="settings-options">
            <div className="settings-option-item">
              <label>Notificaciones por correo</label>
              <input 
                type="checkbox" 
                checked={notifications} 
                onChange={() => setNotifications(!notifications)}
                className="settings-checkbox"
              />
            </div>

            <div className="settings-option-item">
              <label>Modo Oscuro (Siempre activo)</label>
              <input 
                type="checkbox" 
                checked={darkMode} 
                disabled
                className="settings-checkbox"
              />
            </div>

            <div className="settings-select-group">
              <label>Idioma de la Interfaz</label>
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="settings-select"
              >
                <option value="Español">Español</option>
                <option value="English">English</option>
                <option value="Français">Français</option>
              </select>
            </div>
          </div>
        </section>

        <button 
          onClick={handleSave}
          className="btn-save-settings"
        >
          Guardar Cambios
        </button>

      </div>
    </div>
  );
}
