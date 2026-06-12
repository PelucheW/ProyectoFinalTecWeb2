import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById, createMovie, updateMovie } from "../services/movieService";
import "./MovieForm.css"; 

export default function MovieForm() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    overview: "",
    release_date: "",
    vote_average: "",
    poster_path: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.title = isEditing ? "Editar Película | MOVIEGO" : "Nueva Película | MOVIEGO";
    
    if (isEditing && id) {
      const loadMovie = async () => {
        try {
          const movie = await getMovieById(id);
          setFormData({
            title: movie.title,
            overview: movie.overview,
            release_date: movie.release_date,
            vote_average: String(movie.vote_average),
            poster_path: movie.poster_path
          });
        } catch (err) {
          setError("No se pudo cargar la información de la película.");
        }
      };
      loadMovie();
    }
  }, [isEditing, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.title || !formData.overview || !formData.release_date) {
      setError("Todos los campos marcados con * son obligatorios.");
      return;
    }

    if (formData.title.length < 3) {
      setError("El título debe tener al menos 3 caracteres.");
      return;
    }

    if (formData.overview.length < 10) {
      setError("La sinopsis debe ser más descriptiva (mínimo 10 caracteres).");
      return;
    }

    const rating = parseFloat(formData.vote_average);
    if (formData.vote_average && (isNaN(rating) || rating < 0 || rating > 10)) {
      setError("La calificación debe ser un número entre 0 y 10.");
      return;
    }

    const movieData = {
      ...formData,
      vote_average: rating || 0
    };

    if (isEditing && id) {
      updateMovie(id, movieData);
    } else {
      createMovie(movieData);
    }

    setSuccess(true);
    setTimeout(() => {
      navigate("/movies");
    }, 1500);
  };

  return (
    <div className="form-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="form-card">
        <h2 className="form-title">
          {isEditing ? " Editar Película" : " Agregar Nueva Película"}
        </h2>

        {error && <p className="msg-error" role="alert">{error}</p>}
        {success && <p className="msg-success" role="alert">¡Película guardada con éxito! Redirigiendo...</p>}

        <form onSubmit={handleSubmit} className="movie-form">
          
          <div>
            <label className="form-label">Título *</label>
            <input 
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={handleChange}
              className="form-input"
              placeholder="Ej: El Padrino"
            />
          </div>

          <div>
            <label className="form-label">Sinopsis *</label>
            <textarea 
              name="overview" 
              value={formData.overview} 
              onChange={handleChange} 
              rows={4}
              className="form-input textarea-resize"
              placeholder="Breve resumen de la trama..."
            />
          </div>

          <div className="form-row">
            <div className="form-col">
              <label className="form-label">Fecha de Estreno *</label>
              <input 
                type="date" 
                name="release_date" 
                value={formData.release_date} 
                onChange={handleChange}
                className="form-input date-input"
              />
            </div>
            <div className="form-col">
              <label className="form-label">Calificación (0-10)</label>
              <input 
                type="number" 
                step="0.1" 
                name="vote_average" 
                value={formData.vote_average} 
                onChange={handleChange}
                className="form-input"
                placeholder="8.5"
              />
            </div>
          </div>

          <div>
            <label className="form-label">URL del Póster / Imagen</label>
            <input 
              type="text" 
              name="poster_path" 
              value={formData.poster_path} 
              onChange={handleChange} 
              placeholder="https://images.com/poster.jpg"
              className="form-input"
            />
          </div>

          <button type="submit" className="submit-btn">
            {isEditing ? "Guardar Cambios" : "Crear Película"}
          </button>
        </form>
      </div>
    </div>
  );
}