# Find Your Joy

Find Your Joy is a dog-breed explorer for browsing breeds, viewing breed images, and saving favorites.

## Features

- Browse the main dog breeds in alphabetical order in an image-first gallery.
- Search breeds by name with a case-insensitive partial match.
- Save and remove favorites; selections persist in browser `localStorage`.
- Open breed detail pages with an image and favorite control.
- Return to the last viewed breed from the header; the selection persists in `localStorage`.
- Explore Joy, a custom gallery entry with a bundled local image that also works in search, favorites, and details.

## Technology

Built with React, TypeScript, Vite, and React Router. Vitest runs the project tests. Main breed data and random breed images come from the [Dog CEO API](https://dog.ceo/dog-api/).

## Getting started

```sh
npm install
npm run dev
npm run lint
npm run test:run
npm run build
```

## Routes

- `/` — About section, searchable breed gallery, and Joy.
- `/favorites` — saved breeds.
- `/breed/:breedName` — details and image for a breed.

## Accessibility and responsive layout

The interface uses semantic page structure, labeled navigation and search, accessible favorite controls, and announced loading, error, and empty states. The breed gallery adapts to available screen width.

## API attribution

Breed data and API-provided dog images are provided by the public [Dog CEO Dog API](https://dog.ceo/dog-api/).
