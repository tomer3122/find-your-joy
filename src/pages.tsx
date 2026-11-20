import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMainBreedImage, fetchMainBreeds, type MainBreed } from './api/dogApi'
import { AboutSection } from './components/AboutSection'
import { BreedCard } from './components/BreedCard'
import { CUSTOM_BREEDS, findCustomBreed } from './customBreeds'
import { useFavorites } from './useFavorites'
import { useLastViewedBreed } from './useLastViewedBreed'
import './pages.css'

type BreedDetailImageState =
  | { breedName: string; status: 'loading' }
  | { breedName: string; status: 'loaded'; url: string }
  | { breedName: string; status: 'error' }

interface BreedDetailImageRequest {
  breedName: string
  promise: Promise<string>
}

function titleCaseBreedName(breedName: string): string {
  return breedName
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(' ')
}

export function HomePage() {
  const [breeds, setBreeds] = useState<MainBreed[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const requestRef = useRef<Promise<MainBreed[]> | null>(null)

  const galleryBreeds = [...(breeds ?? []), ...CUSTOM_BREEDS].sort((left, right) =>
    left.name.localeCompare(right.name, 'en', { sensitivity: 'base' }),
  )
  const normalizedSearchQuery = searchQuery.trim().toLowerCase()
  const filteredBreeds = galleryBreeds.filter((breed) =>
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
                  : `${galleryBreeds.length} breeds loaded.`}
              </p>
            )}
            <ul className="breed-gallery__grid">
              {galleryBreeds.map((breed) => (
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
  const { setLastViewedBreed } = useLastViewedBreed()
  const routeBreedName = breedName ?? ''
  const customBreed = findCustomBreed(routeBreedName)
  const displayBreedName = routeBreedName
    ? titleCaseBreedName(routeBreedName)
    : 'Breed details'
  const { favoriteBreedNames, toggleFavorite } = useFavorites()
  const isFavorite = breedName !== undefined && favoriteBreedNames.includes(breedName)
  const [imageState, setImageState] = useState<BreedDetailImageState>(() =>
    routeBreedName
      ? { breedName: routeBreedName, status: 'loading' }
      : { breedName: '', status: 'error' },
  )
  const requestRef = useRef<BreedDetailImageRequest | null>(null)
  const visibleImageState: BreedDetailImageState =
    customBreed && imageState.breedName === routeBreedName && imageState.status === 'error'
      ? imageState
      : customBreed
        ? { breedName: routeBreedName, status: 'loaded', url: customBreed.image }
        : imageState.breedName === routeBreedName
      ? imageState
      : routeBreedName
        ? { breedName: routeBreedName, status: 'loading' }
        : { breedName: '', status: 'error' }

  useEffect(() => {
    if (breedName) {
      setLastViewedBreed(breedName)
    }
  }, [breedName, setLastViewedBreed])

  useEffect(() => {
    if (!breedName || customBreed) {
      return
    }

    let isActive = true
    let request = requestRef.current

    if (request === null || request.breedName !== breedName) {
      request = { breedName, promise: fetchMainBreedImage(breedName) }
      requestRef.current = request
    }

    void request.promise
      .then((url) => {
        if (isActive) {
          setImageState({ breedName, status: 'loaded', url })
        }
      })
      .catch(() => {
        if (isActive) {
          setImageState({ breedName, status: 'error' })
        }
      })

    return () => {
      isActive = false
    }
  }, [breedName, customBreed])

  return (
    <main className="breed-detail">
      <section aria-labelledby="breed-detail-heading">
        <h1 id="breed-detail-heading">{displayBreedName}</h1>
        {breedName && (
          <button
            className="breed-detail__favorite"
            type="button"
            aria-label={
              isFavorite
                ? `Remove ${displayBreedName} from favorites`
                : `Add ${displayBreedName} to favorites`
            }
            aria-pressed={isFavorite}
            onClick={() => toggleFavorite(breedName)}
          >
            <span aria-hidden="true">{isFavorite ? '♥' : '♡'}</span>
            <span>{isFavorite ? 'Saved' : 'Add to favorites'}</span>
          </button>
        )}
        {visibleImageState.status === 'loading' && (
          <p role="status">Loading an image for {displayBreedName}…</p>
        )}
        {visibleImageState.status === 'error' && (
          <p role="alert">
            {breedName
              ? `Unable to load an image for ${displayBreedName}.`
              : 'No breed was specified.'}
          </p>
        )}
        {visibleImageState.status === 'loaded' && (
          <img
            className="breed-detail__image"
            src={visibleImageState.url}
            alt={`${displayBreedName} dog`}
            onError={() => setImageState({ breedName: routeBreedName, status: 'error' })}
          />
        )}
      </section>
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
