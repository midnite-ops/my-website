import '../styles/components/projects.scss';
import xertis from '../assets/projects/xertis.jpg';
import linkImg from '../assets/projects/link-icon.svg';
import desert from '../assets/projects/preview.jpg';
import blackJack from '../assets/projects/neofi.png';


function Projects(){
    return(
        <div className="project" id='projects'>
            <h1>My recent <span>Projects</span></h1>
            <div className="project-body">
                <div className="card card-item">
                    <img src={xertis} className="card-img-top xertis-img project-img" alt="xertis image"/>
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
                    <img src={blackJack}  className="card-img-top xertis-img project-img" alt="xertis image"/>
                    <div className="card-body ps-0">
                         <h5 className='card-title text-start text-white'>NeoFi</h5>
                        <p className="card-text">
                            A Web3 landing page for a fictional DeFi platform called NeoFi. The design is modern and sleek, with a focus on user experience and ease of navigation.
                        </p>
                    </div>
                    <a href="https://neo-fi-black.vercel.app" target='_blank'>
                        See project
                        <img src={linkImg} alt="a link image" />
                    </a>
                </div>

                <div className="card card-item ">
                    <img src={desert}  className="card-img-top xertis-img" alt="xertis image"/>
                    <div className="card-body ps-0">
                         <h5 className='card-title text-start text-white'>Desert menu</h5>
                        <p className="card-text">
                            The Dessert Checkout Menu is a responsive UI component that lets users easily add desserts during checkout. It was designed to improve user experience and boost last-minute sales.
                        </p>
                    </div>
                    <a href="https://midnite-ops.github.io/Dessert-Menu/" target='_blank'>
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