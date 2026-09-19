import { useState } from "react";
import { Bookmark, Trash2, Star } from "lucide-react";
import { Link } from "react-router-dom";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function MinhaLista() {
    const [minhaLista, setMinhaLista] = useState(() => {
  const listaSalva = localStorage.getItem("minhaLista");

  return listaSalva ? JSON.parse(listaSalva) : [];
});


  function remover(id) {
    const novaLista = minhaLista.filter(
      (item) => item.id !== id
    );

    setMinhaLista(novaLista);

    localStorage.setItem(
      "minhaLista",
      JSON.stringify(novaLista)
    );
  }

  return (
    <section className="content-page">
      <div className="page-title">
        <Bookmark size={30} />

        <div>
          <p className="page-tag">ORGANIZAÇÃO</p>
          <h1>Minha Lista</h1>
          <p>
            Seus filmes e séries salvos em um só lugar.
          </p>
        </div>
      </div>

      {minhaLista.length === 0 ? (
        <div className="empty-list">
          <Bookmark size={45} />

          <h2>Sua lista está vazia.</h2>

          <p>
            Adicione filmes e séries para encontrá-los
            facilmente depois.
          </p>

          <Link to="/filmes">
            Explorar filmes
          </Link>
        </div>
      ) : (
        <div className="movie-grid">
          {minhaLista.map((filme) => {
            const titulo = filme.title || filme.name;

            return (
              <article
                className="movie-card"
                key={filme.id}
              >
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

                  <div className="movie-rating">
                    <Star
                      size={16}
                      fill="currentColor"
                    />

                    <span>
                      {filme.vote_average
                        ? filme.vote_average.toFixed(1)
                        : "N/A"}
                    </span>
                  </div>

                  <Link
                    to={
                      filme.media_type === "tv"
                        ? `/serie/${filme.id}`
                        : `/filme/${filme.id}`
                    }
                    className="details-button"
                  >
                    Ver detalhes
                  </Link>

                  <button
                    className="remove-button"
                    onClick={() => remover(filme.id)}
                  >
                    <Trash2 size={16} />
                    Remover
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default MinhaLista;