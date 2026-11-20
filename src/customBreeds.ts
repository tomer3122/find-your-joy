import joyImage from './assets/joy.jpeg'

export interface CustomBreedEntry {
  name: string
  image: string
}

export const CUSTOM_BREEDS: readonly CustomBreedEntry[] = [{ name: 'Joy', image: joyImage }]

export function findCustomBreed(breedName: string): CustomBreedEntry | undefined {
  return CUSTOM_BREEDS.find(
    (customBreed) => customBreed.name.toLowerCase() === breedName.toLowerCase(),
  )
}
