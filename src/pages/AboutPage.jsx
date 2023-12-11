import logo from '../assets/img-logo_480.png'
import githubLogo from "../assets/githubLogo.png"
import linkedinLogo from "../assets/linkedinLogo.png"

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <h1>About Page</h1>
      <img src={logo} alt="Logo" className="img-logo-about" />
      <p> To Do List is the app that helps you keep track and organize your daily tasks.</p>
      <p>Add your to do's in the task card and click the checkmark once it's completed.</p>

      <br/>

      <h2>Developers:</h2>

      <br/>
      <div className='dev-list'>
        <div className='dev1'>
          <p><b>Luis Ortiz</b></p>
      
          <li> GitHub: <a href='https://github.com/LuisOrtiz79/'><img src={githubLogo} alt="githubLogo" className="githubLogo" /></a>
          </li>
          <li>LinkedIn: <a href='https://www.linkedin.com/in/luis-ortiz-58104a276'><img src={linkedinLogo} alt="linkedinLogo" className="linkedinLogo" /> 
          </a>
          </li>
        </div>
        

        <br/>

        <div className='dev2'>
          <p><b>Andeliz Flores</b></p>
          <li>GitHub: <img src={githubLogo} alt="githubLogo" className="githubLogo" />
          </li>
          <li>LinkedIn: <a href = "https://www.linkedin.com/in/andelizflores/"><img src={linkedinLogo} alt="linkedinLogo" className="linkedinLogo" /> 
          </a>
          </li>
        </div>
        

        <br/>

        <div className='dev3'>
          <p><b>Brandon Garcia</b></p>
          <li>GitHub: <a href = "https://www.linkedin.com/in/brandon-garc%C3%ADa-alvarado/"> <img src={githubLogo} alt="githubLogo" className="githubLogo"/>
          </a>
          </li>
          <li>LinkedIn: <a href = "https://www.linkedin.com/in/brandon-garc%C3%ADa-alvarado/"><img src={linkedinLogo} alt="linkedinLogo" className="linkedinLogo" /> 
          </a>
          </li>
       </div>

      </div>
    
      <br/>
     
    </div>
  )
}

export default AboutPage;

