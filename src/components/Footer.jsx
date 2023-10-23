import { NavMenu } from "./Navbar"
import { socials } from "../../data"

function Footer() {
  return (
    <footer>
      <div>
        <img src="/images/logo.svg" alt="loopstudios" className="logo" />
        {<NavMenu />}
      </div>

      <div>
        <ul className="socials">
          {socials.map((social, i) => (
            <li key={i}>
              <a href="">
                <img src={`/images/icon-${social}.svg`} alt={social} />
              </a>
              <div className="custom-border social-border"></div>
            </li>
          ))}
        </ul>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
