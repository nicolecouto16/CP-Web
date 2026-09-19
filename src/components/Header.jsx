import { Link } from "react-router-dom";
import { Search } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Antes<span>Spoiler</span>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/filmes">Filmes</Link>
        <Link to="/series">Séries</Link>
        <Link to="/busca">
          <Search size={14} />
          Busca
        </Link>
        <Link to="/minha-lista">
          Minha Lista
        </Link>
      </nav>
    </header>
  );
}

export default Header;