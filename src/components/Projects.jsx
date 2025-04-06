import '../styles/components/projects.scss';
import xertis from '../assets/projects/xertis.jpg';
import linkImg from '../assets/projects/link-icon.svg';
import zelle from '../assets/projects/zelle-image.png';
import blackjack from '../assets/projects/blackjack-image.jpeg';
import "bootstrap/dist/css/bootstrap.min.css";  
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Projects(){
    return(
        <div className="project container" id='projects'>
            <h1>My recent <span>Projects</span></h1>
            <div className="project-body">
                <div className="card card-item">
                    <img src={xertis} className="card-img-top xertis-img" alt="xertis image"/>
                    <div className="card-body ps-0">
                        <h5 className='card-title text-start text-white'>Xertis</h5>
                        <p className="card-text ">
                            The application helps individuals create certificates that can be verified on the blockchain. And also allow individuals to mint a certificate through a custom url
                        </p>
                    </div>
                    <a href="https://xertis.vercel.app" target='_blank'>
                        See project
                        <img src={linkImg} alt="a link image" />
                    </a>
                </div>

                <div className="card card-item">
                    <img src={zelle}  className="card-img-top xertis-img" alt="xertis image"/>
                    <div className="card-body ps-0">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <a href="https://xertis.vercel.app" target='_blank'>
                        See project
                        <img src={linkImg} alt="a link image" />
                    </a>
                </div>

                <div className="card card-item ">
                    <img src={blackjack}  className="card-img-top xertis-img" alt="xertis image"/>
                    <div className="card-body ps-0">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <a href="https://xertis.vercel.app" target='_blank'>
                        See project
                        <img src={linkImg} alt="a link image" />
                    </a>
                </div>
            </div>
            <div className='all-projects-btn'>
                <button>
                    VIEW ALL PROJECTS
                    <img src={linkImg} alt="a link image" />
                </button>
            </div>
        </div>
    )
}

export default Projects