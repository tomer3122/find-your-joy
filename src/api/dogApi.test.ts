import { afterEach, describe, expect, it, vi } from 'vitest'
import { fetchMainBreeds } from './dogApi'

describe('fetchMainBreeds', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns main breeds in alphabetical order', async () => {
    const response = new Response(
      JSON.stringify({
        status: 'success',
        message: {
          poodle: ['miniature', 'toy'],
          affenpinscher: [],
          beagle: [],
        },
      }),
      { headers: { 'Content-Type': 'application/json' } },
    )
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(response)
    vi.stubGlobal('fetch', fetchMock)

    await expect(fetchMainBreeds()).resolves.toEqual([
      { name: 'affenpinscher', subBreeds: [] },
      { name: 'beagle', subBreeds: [] },
      { name: 'poodle', subBreeds: ['miniature', 'toy'] },
    ])
    expect(fetchMock).toHaveBeenCalledOnce()
    expect(fetchMock).toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/all')
  })
})
