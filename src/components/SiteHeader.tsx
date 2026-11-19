import { Link } from 'react-router-dom'
import logo from '../assets/find-your-joy-logo.png'
import { useLastViewedBreed } from '../useLastViewedBreed'
import './SiteHeader.css'

export function SiteHeader() {
  const { lastViewedBreedName } = useLastViewedBreed()

  return (
    <header className="site-header">
      <Link to="/" aria-label="Go to home page">
        <img className="site-header__logo" src={logo} alt="Find Your Joy logo" />
      </Link>
      <nav className="site-header__nav" aria-label="Page navigation">
        <ul>
          {lastViewedBreedName && (
            <li>
              <Link to={`/breed/${encodeURIComponent(lastViewedBreedName)}`}>
                Last viewed breed
              </Link>
            </li>
          )}
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </nav>
    </header>
  )
}
