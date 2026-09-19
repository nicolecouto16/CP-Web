import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          <p className="hero-tag">ANTESPOILER</p>

          <h1>
            Descubra o que assistir.
            <br />
            Sem descobrir o final.
          </h1>

          <p>
            Pesquise filmes e séries, organize sua lista
            e proteja-se de spoilers.
          </p>

          <Link to="/filmes" className="hero-button">
            Explorar filmes
          </Link>
        </div>
      </div>

      <section className="home-info">
        <h2>Assista no seu ritmo.</h2>

        <p>
          Encontre informações sobre filmes e séries
          sem precisar navegar por páginas cheias de spoilers.
        </p>

        <div className="home-cards">
          <div>
            <span>01</span>
            <h3>Pesquise</h3>
            <p>Encontre filmes e séries pelo nome.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Proteja-se</h3>
            <p>Informações sensíveis ficam protegidas.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Organize</h3>
            <p>Monte sua própria lista de conteúdos.</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;