import About from "./About";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Quotes from "./Quotes";
import Services from "./Services";
import Footer from "./Footer";
import Hero from "./Hero";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const changeBackground = () => {
            setScrolled(window.scrollY >= 45);
        };
        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll', changeBackground);
    }, []);

    return (
        <div className="bg-[#EBEBEB]" id="home">
            <div className={`mx-auto sticky top-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-white shadow-lg py-3" : "bg-transparent 2xl:py-7 py-4"
            }`}>
                <nav className="flex justify-between items-center mx-4 max-w-[1400px] relative
                lg:mx-auto
                ">
                    <Link to="home" smooth={true} duration={500}>
                        <p className="home-logo cursor-pointer">YOSEF</p>
                    </Link>
                    
                    {/* Hamburger button */}
                    <button
                        className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-8 h-1 bg-black rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`block w-8 h-1 bg-black rounded my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block w-8 h-1 bg-black rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </button>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex gap-10 nav-items">
                        <Link to="about" smooth={true} duration={500} offset={-100}>
                            <p className="mx-8 cursor-pointer">About</p>
                        </Link>
                        <Link to="services" smooth={true} duration={500} offset={-100}>
                            <p className="mx-8 cursor-pointer">Services</p>
                        </Link>
                        <Link to="experience" smooth={true} duration={500} offset={-100}>
                            <p className="mx-8 cursor-pointer">Experience</p>
                        </Link>
                        <Link to="portfolio" smooth={true} duration={500} offset={-100}>
                            <p className="mx-8 cursor-pointer">Portfolio</p>
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <Link to="contact" smooth={true} duration={500}>
                            <button className="contact-button">Contact</button>
                        </Link>
                    </div>

                    {/* Mobile nav */}
                    <div
    className={`absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center md:hidden py-4 z-40
        transition-all duration-300
        ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
    `}
    style={{ transitionProperty: "max-height, opacity" }}
>
    <Link to="about" smooth={true} duration={500} offset={-100} onClick={() => setMenuOpen(false)}>
        <p className="py-2 cursor-pointer">About</p>
    </Link>
    <Link to="services" smooth={true} duration={500} offset={-100} onClick={() => setMenuOpen(false)}>
        <p className="py-2 cursor-pointer">Services</p>
    </Link>
    <Link to="experience" smooth={true} duration={500} offset={-100} onClick={() => setMenuOpen(false)}>
        <p className="py-2 cursor-pointer">Experience</p>
    </Link>
    <Link to="portfolio" smooth={true} duration={500} offset={-100} onClick={() => setMenuOpen(false)}>
        <p className="py-2 cursor-pointer">Portfolio</p>
    </Link>
    <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
        <button className="contact-button mt-2">Contact</button>
    </Link>
</div>
                </nav>
            </div>    

            <Hero />
            <About />
            <Services />
            <Experience />
            <Portfolio />
            <Quotes />
            <Footer />
        </div>
    );
}