import { useEffect, useRef, useState } from 'react'
import { fetchMainBreedImage } from '../api/dogApi'
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
  const [imageState, setImageState] = useState<ImageState>({ breedName, status: 'loading' })
  const requestRef = useRef<ImageRequest | null>(null)
  const visibleImageState: ImageState =
    imageState.breedName === breedName ? imageState : { breedName, status: 'loading' }

  useEffect(() => {
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
  }, [breedName])

  return (
    <article className="breed-card" aria-labelledby={`breed-card-${breedName}`}>
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
    </article>
  )
}
