import githubLogo from "../assets/githubLogo-white.png"

const Footer = () => {
  return (
    <div className="Footer">
      <a href='https://github.com/LuisOrtiz79/to-do-list.git'>
        <p><img src={githubLogo} alt="githubLogo" className="githubLogo" /> GitHub repository </p>
      </a>
    </div>
    
  )
}

export default Footer;