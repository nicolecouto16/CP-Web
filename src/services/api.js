const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export async function buscarConteudos(termo) {
  const resposta = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(termo)}`
  );

  if (!resposta.ok) {
    throw new Error("Erro ao buscar conteúdos.");
  }

  const dados = await resposta.json();

  return dados.results.filter(
    (item) =>
      item.media_type === "movie" ||
      item.media_type === "tv"
  );
}

export async function buscarFilme(id) {
  const resposta = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`
  );

  if (!resposta.ok) {
    throw new Error("Erro ao buscar filme.");
  }

  return resposta.json();
}

export async function buscarSerie(id) {
  const resposta = await fetch(
    `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=pt-BR`
  );

  if (!resposta.ok) {
    throw new Error("Erro ao buscar série.");
  }

  return resposta.json();
}