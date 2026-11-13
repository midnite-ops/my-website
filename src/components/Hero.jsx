import "../styles/components/hero.scss";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Email from "./Email";
import { getHoursWorked } from "../utils/getHoursWorked";
import { useEffect, useState } from "react";
import { p } from "framer-motion/client";
function Hero() {
  const [codingTime, setCodingTime] = useState(null);
  useEffect(() => {
    getHoursWorked().then(setCodingTime);
  }, []);

  return (
    <motion.div
      className="hero"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <Email />
      <div className="hero-body">
        <div className="hero-content">
          <h1>Frontend Developer</h1>
          <p>
            Hi! i'm Jesse. A Creative frontend developer with{" "}
            {new Date().getFullYear() - 2024}+ years of experience in bulding
            high-performance, scalable, and responsive web solutions.
          </p>
          <a href="mailto:oyimsjesse4@gmail.com">HIRE ME</a>
        </div>
        <div className="hero-work">
          <div>
            <h1>{new Date().getFullYear() - 2024}</h1>
            <p>Years of Experience</p>
          </div>
          <div>
            <h1>6</h1>
            <p>Completed Projects</p>
          </div>
          <div>
            <h1>
              {codingTime && codingTime.human_readable_total_including_other_language
                ? codingTime.human_readable_total_including_other_language.split(" ")[0]
                : <p className="text-lg">Loading...</p>}
            </h1>
            <p>Hours Worked</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
