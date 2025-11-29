import About from "./About";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Quotes from "./Quotes";
import Services from "./Services";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "../components/ui/Navbar";
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';   
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {

    useGSAP(() => {
                ScrollTrigger.create({
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    pinSpacing: false,
                    pinType: "fixed",
                    markers: false,
                })
                
    }, []);

    return (
        <div className="bg-[#EBEBEB]" id="home">
            <div id="smooth-content">
                    <Navbar/>
                <div id="hero-wrapper" className="relative z-30">
                    <Hero />
                </div>
                <div className="relative z-40">
                    <About />
                    <Services />
                    <Experience />
                    <Portfolio />
                    <Quotes />
                    <Footer />
                </div>
            </div>
        </div>
    );
}