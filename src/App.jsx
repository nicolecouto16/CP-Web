import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'

import Home from './pages/Home'
import Busca from './pages/Busca'
import Filmes from './pages/Filmes'
import Series from './pages/Series'
import MinhaLista from './pages/MinhaLista'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busca" element={<Busca />} />
        <Route path="/filmes/:id" element={<Filmes />} />
        <Route path="/series/:id" element={<Series />} />
        <Route path="/minha-lista" element={<MinhaLista />} />
      </Routes>
    </MainLayout>
  )
}

export default App