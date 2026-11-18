import { useContext } from 'react'
import { FavoritesContext, type FavoritesContextValue } from './FavoritesContext'

export function useFavorites(): FavoritesContextValue {
  const context = useContext(FavoritesContext)

  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider.')
  }

  return context
}
