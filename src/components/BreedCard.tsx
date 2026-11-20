import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchMainBreedImage } from '../api/dogApi'
import { findCustomBreed } from '../customBreeds'
import { useFavorites } from '../useFavorites'
import './BreedCard.css'

interface BreedCardProps {
  breedName: string
}

type ImageState =
  | { breedName: string; status: 'loading' }
  | { breedName: string; status: 'loaded'; url: string }
  | { breedName: string; status: 'error' }

interface ImageRequest {
  breedName: string
  promise: Promise<string>
}

export function BreedCard({ breedName }: BreedCardProps) {
  const { favoriteBreedNames, toggleFavorite } = useFavorites()
  const isFavorite = favoriteBreedNames.includes(breedName)
  const customBreed = findCustomBreed(breedName)
  const [imageState, setImageState] = useState<ImageState>({ breedName, status: 'loading' })
  const requestRef = useRef<ImageRequest | null>(null)
  const visibleImageState: ImageState =
    customBreed && imageState.breedName === breedName && imageState.status === 'error'
      ? imageState
      : customBreed
        ? { breedName, status: 'loaded', url: customBreed.image }
        : imageState.breedName === breedName
          ? imageState
          : { breedName, status: 'loading' }

  useEffect(() => {
    if (customBreed) {
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
    <article className="breed-card" aria-labelledby={`breed-card-${breedName}`}>
      <Link
        className="breed-card__details"
        to={`/breed/${encodeURIComponent(breedName)}`}
        aria-label={`View ${breedName} breed details`}
      >
        <div className="breed-card__image-frame" aria-busy={visibleImageState.status === 'loading'}>
          {visibleImageState.status === 'loading' && (
            <p className="breed-card__image-message" role="status">
              Loading {breedName} image…
            </p>
          )}
          {visibleImageState.status === 'error' && (
            <div
              className="breed-card__image-message"
              role="img"
              aria-label={`Image unavailable for ${breedName}`}
            >
              Image unavailable
            </div>
          )}
          {visibleImageState.status === 'loaded' && (
            <img
              className="breed-card__image"
              src={visibleImageState.url}
              alt={`${breedName} dog`}
              onError={() => setImageState({ breedName, status: 'error' })}
            />
          )}
        </div>
        <h3 className="breed-card__name" id={`breed-card-${breedName}`}>
          {breedName}
        </h3>
      </Link>
      <button
        className="breed-card__favorite"
        type="button"
        aria-label={
          isFavorite
            ? `Remove ${breedName} from favorites`
            : `Add ${breedName} to favorites`
        }
        aria-pressed={isFavorite}
        onClick={() => toggleFavorite(breedName)}
      >
        <span aria-hidden="true">{isFavorite ? '♥' : '♡'}</span>
      </button>
    </article>
  )
}
