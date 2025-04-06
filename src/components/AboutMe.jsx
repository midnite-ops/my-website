import '../styles/components/about.scss';
import { motion } from 'framer-motion';;

function AboutMe(){
    return(
        <motion.div className="about" id='about'
        initial={{opacity: 0}}
        whileInView={{
            opacity: 1, 
            scale: 1.02,
            transition: {
                duration: 3
            }
        }}>
            <div className='about-header'>
                <p>This is me, I think.</p>
            </div>
            <div className="about-content">
                <div className='about-content-header'>
                    <h1>Hi, I'm Jesse</h1>
                </div>
                <div className='about-details'>
                    <p>
                        I'm a frontend web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.
                    </p>
                    <p>
                        My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMe