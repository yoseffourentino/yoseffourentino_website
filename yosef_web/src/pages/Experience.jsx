import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {

useGSAP(() => {

    gsap.from(".expTitle", {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".expTitle",
            start: "top 85%",
            toggleActions: "restart none none reverse",
        },
    });

    gsap.utils.toArray(".expRow").forEach((row) => {
        gsap.from(row, {
            opacity: 0,
            y: 50,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
                trigger: row,
                start: "top 85%",
                toggleActions: "restart none none reverse",
            },
        });
    });

    gsap.utils.toArray(".expContent").forEach((content) => {
        gsap.from(content, {
            opacity: 0,
            x: -60,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: content,
                start: "top 80%",
                toggleActions: "restart none none reverse",
            },
        });
    });

    gsap.utils.toArray(".expDate").forEach((date) => {
        gsap.from(date, {
            opacity: 0,
            x: 120,
            duration: 1.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: date,
                start: "top 85%",
                toggleActions: "restart none none reverse",
            },
        });
    });

}, []);

    return(
        <div id="experience" className="py-5 bg-[#FFFAE8]
        2xl:py-10
        ">
            <div className="max-w-[1400px] mx-auto">
                <h1 className="expTitle  roboto-condensed font-bold text-[32px] max-w-[360px] px-4
                2xl:text-[60px]
                ">Experience & Skills</h1>
                <div>
                    <div>
                        <div className="expRow  flex flex-col justify-between border-b pt-4 pb-2 px-4
                        2xl:flex-row 2xl:pt-15
                        ">
                            <div className="expContent  max-w-[850px]">
                                <h2 className="creato-bold font-bold text-[14px]
                                2xl:text-[26px]
                                ">Fullstack Developer at Winnicode Garuda Teknologi</h2>
                                <p className="creato-regular text-[12px]
                                2xl:text-[20px]
                                ">Developing a news portal website & creating features such as news listing, search page, top headline news, and news categories</p>
                                <p className="creato-medium text-[12px] mt-6
                                2xl:text-[20px]
                                ">HTML, CSS, Tailwind, Javascript, ReactJS, NodeJS, ExpressJS, MongoDB.</p>
                            </div>
                            <div className="expDateWrapper">
                                <h2 className="expDate creato-medium text-[20px]
                                2xl:text-[48px]
                                ">Aug 2024 - Nov 2024</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="expRow flex flex-col justify-between border-b pt-4 pb-2 px-4
                        2xl:flex-row 2xl:pt-15
                        ">
                            <div className="expContent max-w-[850px]">
                                <h2 className="creato-bold font-bold text-[14px]
                                2xl:text-[26px]
                                ">Frontend & Backend Developer Bootcamp at Dicoding Indonesia</h2>
                                <p className="creato-regular text-[12px]
                                2xl:text-[20px]
                                ">Studying many modules such as the basics of Git and GitHub, basic JavaScript programming, beginner front-end web development, front-end web fundamentals, front-end web expert, and back-end application development for beginners.</p>
                                <p className="creato-medium text-[12px] mt-6
                                2xl:text-[20px]
                                ">HTML, CSS, Javascript, NodeJS, ExpressJS, MongoDB.</p>
                            </div>
                            <div className="expDateWrapper">
                                <h2 className="expDate creato-medium text-[20px]
                                2xl:text-[48px]
                                ">Feb 2024 - Jul 2024</h2>
                            </div>
                        </div>
                    </div><div>
                        <div className="expRow flex flex-col justify-between border-b pt-4 pb-2 px-4
                        2xl:flex-row 2xl:pt-15
                        ">
                            <div className="expContent max-w-[850px]">
                                <h2 className="creato-bold font-bold text-[14px]
                                2xl:text-[26px]
                                ">Web Developer Freelance</h2>
                                <p className="creato-regular text-[12px]
                                2xl:text-[20px]
                                ">I am offering freelance services for companies that want to create corporate websites or individuals who want to build their personal websites.</p>
                                <p className="creato-medium text-[12px] mt-6
                                2xl:text-[20px]
                                ">HTML, CSS, Javascript, Typescript, ReactJS, NextJS, NodeJS, ExpressJS, NestJS, MongoDB, PostgreSQL .</p>
                            </div>
                            <div className="expDateWrapper">
                                <h2 className="expDate creato-medium text-[20px]
                                2xl:text-[48px]
                                ">Dec 2024 - Present</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}