import "../styles/components/projects.scss";
import xertis from "../assets/projects/xertis.jpg";
import linkImg from "../assets/projects/link-icon.svg";
import desert from "../assets/projects/preview.jpg";
import neofi from "../assets/projects/neofi.png";
import tionlabs from '../assets/projects/tionlabs.png'
import adessglobal from '../assets/projects/adessglobal.png'
import pixelLog from '../assets/projects/pixellog.png'
import { useState } from "react";

function Projects() {
    const [allProjects, setAllProjects] = useState(false);
    const projects = [
        {
            img: pixelLog,
            title: "PixelLog",
            description:
                "A Photoshop event-tracking tool that logs file saves and editing activity. PixelLog helps studios and editors keep track of workflow changes by monitoring key actions such as document saves, exports, and tool usage.",
            link: "https://github.com/midnite-ops/PixelLog",
        },
        {
            img: xertis,
            title: "Xertis",
            description:
                "The application helps individuals create certificates that can be verified on the blockchain. And also allow individuals to mint a certificate through a custom url",
            link: "https://xertis.vercel.app",
        },
        {
            img: neofi,
            title: "NeoFi",
            description:
                "A Web3 landing page for a fictional DeFi platform called NeoFi. The design is modern and sleek, with a focus on user experience and ease of navigation.",
            link: "https://neo-fi-black.vercel.app",
        },
        {
            img: desert,
            title: "Desert Menu",
            description:
                "The Dessert Checkout Menu is a responsive UI component that lets users easily add desserts during checkout. It was designed to improve user experience and boost last-minute sales.",
            link: "https://midnite-ops.github.io/Dessert-Menu/",
        },
        {
            img: adessglobal,
            title: "AdessGlobal",
            description:
                "Fifteen years of proven construction Excellence. AdEss Global Construction & Consultant Services, LLC is a rapidly growing construction and consulting firm",
            link: "https://adessglobalconstruction.com/",
        },
        {
            img: tionlabs,
            title: "Tionlabs",
            description:
                "A landing page for a tech brand that specializes in building blockchain applications and providing consulting services to businesses looking to leverage blockchain technology.",
            link: "",
        },
    ];
    const showProjects = projects.map((project, i) => {
        if (i >= 3 && allProjects === false) {
            return;
        }
        return (
            <div className="card card-item">
                <img
                    src={project.img}
                    className="card-img-top xertis-img project-img"
                    alt={project.title}
                />
                <div className="card-body ps-0">
                    <h5 className="card-title text-start text-white">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-[#3C096C] text-sm py-2 px-4 rounded-sm">
                    See Project
                </a>
            </div>
        );
    });
    return (
        <div className="project" id="projects">
            <h1>
                My recent <span>Projects</span>
            </h1>
            <div className="project-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {showProjects}
            </div>
            <div
                className={
                    allProjects === false ? "all-projects-btn" : "hidden"
                }
            >
                <button onClick={() => setAllProjects(!allProjects)}>
                    VIEW ALL PROJECTS
                    <img src={linkImg} alt="a link image" />
                </button>
            </div>
        </div>
    );
}

export default Projects;
