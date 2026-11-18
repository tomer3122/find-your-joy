import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMainBreeds, type MainBreed } from './api/dogApi'
import { AboutSection } from './components/AboutSection'
import { BreedCard } from './components/BreedCard'
import { useFavorites } from './useFavorites'

export function HomePage() {
  const [breeds, setBreeds] = useState<MainBreed[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const requestRef = useRef<Promise<MainBreed[]> | null>(null)

  const normalizedSearchQuery = searchQuery.trim().toLowerCase()
  const filteredBreeds = (breeds ?? []).filter((breed) =>
    breed.name.toLowerCase().includes(normalizedSearchQuery),
  )
  const matchingBreedNames = new Set(filteredBreeds.map((breed) => breed.name))

  useEffect(() => {
    let isActive = true
    requestRef.current ??= fetchMainBreeds()

    void requestRef.current
      .then((loadedBreeds) => {
        if (isActive) {
          setBreeds(loadedBreeds)
        }
      })
      .catch((fetchError: unknown) => {
        if (isActive) {
          setError(
            fetchError instanceof Error ? fetchError.message : 'Unable to load dog breeds.',
          )
        }
      })
      .finally(() => {
        if (isActive) {
          setIsLoading(false)
        }
      })

    return () => {
      isActive = false
    }
  }, [])

  return (
    <main>
      <AboutSection />
      <section aria-labelledby="main-breeds-heading">
        <h2 id="main-breeds-heading">Main breeds</h2>
        {isLoading && <p role="status">Loading breeds…</p>}
        {!isLoading && error && <p role="alert">Unable to load breeds: {error}</p>}
        {!isLoading && !error && breeds && (
          <>
            <label className="breed-gallery__search-label" htmlFor="breed-search">
              Search breeds
            </label>
            <input
              className="breed-gallery__search-input"
              id="breed-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            {filteredBreeds.length === 0 ? (
              <p role="status">
                {normalizedSearchQuery
                  ? `No breeds match “${searchQuery}”.`
                  : 'No breeds available.'}
              </p>
            ) : (
              <p role="status">
                {normalizedSearchQuery
                  ? `${filteredBreeds.length} breeds match your search.`
                  : `${breeds.length} breeds loaded.`}
              </p>
            )}
            <ul className="breed-gallery__grid">
              {breeds.map((breed) => (
                <li key={breed.name} hidden={!matchingBreedNames.has(breed.name)}>
                  <BreedCard breedName={breed.name} />
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
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
  const { favoriteBreedNames } = useFavorites()

  return (
    <main>
      <section aria-labelledby="favorites-heading">
        <h1 id="favorites-heading">Favorites</h1>
        {favoriteBreedNames.length === 0 ? (
          <p role="status">You haven’t saved any breeds yet.</p>
        ) : (
          <ul className="breed-gallery__grid">
            {favoriteBreedNames.map((breedName) => (
              <li key={breedName}>
                <BreedCard breedName={breedName} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
