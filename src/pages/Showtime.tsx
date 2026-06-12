import { useEffect } from "react";
import "./Showtime.css"; 

export default function Showtime() {
  useEffect(() => {
    document.title = "Cartelera y Horarios | MOVIEGO";
  }, []);

  const schedules = [
    { room: "Sala IMAX", movie: "Dune: Parte Dos", times: ["14:30", "17:45", "21:00"], type: "3D" },
    { room: "Sala 02", movie: "Spider-Man: Across the Universe", times: ["15:00", "18:15"], type: "2D" },
    { room: "Sala 03", movie: "The Batman", times: ["16:30", "20:00"], type: "Subtitulada" },
    { room: "Sala VIP", movie: "Inside Out 2", times: ["13:00", "15:30", "18:00", "20:30"], type: "Doblada" }
  ];

  return (
    <div className="movies-container">
      <div className="movies-header">
        <h2> Cartelera Semanal</h2>
        <p>Consulta los horarios de tus películas favoritas en nuestras salas</p>
      </div>

      <div className="showtime-list">
        {schedules.map((s, index) => (
          <div key={index} className="showtime-item">
            <div className="movie-main-info">
              <h3>{s.movie}</h3>
              <p className="movie-sub-info">{s.room} • <strong>{s.type}</strong></p>
            </div>

            <div className="time-slots">
              {s.times.map(time => (
                <span key={time} className="time-tag">
                  {time}
                </span>
              ))}
            </div>
            
            <button className="btn-reserve">
              Reservar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
