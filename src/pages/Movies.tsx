import { useEffect, useState } from "react";
// Importamos nuestras herramientas recién creadas
import { getAllMovies,} from "../services/movieService";
import { type Movie } from "../interfaces/Movie";
import "./Movies.css"; 
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Card from "../components/Card";

export default function Movies() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")

    useEffect(() => {
      document.title = "Películas Populares | MOVIEGO";
      loadMovies();
    }, []);

    const loadMovies = async () => {
        try{
            setLoading(true);
            const data = await getAllMovies();
            setMovies(data);
        } catch (err){
            setError("No se pudieron cargar las peliculas.");
        } finally{
            setLoading(false);
        }
    };

    return (
     <div className="movies-container">
      <div className="movies-header">
      <div>
          <h2>Películas Populares</h2>
          <p>Explora lo más visto del momento</p>
        </div>
        
        {user.role === "Administrador" && (
          <button 
            onClick={() => navigate("/movie/new")}
            className="btn-add-movie"
          >
            + Agregar Película
          </button>
        )}
      </div>

      {loading && <p className="loading-text">Cargando la magia del cine...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="movies-grid">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}