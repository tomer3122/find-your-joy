import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FavoritesProvider } from './FavoritesProvider'
import { SiteHeader } from './components/SiteHeader'
import { BreedDetailPage, FavoritesPage, HomePage } from './pages'

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/breed/:breedName" element={<BreedDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App
