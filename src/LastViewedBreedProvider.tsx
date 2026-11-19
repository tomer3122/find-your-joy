import { useCallback, useState, type PropsWithChildren } from 'react'
import { LastViewedBreedContext } from './LastViewedBreedContext'

const LAST_VIEWED_BREED_STORAGE_KEY = 'find-your-joy:last-viewed-breed'

function readLastViewedBreedName(): string | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const storedBreedName = window.localStorage.getItem(LAST_VIEWED_BREED_STORAGE_KEY)
    return storedBreedName && storedBreedName.trim() ? storedBreedName : null
  } catch {
    return null
  }
}

export function LastViewedBreedProvider({ children }: PropsWithChildren) {
  const [lastViewedBreedName, setLastViewedBreedName] = useState(readLastViewedBreedName)

  const setLastViewedBreed = useCallback((breedName: string) => {
    if (!breedName.trim()) {
      return
    }

    setLastViewedBreedName(breedName)

    if (typeof window === 'undefined') {
      return
    }

    try {
      window.localStorage.setItem(LAST_VIEWED_BREED_STORAGE_KEY, breedName)
    } catch {
      // Keep the last viewed breed reactive for this session if storage is unavailable.
    }
  }, [])

  return (
    <LastViewedBreedContext.Provider value={{ lastViewedBreedName, setLastViewedBreed }}>
      {children}
    </LastViewedBreedContext.Provider>
  )
}
