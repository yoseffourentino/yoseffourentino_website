import arrow from "../assets/arrow.png"
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"
import github from "../assets/github.png"
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div id="contact" className="bg-[#3B4B4A] text-[#FFFAE8]
        2xl:py-10
        ">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-10 p-4">
                <div className="flex justify-between items-center border-b pb-2
                2xl:flex-row
                ">
                    <div>
                        <h1 className="creato-medium text-[24px] max-w-[520px]
                        2xl:text-[80px]
                        ">Let's Connect There</h1>
                    </div>
                    <div>
                        <Link to="https://wa.me/6281219063587" target="_blank" rel="noopener noreferrer" >
                            <button className="flex gap-4 bg-[#1B1B1B] p-2 rounded-3xl items-center group hover:bg-[#FFFAE8] transition-colors duration-300 cursor-pointer
                            2xl:p-3
                            ">
                                <div className="bg-[#FFFAE8] rounded-4xl transition-all duration-300 group-hover:translate-x-2 group-hover:bg-[#3B4B4A]">
                                    <img src={arrow} alt="Arrow Icon" className="max-w-[30px]"/>
                                </div>
                                <h2 className="creato-bold text-[14px] pr-5 transition-colors duration-300 group-hover:text-[#3B4B4A]
                                2xl:text-[32px]
                                ">HIRE ME</h2>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="justify-between border-b pb-8 hidden
                2xl:flex
                ">
                    <div className="flex flex-col gap-5">
                        <h3 className="belavoir-serif text-[48px] max-w-[250px]">Yosef Fourentino W.</h3>
                        <p className="creato-regular text-[20px]">I'm available for new opportunities</p>
                        <div className="flex gap-10">
                        <Link to='https://www.instagram.com/yosef.fw/' target="blank">
                            <img src={instagram} alt="Instagram" className="max-w-[30px]"/>
                        </Link>
                        <Link to='https://github.com/yoseffourentino' target="blank">
                            <img src={github} alt="GitHub" className="max-w-[30px]"/>
                        </Link>
                        <Link to='https://www.linkedin.com/in/yoseffourentino' target="blank">
                            <img src={linkedin} alt="LinkedIn" className="max-w-[30px]"/>
                        </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="roboto-condensed font-medium text-[20px]">Address</h3>
                        <p className="creato-regular text-[15px] max-w-[320px] text-justify">Jalan Sinar Jaya No. 15b, RT.2/RW.10, Pisangan Tim, Pulo Gadung, Kota Jakarta Timur, 13230</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="roboto-condensed font-medium text-[20px]">Email</h3>
                        <p className="creato-regular text-[15px] max-w-[320px] text-justify">yoseffourentino30@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className="roboto-condensed font-medium text-[20px]">Phone Number</h3>
                        <p className="creato-regular text-[15px] max-w-[320px] text-justify">+62 812-1906-3587</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="roboto-condensed font-bold text-[9px]
                    2xl:text-[20px]
                    ">Yosef Fourentino <span className="font-light">/ Portfolio</span></p>
                    <p className="roboto-condensed font-light text-[9px]
                    2xl:text-[20px]
                    ">© 2025 by Yosef Fourentino Wicaksono. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}