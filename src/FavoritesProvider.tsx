import { useCallback, useEffect, useState, type PropsWithChildren } from 'react'
import { FavoritesContext } from './FavoritesContext'

const FAVORITES_STORAGE_KEY = 'find-your-joy:favorites'

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item: unknown) => typeof item === 'string')
}

function readFavoriteBreedNames(): string[] {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const storedFavorites = window.localStorage.getItem(FAVORITES_STORAGE_KEY)
    if (storedFavorites === null) {
      return []
    }

    const parsedFavorites: unknown = JSON.parse(storedFavorites)
    return isStringArray(parsedFavorites) ? Array.from(new Set(parsedFavorites)) : []
  } catch {
    return []
  }
}

export function FavoritesProvider({ children }: PropsWithChildren) {
  const [favoriteBreedNames, setFavoriteBreedNames] = useState(readFavoriteBreedNames)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    try {
      window.localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(favoriteBreedNames),
      )
    } catch {
      // Favorites still work for the current session when browser storage is unavailable.
    }
  }, [favoriteBreedNames])

  const toggleFavorite = useCallback((breedName: string) => {
    setFavoriteBreedNames((currentFavorites) =>
      currentFavorites.includes(breedName)
        ? currentFavorites.filter((favoriteName) => favoriteName !== breedName)
        : [...currentFavorites, breedName],
    )
  }, [])

  return (
    <FavoritesContext.Provider value={{ favoriteBreedNames, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}
