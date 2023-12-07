import Button from './Button';
import logo from '../assets/img-logo_480.png'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Nav2">
        <div className="Nav3">

          <button className="button-img">
            <img src={logo} alt="Logo" className="img-logo" />
          </button>
        </div>

        <div className="Nav4">
        <span className="text-xl">
            To do App
          </span>
        </div>
      </div>
                {/* <nav>
                  <p>To do List</p>
                  
                  <Button />
                  <Button />        
                </nav> */}
    </nav>
  )
}

export default Navbar;