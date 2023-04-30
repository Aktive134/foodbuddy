import { images } from "../../constant"
import './Navbar.css'

function Navbar() {
  return (
    <header className="header">
        <img src={images.foodbuddy} className="header__logo" alt="foodbuddy logo" />
        <nav className="header__nav_main">Nav</nav>
    </header>
  )
}

export default Navbar