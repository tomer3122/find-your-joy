import { Link } from 'react-router-dom'
import logo from '../assets/find-your-joy-logo.png'
import './SiteHeader.css'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link to="/" aria-label="Go to home page">
        <img className="site-header__logo" src={logo} alt="Find Your Joy logo" />
      </Link>
      <nav className="site-header__nav" aria-label="Page navigation">
        <ul>
          <li><Link to="/breed/poodle">Breed detail</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </nav>
    </header>
  )
}
