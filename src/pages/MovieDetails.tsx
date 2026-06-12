import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById, deleteMovie, getImageUrl } from "../services/movieService";
import { UserContext } from "../context/UserContext";
import "./MovieDetails.css"; 

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDetails = async () => {
      if (id) {
        try {
          const data = await getMovieById(id);
          setMovie(data);
          document.title = `${data.title} | MOVIEGO`;
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };
    loadDetails();
  }, [id]);

  if (loading) return <h2 className="loading-msg">Cargando detalles...</h2>;
  if (!movie) return <h2 className="error-msg">Película no encontrada</h2>;

  const handleDelete = () => {
    const confirmar = window.confirm(`¿Estás seguro de que deseas eliminar "${movie.title}"?`);
    if (confirmar) {
      deleteMovie(movie.id);
      alert("Película eliminada con éxito.");
      navigate("/movies");
    }
  };

  return (
    <div className="details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="details-card">
        <img 
          src={getImageUrl(movie.poster_path)} 
          alt={movie.title} 
          className="details-poster"
        />
        
        <div className="details-info">
          <h1 className="details-title">{movie.title}</h1>
          <p className="details-meta">
            ⭐ {movie.vote_average.toFixed(1)} |  {movie.release_date}
          </p>
          <p className="details-overview">
            {movie.overview}
          </p>

          {user.role === "Administrador" && (
            <div className="details-actions">
              <button 
                className="btn-edit"
                onClick={() => navigate(`/movie/edit/${movie.id}`)} 
              >
                Edit
              </button>
              
              <button 
                className="btn-delete"
                onClick={handleDelete}
              >
                Take down
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}