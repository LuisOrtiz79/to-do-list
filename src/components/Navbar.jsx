import logo from '../assets/img-logo_480.png';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="info-nav">
        <div className="button-nav">

        <button className="button-img">
          <a href='./'>
            <img src={logo} alt="Logo" className="img-logo" />
            </a>
          </button>
        </div>

        <div className="text-nav">
          <span className="text-xl">
            To-Do List
          </span>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;