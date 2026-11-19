import { createContext } from 'react'

export interface LastViewedBreedContextValue {
  lastViewedBreedName: string | null
  setLastViewedBreed: (breedName: string) => void
}

export const LastViewedBreedContext =
  createContext<LastViewedBreedContextValue | undefined>(undefined)
