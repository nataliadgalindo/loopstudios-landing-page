import { useState } from "react"
import { navLinks } from "../../data"

export function NavMenu() {
  return (
    <ul className="nav-menu">
      {navLinks.map((link, i) => (
        <li key={i}>
          <a href="">{link}</a>
          <div className="custom-border"></div>
        </li>
      ))}
    </ul>
  )
}

function Navbar() {
  const [showNav, setShowNav] = useState(false)

  return (
    <nav>
      <img src="/images/logo.svg" alt="loopstudios" className="logo" />

      <div className="desktop-menu">
        <NavMenu />
      </div>

      <img
        src={`/images/icon-${showNav ? "close" : "hamburger"}.svg`}
        alt={`${showNav ? "close" : "open"} mobile menu`}
        className="hamburger"
        onClick={() => setShowNav((prev) => !prev)}
      />

      {showNav && (
        <div className="mobile-menu">
          <NavMenu />
        </div>
      )}
    </nav>
  )
}

export default Navbar
