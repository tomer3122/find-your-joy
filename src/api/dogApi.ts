const DOG_CEO_API_BASE_URL = 'https://dog.ceo/api'

export interface MainBreed {
  name: string
  subBreeds: string[]
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isBreedList(value: unknown): value is Record<string, string[]> {
  return (
    isRecord(value) &&
    Object.values(value).every(
      (subBreeds) =>
        Array.isArray(subBreeds) && subBreeds.every((subBreed) => typeof subBreed === 'string'),
    )
  )
}

async function fetchJson(url: string, resource: string): Promise<unknown> {
  let response: Response

  try {
    response = await fetch(url)
  } catch (error) {
    const detail = error instanceof Error ? ` ${error.message}` : ''
    throw new Error(`Network error while fetching ${resource} from Dog CEO API.${detail}`, {
      cause: error,
    })
  }

  if (!response.ok) {
    throw new Error(
      `Dog CEO API request for ${resource} failed with HTTP ${response.status} ${response.statusText}.`,
    )
  }

  try {
    const payload: unknown = await response.json()
    return payload
  } catch {
    throw new Error(`Dog CEO API returned invalid JSON while fetching ${resource}.`)
  }
}

function readApiMessage<T>(
  payload: unknown,
  resource: string,
  isMessage: (value: unknown) => value is T,
): T {
  if (!isRecord(payload)) {
    throw new Error(`Dog CEO API returned an invalid response while fetching ${resource}.`)
  }

  if (payload.status !== 'success') {
    const status = typeof payload.status === 'string' ? payload.status : 'unknown status'
    throw new Error(`Dog CEO API returned ${status} while fetching ${resource}.`)
  }

  if (!isMessage(payload.message)) {
    throw new Error(`Dog CEO API returned invalid data while fetching ${resource}.`)
  }

  return payload.message
}

export async function fetchMainBreeds(): Promise<MainBreed[]> {
  const resource = 'the breed list'
  const payload = await fetchJson(`${DOG_CEO_API_BASE_URL}/breeds/list/all`, resource)
  const breedList = readApiMessage(payload, resource, isBreedList)

  return Object.entries(breedList)
    .map(([name, subBreeds]) => ({ name, subBreeds }))
    .sort((left, right) => left.name.localeCompare(right.name, 'en'))
}

export async function fetchMainBreedImage(mainBreed: string): Promise<string> {
  const resource = `an image for ${mainBreed}`
  const encodedBreed = encodeURIComponent(mainBreed)
  const payload = await fetchJson(
    `${DOG_CEO_API_BASE_URL}/breed/${encodedBreed}/images/random`,
    resource,
  )
  return readApiMessage(
    payload,
    resource,
    (value): value is string => typeof value === 'string',
  )
}
