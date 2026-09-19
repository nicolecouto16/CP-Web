import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Busca from "./pages/Busca";
import Filmes from "./pages/Filmes";
import Series from "./pages/Series";
import MinhaLista from "./pages/Minhalista";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/busca" element={<Busca />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series />} />
          <Route path="/minha-lista" element={<MinhaLista />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;