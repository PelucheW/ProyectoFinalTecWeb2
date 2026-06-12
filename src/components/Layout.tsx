import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  const { user } = useContext(UserContext);

  // Definimos todos los posibles items
  const allMenuItems = [
    { name: "Inicio", path: "/inicio", role: "Usuario" },
    { name: "Dashboard", path: "/", role: "Administrador" },
    { name: "Films", path: "/movies", role: "all" },
    { name: "Showtime", path: "/showtime", role: "all" },
    { name: "Settings", path: "/settings", role: "all" },
    { name: "Account", path: "/account", role: "all" }
  ];

  // Filtramos según el rol del usuario logueado
  const menuItems = allMenuItems.filter(item => 
    item.role === "all" || item.role === user.role
  );

  return (
    <div className="container">
      <Sidebar menu={menuItems} />

      <main className="main layout-main">
        <div className="layout-content">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}