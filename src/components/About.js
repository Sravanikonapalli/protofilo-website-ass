import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import '../styles/about.css';

const About = ({ darkMode, handleToggle }) => {
    return (
        <>
            <Navbar darkMode={darkMode} handleToggle={handleToggle} />
            <div className={`about-container ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
                
                <div className="about-container1">
                    <div className="about-left-image">
                        <img 
                            src="https://ik.imagekit.io/woionuxp2/Rectangle.png?updatedAt=1750904461892" 
                            alt="About Background" 
                            className="about-bg" 
                        />
                    </div> 
                    
                    <div className="about-content">
                        <h1>This is it :) <span><hr/></span></h1>
                        <p>
                            Anish Kr. Sinha is an Indian UI/UX Designer & Front End Developer with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11. 
                            <br /><br />
                            He holds a bachelor degree in Computer Applications. During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative.
                            <br /><br />
                            His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing 3D floor plan.
                            <br /><br />
                            When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.
                        </p>
                    </div>

                    <div className="about-right-image">
                        <img 
                            src="https://ik.imagekit.io/woionuxp2/Vector%203.png?updatedAt=1750904812689" 
                            alt="About Vector" 
                            className="about-vector" 
                        />
                    </div>    
                </div>

                <div className="about-container2">
                    <SocialIcons />
                <div className="about-vectors-row">
                    <img 
                        src="https://ik.imagekit.io/woionuxp2/Vector%204.png?updatedAt=1750904891361" 
                        alt="About Vector" 
                        className="about-vector2" 
                    />

                    <div className="about-divider" />

                    <img 
                        src="https://ik.imagekit.io/woionuxp2/Vector%205.png?updatedAt=1750904953074" 
                        alt="About Vector" 
                        className="about-vector2" 
                    />
                </div>
                </div>

                <div className="about-footer">
                    <hr />
                    <img 
                        src="https://ik.imagekit.io/woionuxp2/Email.png?updatedAt=1750904245001" 
                        alt="Email" 
                        className="email-img" 
                    />
                </div>
            </div>
        </>
    );
};

export default About;
