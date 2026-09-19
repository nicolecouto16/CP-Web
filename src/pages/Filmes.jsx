import { useEffect, useState } from "react";
import { Film } from "lucide-react";
import MovieCard from "../components/MovieCard";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregarFilmes() {
      try {
        setLoading(true);
        setErro(false);

        const resposta = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
        );

        if (!resposta.ok) {
          throw new Error("Erro na API");
        }

        const dados = await resposta.json();

        setFilmes(dados.results);
      } catch  {
        setErro(true);
      } finally {
        setLoading(false);
      }
    }

    carregarFilmes();
  }, []);

  return (
    <section className="content-page">
      <div className="page-title">
        <Film size={30} />

        <div>
          <p className="page-tag">CATÁLOGO</p>
          <h1>Filmes</h1>
          <p>
            Encontre seu próximo filme sem cair em spoilers.
          </p>
        </div>
      </div>

      {loading && (
        <p className="status-message">
          Carregando filmes...
        </p>
      )}

      {erro && (
        <p className="status-message">
          Não foi possível carregar os filmes.
        </p>
      )}

      {!loading && !erro && (
        <div className="movie-grid">
          {filmes.map((filme) => (
            <MovieCard
              key={filme.id}
              filme={filme}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Filmes;