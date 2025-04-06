import { useState, useEffect } from "react";

const useScroll = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        const handleScroll = () => {
            const isScrolled = window.scrollY > (isMobile ? 30 : 50); // Lower scroll threshold for mobile
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled, isMobile]);

    return { scrolled, isMobile };
};

export default useScroll;
