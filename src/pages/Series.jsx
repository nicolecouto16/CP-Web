import { useEffect, useState } from "react";
import { Tv } from "lucide-react";
import MovieCard from "../components/MovieCard";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Series() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregarSeries() {
      try {
        setLoading(true);
        setErro(false);

        const resposta = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=pt-BR&page=1`
        );

        if (!resposta.ok) {
          throw new Error("Erro na API");
        }

        const dados = await resposta.json();

        const resultados = dados.results.map((serie) => ({
          ...serie,
          media_type: "tv"
        }));

        setSeries(resultados);
      } catch {
        setErro(true);
      } finally {
        setLoading(false);
      }
    }

    carregarSeries();
  }, []);

  return (
    <section className="content-page">
      <div className="page-title">
        <Tv size={30} />

        <div>
          <p className="page-tag">CATÁLOGO</p>
          <h1>Séries</h1>
          <p>
            Descubra séries para acompanhar sem spoilers.
          </p>
        </div>
      </div>

      {loading && (
        <p className="status-message">
          Carregando séries...
        </p>
      )}

      {erro && (
        <p className="status-message">
          Não foi possível carregar as séries.
        </p>
      )}

      {!loading && !erro && (
        <div className="movie-grid">
          {series.map((serie) => (
            <MovieCard
              key={serie.id}
              filme={serie}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Series;