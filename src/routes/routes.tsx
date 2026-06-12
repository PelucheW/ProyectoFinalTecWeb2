import Home from "../pages/Home";
import Start from "../pages/Start";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import MovieForm from "../pages/MovieForm";
import Login from "../pages/Login";
import Landing from "../pages/Landing";
import Settings from "../pages/Settings";
import Account from "../pages/Account";
import Showtime from "../pages/Showtime";

export const routes = [
  {
    name: "Bienvenida",
    path: "/landing",
    element: <Landing />
  },
  {
    name: "Inicio",
    path: "/inicio",
    element: <Start />
  },
  {
    name: "Dashboard",
    path: "/",
    element: <Home />
  },
  {
    name: "Films",
    path: "/movies",
    element: <Movies />
  },
  {
    name: "Showtime",
    path: "/showtime",
    element: <Showtime />
  },
  {
    name: "Detalles",
    path: "/movie/:id",
    element: <MovieDetails />
  },
  {
    name: "Nueva Película",
    path: "/movie/new",
    element: <MovieForm />
  },
  {
    name: "Editar Película",
    path: "/movie/edit/:id",
    element: <MovieForm />
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />
  },
  {
    name: "Settings",
    path: "/settings",
    element: <Settings />
  },
  {
    name: "Account",
    path: "/account",
    element: <Account />
  }
];
