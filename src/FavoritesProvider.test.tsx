// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { FavoritesProvider } from './FavoritesProvider'
import { useFavorites } from './useFavorites'

const FAVORITES_STORAGE_KEY = 'find-your-joy:favorites'

function FavoritesProbe() {
  const { favoriteBreedNames, toggleFavorite } = useFavorites()

  return (
    <>
      <button type="button" onClick={() => toggleFavorite('akita')}>
        Toggle akita favorite
      </button>
      <p role="status">{favoriteBreedNames.join(', ') || 'No favorites'}</p>
    </>
  )
}

describe('FavoritesProvider', () => {
  afterEach(() => {
    cleanup()
    window.localStorage.clear()
  })

  it('saves a toggled favorite to localStorage', () => {
    window.localStorage.clear()

    render(
      <FavoritesProvider>
        <FavoritesProbe />
      </FavoritesProvider>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Toggle akita favorite' }))

    expect(screen.getByRole('status').textContent).toBe('akita')
    expect(window.localStorage.getItem(FAVORITES_STORAGE_KEY)).toBe(
      JSON.stringify(['akita']),
    )
  })
})
