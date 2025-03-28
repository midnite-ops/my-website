import { motion } from "framer-motion"
import hamburger from '../assets/hero-nav/hamburger-menu.svg';
import '../styles/components/navbar.scss';
function Navbar(){
    return(
        <div className="navbar">
            <motion.button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <motion.img 
                src={hamburger} 
                className="hamburger" 
                alt="a hamburger menu" 
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.5}}/>
            </motion.button>

            <div class="offcanvas text-bg-dark offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel"
            initial={{ x: "100%", opacity: 0 }}  // Initially offscreen
            animate={{ x: 0, opacity: 1 }}  // Slides in
            exit={{ x: "100%", opacity: 0 }}  // Slides out on close
            transition={{ duration: 0.5, ease: "easeInOut" }}>
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>
        </div>
    )
}
export default Navbar
