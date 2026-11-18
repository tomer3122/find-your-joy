import { createContext } from 'react'

export interface FavoritesContextValue {
  favoriteBreedNames: string[]
  toggleFavorite: (breedName: string) => void
}

export const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined)
