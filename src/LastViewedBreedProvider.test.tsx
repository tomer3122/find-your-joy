// @vitest-environment jsdom

import { cleanup, render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { afterEach, describe, expect, it } from 'vitest'
import { LastViewedBreedProvider } from './LastViewedBreedProvider'
import { useLastViewedBreed } from './useLastViewedBreed'

const LAST_VIEWED_BREED_STORAGE_KEY = 'find-your-joy:last-viewed-breed'

function LastViewedBreedProbe(): ReactElement {
  const { lastViewedBreedName } = useLastViewedBreed()

  return <p role="status">{lastViewedBreedName ?? 'No viewed breed'}</p>
}

describe('LastViewedBreedProvider', () => {
  afterEach(() => {
    cleanup()
    window.localStorage.clear()
  })

  it('restores the last viewed breed from localStorage', () => {
    window.localStorage.setItem(LAST_VIEWED_BREED_STORAGE_KEY, 'joy')

    render(
      <LastViewedBreedProvider>
        <LastViewedBreedProbe />
      </LastViewedBreedProvider>,
    )

    expect(screen.getByRole('status').textContent).toBe('joy')
  })
})
