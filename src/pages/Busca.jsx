import { useState } from "react";
import { Search } from "lucide-react";
import MovieCard from "../components/MovieCard";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Busca() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);

  async function pesquisar(event) {
    event.preventDefault();

    if (!searchTerm.trim()) {
      return;
    }

    try {
      setLoading(true);
      setErro(false);

      const resposta = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(searchTerm)}`
      );

      if (!resposta.ok) {
        throw new Error("Erro na API");
      }

      const dados = await resposta.json();

      const filtrados = dados.results.filter(
        (item) =>
          item.media_type === "movie" ||
          item.media_type === "tv"
      );

      setResults(filtrados);
    } catch {
      setErro(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="content-page">
      <div className="search-header">
        <p className="page-tag">PESQUISA</p>

        <h1>Encontre o que assistir.</h1>

        <p>
          Pesquise filmes e séries sem precisar navegar
          por páginas cheias de spoilers.
        </p>
      </div>

      <form
        className="search-form"
        onSubmit={pesquisar}
      >
        <div className="search-input">
          <Search size={20} />

          <input
            type="text"
            placeholder="Digite o nome de um filme ou série..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>

        <button type="submit">
          Pesquisar
        </button>
      </form>

      {loading && (
        <p className="status-message">
          Procurando...
        </p>
      )}

      {erro && (
        <p className="status-message">
          Não foi possível realizar a pesquisa.
        </p>
      )}

      {!loading && !erro && results.length === 0 && (
        <div className="empty-search">
          <Search size={40} />
          <h2>Comece sua pesquisa</h2>
          <p>
            Digite o nome de um filme ou série acima.
          </p>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div className="movie-grid">
          {results.map((filme) => (
            <MovieCard
              key={`${filme.media_type}-${filme.id}`}
              filme={filme}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Busca;