import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Sidebar.css";

import { useNavigate } from "react-router-dom"
 
type MenuItem = {
    name: string;
    path: string;
};

type SidebarProps = {
    menu : MenuItem[]
};

export default function Sidebar({menu}: SidebarProps){
    // Traemos los datos del usuario logueado desde tu contexto
    const { user, logout } = useContext(UserContext);
    
    const navigate = useNavigate();
    
    return(
        
        <aside className="sidebar">
            
            {/* 1. LOGO */}
            <div className="sidebar-logo">
                <h2> MOVIEGO </h2>
            </div>
            {/* 2. MENÚ DE NAVEGACIÓN */}
            <div className="sidebar-menu">
                <p className="menu-label">MENU</p>
                <ul>
                    {menu.map((item, index) => (
                        <li key={index}>
                            {/* NavLink nos permite saber si la ruta está activa */}
                        <NavLink 
                            to={item.path}
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                            >
                                {item.name}
                        </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sidebar-profile">
                <div className="profile-info">
                    <p className="profile-name">{user.name}</p>
                    <p className="profile-role">{user.role}</p>
                </div>
            </div>
                <button 
                onClick={() => {
                    logout();
                    navigate("/login");
                }}
                className="btn-logout"
                >
                    Cerrar Sesión
                </button>
                    </aside>       
                    )
                }