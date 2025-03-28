import dayjs from "dayjs";
import '../styles/components/footer.scss';
import githubIcon from '../assets/footer/github-2.svg';
import twitterICon from '../assets/footer/twitter-2.svg';
import linkedinIcon from '../assets/footer/linkedin-2.svg';
function Footer(){
    const date = dayjs().year()
    return(
        <footer>
            <div className="footer-header">
                <h1>
                    Let's take your ideas and bring them to the 
                    <span> next level !</span>
                </h1>
                <a  href="mailto:oyimsjesse4@gmail.com">
                    LET'S GET IN TOUCH
                </a>
            </div>
            <div className="footer-links">
                <div className="footer-links-header">
                    <p>Copyright for MIDNITE @ {date}</p>
                </div>
                <div className="links">

                    <a href="https://github.com/midnite-ops" target="_blank" className="div-link">
                        <img src={githubIcon} alt="a github icon" />
                    </a>

                    <a  href="https://x.com/jesseoyims" target="_blank" className="div-link">
                        <img src={twitterICon} alt="a twitter icon" />
                    </a>

                    <a href=
                        "https://www.linkedin.com/in/oyims-jesse" target="_blank" className="div-link">
                        <img src={linkedinIcon} alt="a linkedin icon"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer