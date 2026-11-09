import { Link, useParams } from 'react-router-dom'

export function HomePage() {
  return (
    <main>
      <h1>Find Your Joy</h1>
      <nav aria-label="Page navigation">
        <ul>
          <li><Link to="/breed/poodle">Breed detail</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </nav>
    </main>
  )
}

export function BreedDetailPage() {
  const { breedName } = useParams<'breedName'>()

  return (
    <main>
      <h1>Breed details</h1>
      <p>Breed: {breedName ?? ''}</p>
      <nav aria-label="Page navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </nav>
    </main>
  )
}

export function FavoritesPage() {
  return (
    <main>
      <h1>Favorites</h1>
      <nav aria-label="Page navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/breed/poodle">Breed detail</Link></li>
        </ul>
      </nav>
    </main>
  )
}
