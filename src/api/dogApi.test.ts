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

  it('rejects with a clear error when Dog CEO reports failure', async () => {
    const response = new Response(
      JSON.stringify({ status: 'error', message: 'Breed list unavailable' }),
      { headers: { 'Content-Type': 'application/json' } },
    )
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(response)
    vi.stubGlobal('fetch', fetchMock)

    await expect(fetchMainBreeds()).rejects.toThrow(
      'Dog CEO API returned error while fetching the breed list.',
    )
  })
})
