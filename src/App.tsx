import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BreedDetailPage, FavoritesPage, HomePage } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breed/:breedName" element={<BreedDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
