import '../styles/components/hero.scss';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Email from './Email';
function Hero(){
    return(
        <motion.div className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
            {/* <Navbar /> */}
            <Email />
            <div className="hero-body">
                <div className='hero-content'>
                    <h1>Frontend Developer</h1>
                    <p>
                        Hi! i'm Jesse. A Creative frontend developer with 1+ years of experience in bulding high-performance, scalable, and responsive web solutions.
                    </p>
                    <a href="mailto:oyimsjesse4@gmail.com">
                        HIRE ME
                    </a>
                </div>
                <div className="hero-work">
                    <div>
                        <h1>1+</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div>
                        <h1>5+</h1>
                        <p>Completed Projects</p>
                    </div>
                    <div>
                        <h1>10K+</h1>
                        <p>Hours Worked</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Hero