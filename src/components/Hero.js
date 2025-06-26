import '../styles/hero.css';
import { MdWavingHand } from "react-icons/md";
import '../styles/navbar.css';
import SocialIcons from './SocialIcons';
const Hero = ({darkMode,handleToggle}) => {
  return (
    <>
    <div  className={`home-container ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}>
        <div className='hero-text'>
        <button className='hello'>Hello!</button>
        <h1>I'm <span>Anish</span> <MdWavingHand color="yellow"/></h1>
        <p>UI/UX Designer, Front-End Developer and Thinker. 
            <br/>
            Based in India.
        </p>
        </div>
        <div className='hero-links'>
            <div className="social-side">
                <SocialIcons darkMode={darkMode} handleToggle={handleToggle}/>
            </div>
        <div className='btns'>
            <button className='cv'>Download CV</button>
            <button className='get-in-touch'>Get in Touch</button>
        </div>
        </div>
        
        <img src="https://ik.imagekit.io/woionuxp2/Image.png?updatedAt=1750904135721" alt='Anish' className='hero-img'/>
        <img src="https://ik.imagekit.io/woionuxp2/Email.png?updatedAt=1750904245001" alt='Email' className='email-img'/>
    </div>
    </>
  );
}

export default Hero;