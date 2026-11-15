import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMainBreeds, type MainBreed } from './api/dogApi'
import { AboutSection } from './components/AboutSection'

export function HomePage() {
  const [breeds, setBreeds] = useState<MainBreed[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const requestRef = useRef<Promise<MainBreed[]> | null>(null)

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
            <p role="status">{breeds.length} breeds loaded.</p>
            <ul>
              {breeds.map((breed) => (
                <li key={breed.name}>{breed.name}</li>
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
  return (
    <main>
      <h1>Favorites</h1>
    </main>
  )
}
