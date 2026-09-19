import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ filme }) {
  const titulo = filme.title || filme.name;
  const data = filme.release_date || filme.first_air_date;

  return (
    <article className="movie-card">
      {filme.poster_path ? (
        <img
          src={`${IMAGE_URL}${filme.poster_path}`}
          alt={titulo}
        />
      ) : (
        <div className="no-poster">
          Sem imagem
        </div>
      )}

      <div className="movie-card-info">
        <h3>{titulo}</h3>

        <p className="movie-date">
          {data ? data.substring(0, 4) : "Data não disponível"}
        </p>

        <div className="movie-rating">
          <Star size={16} fill="currentColor" />
          <span>
            {filme.vote_average
              ? filme.vote_average.toFixed(1)
              : "N/A"}
          </span>
        </div>

        <Link
          to={
            filme.media_type === "tv"
              ? `/series/${filme.id}`
              : `/filmes/${filme.id}`
          }
          className="details-button"
        >
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}

export default MovieCard;