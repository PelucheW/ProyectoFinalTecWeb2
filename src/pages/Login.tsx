import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Login.css"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Usuario"); 
  const [error, setError] = useState("");

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Iniciar Sesión | MOVIEGO";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email.trim() === "" || password.trim() === "") {
      setError("Todos los campos son obligatorios");
      return;
    }

    login(email, role);
    
    // Redirección condicional según rol
    if (role === "Administrador") {
      navigate("/"); // Dashboard
    } else {
      navigate("/inicio"); // Inicio para usuarios normales
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        
        <h2 className="login-title">
           MOVIE<span>GO</span>
        </h2>

        {error && <p className="msg-error">{error}</p>}

        <form onSubmit={handleSubmit} className="login-form">
          
          <div>
            <label className="form-label">Correo Electrónico</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label">Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label">Rol (Para pruebas)</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              className="form-input role-select"
            >
              <option value="Usuario">Usuario Normal</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Iniciar Sesión
          </button>

        </form>
      </div>
    </div>
  );
}