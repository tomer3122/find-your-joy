import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteHeader } from './components/SiteHeader'
import { BreedDetailPage, FavoritesPage, HomePage } from './pages'

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breed/:breedName" element={<BreedDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
