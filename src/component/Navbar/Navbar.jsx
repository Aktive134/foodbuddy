import { images } from "../../constant"
import './Navbar.css'

function Navbar() {
  return (
    <header className="header">
        <img src={images.foodbuddy} className="header__logo" alt="foodbuddy logo" />
        <nav className="header__nav_main">
            <ul className="header__nav_list">
                <li><a className="header__nav_link" href="#">Section 1</a></li>
                <li><a className="header__nav_link" href="#">Section 2</a></li>
                <li><a className="header__nav_link" href="#">Section 3</a></li>
                <li><a className="header__nav_link" href="#">Section 4</a></li>
                <li><a className="header__nav_link nav_cta" href="#">Section 5</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar