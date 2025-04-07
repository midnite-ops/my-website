import { motion } from "framer-motion";
import useScroll from "../logic/UseScroll";
import * as bootstrap from "bootstrap";
import hamburger from "../assets/hero-nav/hamburger-menu.svg";
import '../styles/components/navbar.scss';

function Navbar() {
  const { scrolled } = useScroll();
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offcanvasId = this.getAttribute('data-bs-target');
      const offcanvasElement = document.querySelector(offcanvasId);
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
  
        setTimeout(() => {
          if (offcanvasInstance) {
            offcanvasInstance.hide();
  
            // Manually clean up the backdrop
            const backdrop = document.querySelector('.offcanvas-backdrop');
            if (backdrop) {
              backdrop.remove();
            }
  
            // Clean up body classes and styles
            document.body.classList.remove('offcanvas-backdrop', 'modal-open');
            offcanvasInstance.hide();
            offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
              document.body.style.overflow = 'auto';
            }, { once: true });
          }
        }, 500);
      }
    });
  });
  
  
  
  

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <motion.button
        className="btn p-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <motion.img
          src={hamburger}
          className="hamburger"
          alt="a hamburger menu"
          whileHover={{ scale: 1.2, rotate: 180 }}
          transition={{ duration: 0.5 }}
        />
      </motion.button>

      <div
        className="offcanvas offcanvas-end text-bg-dark"
        id="offcanvasNavbar"
        tabIndex="-1"
        aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close">
          </button>
        </div>
        <div className="offcanvas-body nav-body">
          <div className="nav-body-content">
            <div className="social">
              <h3 className="social-header">Social</h3>

                <a href="https://github.com/midnite-ops" className="nav-link" target="_blank">Github</a>
              
                <a href="https://www.linkedin.com/in/oyims-jesse" className="nav-link" target="_blank">LinkedIn</a>

                <a href="https://x.com/jesseoyims" className="nav-link" target="_blank">Twitter</a>

                <a href="" className="nav-link" target="_blank">Resume</a>
            
              
            </div>
            <div className="menu">
              <h3 className="menu-header">Menu</h3>

              <div className="menu-link">
                <div className="color-ball ball1"></div>
                <a href="#home" className="nav-link" data-bs-target="#offcanvasNavbar">Home</a>
              </div>

              <div className="menu-link">
                <div className="color-ball ball2"></div>
                <a href="#about" className="nav-link" data-bs-target="#offcanvasNavbar">About</a>
              </div>

              <div className="menu-link">
                <div className="color-ball ball3"></div>
                <a href="#projects" className="nav-link" data-bs-target="#offcanvasNavbar">Projects</a>
              </div>

              <div className="menu-link">
                <div className="color-ball ball4"></div>
                <a href="#experience" className="nav-link" data-bs-target="#offcanvasNavbar">Experience</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
