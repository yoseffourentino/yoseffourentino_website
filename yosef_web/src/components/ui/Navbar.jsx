import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
        const [scrolled, setScrolled] = useState(false);
        const [menuOpen, setMenuOpen] = useState(false);
        const [user, setUser] = useState(null);
        const navigate = useNavigate();
        
        useEffect(() => {

            const savedUser = JSON.parse(localStorage.getItem("user"));
            setUser(savedUser);

            const changeBackground = () => {
                setScrolled(window.scrollY >= 45);
            };
            window.addEventListener('scroll', changeBackground);
            return () => window.removeEventListener('scroll', changeBackground);
        }, []);
        
        const logout = () => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
        };
    return (
        <div className={`mx-auto sticky top-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-white shadow-lg py-3" : "bg-transparent 2xl:py-7 py-4"
        }`}>
            <nav className="flex justify-between items-center mx-4 max-w-[1400px] px-2 relative
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
                {/* <div className="hidden lg:block">
                    <Link to="contact" smooth={true} duration={500}>
                        <button className="contact-button">Contact</button>
                    </Link>
                </div> */}
                <div className="hidden lg:flex gap-5">
                    {user && (
                    <div className="flex items-center gap-2">
                    <img src={user.image} className="w-5 rounded-full" />
                    <p>Hello, <span className="font-semibold">{user.firstName}</span></p>
                    </div>
                    )}
                    <button 
                    onClick={logout} 
                    className=" bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
                    >Logout</button>
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
                    <button 
                    onClick={logout} 
                    className=" bg-red-500 text-white px-4 py-2 rounded"
                    >Logout</button>
                </div>
            </nav>
        </div>
    );
}