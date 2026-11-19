import { useContext } from 'react'
import {
  LastViewedBreedContext,
  type LastViewedBreedContextValue,
} from './LastViewedBreedContext'

export function useLastViewedBreed(): LastViewedBreedContextValue {
  const context = useContext(LastViewedBreedContext)

  if (context === undefined) {
    throw new Error('useLastViewedBreed must be used within a LastViewedBreedProvider.')
  }

  return context
}
