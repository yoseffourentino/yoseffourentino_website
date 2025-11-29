import ocep from "../assets/ocep_no_bg2.png";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {

    useGSAP(() => {

        const tl = gsap.timeline({ 
            defaults: { duration: 1, ease: "power3.out" } 
        });

        tl.from(".hey", {
            x: -80,
            opacity: 0
        });

        tl.from(".there", {
            x: 80,
            opacity: 0
        }, "-=0.8"); 

        tl.from(".fotoOcep", {
            opacity: 0,
            y: 40
        }, "-=0.6");

        tl.from(".desc", {
            opacity: 0,
            y: 20,
            stagger: 0.25
        }, "-=0.5");

    }, []);

    return (
        <div id="hero" className="panel py-3 gradient-bg min-h-screen relative
        2xl:py-10
        ">
            <div className="flex justify-center items-center h-full mx-auto
            2xl:max-w-[1400px] 
            md:max-w-[600px]
            lg:max-w-[1000px]
            ">
                <div className="flex flex-col gap-10 items-center
                    2xl:py-20
                    md:flex-row
                ">  
                    <div className="relative flex items-center justify-center w-1/2">
                        <h1 className="hey belavoir-serif text-[2rem] absolute -left-1 top-1/4 -translate-y-1/2 z-20
                        2xl:text-[6rem]
                        md:left-13
                        lg:left-13 lg:text-[4rem]
                        ">Hey,</h1>
                        <img src={ocep} alt="" className="fotoOcep max-w-[300px] max-h-[550px] object-contain  z-10 bg-transparent
                        lg:max-w-[600px] lg:max-h-[600px]
                        2xl:max-w-[700px] 2xl:max-h-[700px]
                        "/>
                        <h1 className="there belavoir-serif text-[2rem] absolute -right-10 top-1/4 -translate-y-1/2 z-20
                        2xl:text-[6rem] 2xl:-right-10
                        md:right-5
                        lg:-right-3 lg:text-[4rem]
                        ">There</h1>
                    </div>
                    <div className="flex flex-col w-1/2 items-center justify-center gap-3
                    2xl:gap-13
                    md:items-center md:gap-5
                    ">
                        <h1 className="desc roboto-condensed text-[2rem] font-bold leading-[80%] text-center
                            lg:text-[6rem] lg:w-[300px]
                            2xl:text-[8rem] 2xl:w-[400px]
                            md:w-[200px] md:text-start md:text-[3rem]
                        ">I AM YOSEF</h1>
                        <h2 className="desc roboto-condensed text-[1.5rem] font-bold leading-[80%] text-center
                            lg:text-[4rem] lg:w-[300px]
                            2xl:text-[4rem] 2xl:w-[400px]
                            md:w-[200px] md:text-start md:text-[2rem]
                        ">SOFTWARE ENGINEER</h2>
                        <p className="desc creato-regular bg-[#3B4B4A] text-[12px] w-[200px] p-3 rounded-2xl text-[#FFFAE8]
                            lg:text-[18px] lg:w-[300px] lg:p-4
                            2xl:text-[24px] 2xl:w-[400px] 2xl:p-6
                        ">Specialized in Web Development, Front-End Development, Back-End Development, and UI/UX</p>
                    </div>
                </div>
            </div>
        </div>
    );
}