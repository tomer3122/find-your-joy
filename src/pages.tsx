import { useParams } from 'react-router-dom'
import { AboutSection } from './components/AboutSection'

export function HomePage() {
  return (
    <main>
      <AboutSection />
    </main>
  )
}

export function BreedDetailPage() {
  const { breedName } = useParams<'breedName'>()

  return (
    <main>
      <h1>Breed details</h1>
      <p>Breed: {breedName ?? ''}</p>
    </main>
  )
}

export function FavoritesPage() {
  return (
    <main>
      <h1>Favorites</h1>
    </main>
  )
}
