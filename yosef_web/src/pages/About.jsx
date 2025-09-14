import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import instagram from "../assets/instagram.png"
import { Link } from "react-router-dom";
import cv from "../file/yosef-cv.pdf"

export default function About() {
    return (
        <div className="py-10 bg-[#FFFAE8]" id="about">
            <div className="max-w-[1400px] mx-auto
            2xl:py-30
            ">
                <div className="flex-col">
                    <h1 className="text-center roboto-condensed font-bold text-[2rem] mb-2
                    2xl:text-[4rem]
                    ">About Me</h1>
                    <p className="text-justify creato-regular text-[12px] tracking-wider px-4
                    2xl:text-[1.5rem]
                    ">Hey everyone, I'm an active student at Multimedia Nusantara University, majoring in Informatics. My skills in IT are mainly in frontend development. I really enjoy creating websites with my wild imagination. I've completed many projects that you can check out on my portfolio page below.</p>
                    <p className="text-justify creato-regular text-[12px] tracking-wider px-4
                    2xl:text-[1.5rem]
                    ">I'm a cheerful person who loves to chat. One of my favorite ways to unwind when I'm tired is to hang out at cafes with my close friends.</p>
                </div>
                <div className="mt-3 flex justify-between items-center px-4
                2xl:mt-10
                ">
                    <div className="flex gap-3
                    2xl:gap-10
                    ">
                        <Link to='https://www.instagram.com/yosef.fw/' target="blank">
                            <img src={instagram} alt="Instagram" className="w-[20px]"/>
                        </Link>
                        <Link to='https://github.com/yoseffourentino' target="blank">
                            <img src={github} alt="GitHub" className="w-[20px]"/>
                        </Link>
                        <Link to='https://www.linkedin.com/in/yoseffourentino' target="blank">
                            <img src={linkedin} alt="LinkedIn" className="w-[20px]"/>
                        </Link>
                    </div>
                    <div>
                        <Link to={cv} target="_blank" rel="noopener noreferrer" download>
                            <button className="bg-[#3B4B4A] text-[14px] p-3 rounded-xl text-[#FFFAE8] transition-all duration-300 cursor-pointer hover:opacity-75
                            2xl:text-[1.5rem] 
                            ">Download CV</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}