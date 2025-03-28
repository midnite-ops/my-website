import '../styles/components/projects.scss';
import xertis from '../assets/projects/xertis.jpg';
import linkImg from '../assets/projects/link-icon.svg';
import "bootstrap/dist/css/bootstrap.min.css";  
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Projects(){
    return(
        <div className="project container">
            <h1>My recent <span>Projects</span></h1>
            <div className="project-body">
                <div className="card card-item">
                    <img src={xertis} className="card-img-top xertis-img" alt="xertis image"/>
                    <div className="card-body ps-0">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <a href="https://xertis.vercel.app" target='_blank'>
                        See project
                        <img src={linkImg} alt="a link image" />
                    </a>
                </div>

                <div className="card card-item">
                    <img src={xertis}  className="card-img-top xertis-img" alt="xertis image"/>
                    <div className="card-body ps-0">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <a href="https://xertis.vercel.app" target='_blank'>
                        See project
                        <img src={linkImg} alt="a link image" />
                    </a>
                </div>

                <div className="card card-item ">
                    <img src={xertis}  className="card-img-top xertis-img" alt="xertis image"/>
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