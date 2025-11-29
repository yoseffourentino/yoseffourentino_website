import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import wisuda1 from "../assets/wisuda_1.jpeg";
import wisuda2 from "../assets/wisuda_2.jpeg";
import dumb1 from "../assets/dumb1.jpeg";
import dumb2 from "../assets/dumb2.jpeg";
import dumb3 from "../assets/dumb3.jpeg";
import dumb4 from "../assets/dumb4.jpeg";
import dumb5 from "../assets/dumb5.jpeg";
import dumb6 from "../assets/dumb6.jpeg";
import { Link } from "react-router-dom";
import cv from "../file/yosef-cv.pdf";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {

    const wrapperRef = useRef(null);
    const sectionRef = useRef(null);

    useGSAP(() => {

    ScrollTrigger.matchMedia({

        // ===========================
        // DESKTOP (LG ke atas)
        // ===========================
        "(min-width: 1024px)": () => {

            const panels = gsap.utils.toArray(".aboutPanel");
            const totalPanels = panels.length;
            const totalScrollWidth = (totalPanels - 1) * window.innerWidth;

            // Horizontal scroll
            gsap.set(wrapperRef.current, { 
                width: `${totalPanels * 100}vw`, 
                display: "flex" 
            });

            const horizontalTween = gsap.to(wrapperRef.current, {
                x: () => `-${totalScrollWidth}`,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => `+=${totalScrollWidth}`,
                    pin: true,
                    scrub: 1.2,
                },
            });

            // helper animasi
            function animateHorizontal(target, vars) {
                gsap.from(target, {
                    ...vars,
                    scrollTrigger: {
                        trigger: target,
                        containerAnimation: horizontalTween,
                        start: "left center",
                        end: "right center",
                        toggleActions: "play none none reverse",
                    },
                });
            }

            // PANEL 1
            animateHorizontal(".aboutTitle", { y: -40, opacity: 0, duration: 1 });
            animateHorizontal(".aboutText", { y: 40, opacity: 0, duration: 1, stagger: 0.25 });
            animateHorizontal(".aboutSocial", { scale: 0, opacity: 0, duration: 0.8, stagger: 0.15 });
            animateHorizontal(".aboutBtn", { y: 30, opacity: 0, duration: 0.5 });

            // PANEL 2
            animateHorizontal(".wisudaLeft", { x: -80, opacity: 0, duration: 1 });
            animateHorizontal(".wisudaRight", { x: 80, opacity: 0, duration: 1 });
            animateHorizontal(".aboutQuote2", { opacity: 0, y: 30, duration: 1 });

            // PANEL 3
            animateHorizontal(".aboutQuote3", { opacity: 0, y: 40, duration: 1 });
            animateHorizontal(".aboutGymImg", { opacity: 0, y: 50, duration: 1, stagger: 0.2 });
        },

        // ===========================
        // MOBILE / TABLET (< 1024px)
        // ===========================
        "(max-width: 1023px)": () => {
            // Matikan semua animation & scrolltrigger
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());

            // Reset transform supaya UI normal
            gsap.set(wrapperRef.current, { clearProps: "all" });
            gsap.set(".aboutPanel", { clearProps: "all" });
        }
    });

}, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative w-screen h-screen overflow-hidden bg-transparent"
        >
            <div ref={wrapperRef} className="aboutWrapper relative flex overflow-hidden">

                {/* PANEL 1 */}
                <div className="aboutPanel w-screen h-screen shrink-0 flex items-center justify-center bg-[#FFFAE8]">
                    <div className="max-w-[1400px]">
                        <div className="flex-col">
                            <h1 className="aboutTitle text-center roboto-condensed font-bold text-[2rem] mb-2 2xl:text-[4rem]">
                                About Me
                            </h1>

                            <p className="aboutText text-justify creato-regular text-[12px] tracking-wider px-4 2xl:text-[1.5rem]">
                                Hey everyone, I'm a fresh graduate student at Multimedia Nusantara University, majoring in Informatics.
                            </p>

                            <p className="aboutText text-justify creato-regular text-[12px] tracking-wider px-4 2xl:text-[1.5rem]">
                                I'm a cheerful person who loves to chat. One of my favorite ways to unwind when I'm tired is to
                                hang out at cafes with my close friends.
                            </p>
                        </div>

                        <div className="mt-3 flex justify-between items-center px-4 2xl:mt-10">
                            <div className="flex gap-3 2xl:gap-10">
                                <Link to='https://www.instagram.com/yosef.fw/' target="_blank">
                                    <img src={instagram} alt="Instagram" className="aboutSocial w-[20px]" />
                                </Link>
                                <Link to='https://github.com/yoseffourentino' target="_blank">
                                    <img src={github} alt="GitHub" className="aboutSocial w-[20px]" />
                                </Link>
                                <Link to='https://www.linkedin.com/in/yoseffourentino' target="_blank">
                                    <img src={linkedin} alt="LinkedIn" className="aboutSocial w-[20px]" />
                                </Link>
                            </div>

                            <div>
                                <Link to={cv} target="_blank" rel="noopener noreferrer" download>
                                    <button className="aboutBtn cursor-pointer bg-[#3B4B4A] text-[14px] p-3 rounded-xl text-[#FFFAE8] transition-all duration-300 hover:opacity-75 2xl:text-[1.5rem]">
                                        Download CV
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PANEL 2 */}
                <div className="aboutPanel hidden lg:flex w-screen h-screen shrink-0 items-center gap-10 bg-[#FFFAE8]">
                    <img src={wisuda2} className="wisudaLeft max-w-full max-h-full object-contain lg:w-[200px] xl:w-[500px]" />
                    <p className="aboutQuote2 roboto-condensed font-bold text-[2rem]">"Freshly made from the oven"</p>
                    <img src={wisuda1} className="wisudaRight max-w-full max-h-full object-contain lg:w-[200px] xl:w-[500px]" />
                </div>

                {/* PANEL 3 */}
                <div className="aboutPanel hidden lg:flex w-screen h-screen shrink-0 items-center justify-start gap-20 bg-[#FFFAE8]">
                    <p className="aboutQuote3 roboto-condensed font-bold text-[2rem] max-w-[600px]">
                        “I’m into matcha, gaming, and hitting the gym — basically living my best chill-nerdy-healthy life.”
                    </p>

                    <div className="flex gap-10">
                        <img src={dumb5} className="aboutGymImg h-[400px] object-contain" />
                        <img src={dumb2} className="aboutGymImg h-[500px] object-contain" />
                        <img src={dumb3} className="aboutGymImg h-[400px] object-contain" />
                    </div>
                </div>

            </div>
        </section>
    );
}