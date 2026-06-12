import {type Movie} from "../interfaces/Movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const LOCAL_STORAGE_KEY = "moviego_local_movies";

// Obtener películas 
const getLocalMovies = (): Movie[] => {
  const local = localStorage.getItem(LOCAL_STORAGE_KEY);
  return local ? JSON.parse(local) : [];
};

const saveLocalMovies = (movies: Movie[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies));
};

export const getAllMovies = async (): Promise<Movie[]> => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`
        );

        if(!response.ok){
            throw new Error("Error al obtener las peliculas de TMDB");
        }

        const data = await response.json();
        const tmdbMovies = data.results;
        const localMovies = getLocalMovies();

        return [...localMovies, ...tmdbMovies];
    } catch(error) {
        console.error(error);
        return getLocalMovies();
    }
}

export const getImageUrl = (path: string) => {
  if (!path) return "https://via.placeholder.com/500x750?text=No+Image";
  if (path.startsWith("http")) return path; 
  return `https://image.tmdb.org/t/p/w500${path}`;
};

export const getMovieById = async (id: string | number): Promise<Movie> => {
  const localMovies = getLocalMovies();
  const foundLocal = localMovies.find(m => String(m.id) === String(id));
  
  if (foundLocal) return foundLocal;

  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES`
    );

    if (!response.ok) {
      throw new Error("Error al obtener los detalles de la película");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createMovie = (movie: Movie) => {
  const localMovies = getLocalMovies();
  const newMovie = { ...movie, id: Date.now() }; 
  saveLocalMovies([newMovie, ...localMovies]);
  return newMovie;
};

export const updateMovie = (id: string | number, updatedMovie: Movie) => {
  const localMovies = getLocalMovies();
  const index = localMovies.findIndex(m => String(m.id) === String(id));
  
  if (index !== -1) {
    localMovies[index] = { ...updatedMovie, id };
    saveLocalMovies(localMovies);
  } else {
    createMovie(updatedMovie);
  }
};

// ELIMINAR
export const deleteMovie = (id: string | number) => {
  const localMovies = getLocalMovies();
  const filtered = localMovies.filter(m => String(m.id) !== String(id));
  saveLocalMovies(filtered);
};