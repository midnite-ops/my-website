import '../styles/components/experience.scss'

import javascriptIcon from '../assets/experience/javascript-icon.webp';
import reactIcon from '../assets/experience/react-icon.webp';
import sassIcon from '../assets/experience/sass-icon.webp';
import bootstrapIcon from '../assets/experience/bootstrap-icon.svg';
import framerIcon from '../assets/experience/framer-icon.webp';
import gitIcon from '../assets/experience/git-icon.webp';
function Experience (){
    return(
        <div className="experience" id='experience'>
            <div className='experience-header'>
                <p>My Stack</p>
            </div>
            <div className='experience-set'>
                <div className="experience-niche">FRONTEND</div>
                <div className="experience-niche-skills">
                    <div>
                        <img src={javascriptIcon} alt="a javascript icon" />
                        Javascript
                    </div>
                    <div>
                        <img src={framerIcon} alt="a framer motion icon" />
                        Framer Motion
                    </div>
                    <div>
                        <img src={bootstrapIcon} alt="a bootstrap icon" />
                        Bootstrap
                    </div>
                    <div>
                        <img src={sassIcon} alt="a sass icon" />
                        Sass
                    </div>
                    <div>
                        <img src={reactIcon} alt="a react icon" />
                        React
                    </div>
                    <div>
                        <img src={gitIcon} alt="a bootstrap icon" />
                        Git
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience