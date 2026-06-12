import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login"; 
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute"; 

import { routes } from "./routes/routes";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              {routes.map((route, index) => {
                if (route.path === "/login" || route.path === "/landing") return null; 
                
                return (
                  <Route
                    key={index}
                    index={route.path === "/"}
                    path={route.path === "/" ? undefined : route.path.slice(1)}
                    element={route.element}
                  />
                );
              })}
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}