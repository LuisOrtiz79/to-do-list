import Button from './Button';
import logo from '../assets/img-logo_480.png'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="info-nav">
        <div className="button-nav">

          <button className="button-img">
            <img src={logo} alt="Logo" className="img-logo" />
          </button>
        </div>

        <div className="text-nav">
          <span className="text-xl">
            To do App
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;