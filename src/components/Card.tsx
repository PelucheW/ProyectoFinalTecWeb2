import { getImageUrl } from "../services/movieService";
import { type Movie } from "../interfaces/Movie";
import { useNavigate } from "react-router-dom";

interface CardProps {
  movie: Movie;
}

export default function Card({ movie }: CardProps) {
  const navigate = useNavigate();

  return (
    <div 
      className="movie-card"
      onClick={() => navigate(`/movie/${movie.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/movie/${movie.id}`)}
    >      
      <img 
        src={getImageUrl(movie.poster_path)} 
        alt={`Póster de la película ${movie.title}`} 
        className="movie-poster"
        loading="lazy"
      />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          <span className="movie-date">{movie.release_date?.substring(0, 4)}</span>
          <span className="movie-rating" aria-label={`Calificación: ${movie.vote_average}`}>
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
