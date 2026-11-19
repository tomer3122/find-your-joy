import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FavoritesProvider } from './FavoritesProvider'
import { LastViewedBreedProvider } from './LastViewedBreedProvider'
import { SiteHeader } from './components/SiteHeader'
import { BreedDetailPage, FavoritesPage, HomePage } from './pages'

function App() {
  return (
    <LastViewedBreedProvider>
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
    </LastViewedBreedProvider>
  )
}

export default App
