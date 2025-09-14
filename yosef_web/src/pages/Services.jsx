import frontEnd from "../assets/front-end.png"
import backEnd from "../assets/backend.png"
import uiux from "../assets/ux.png"

export default function Services() {
    return (
        <div id="services" className="py-4
        2xl:py-10
        ">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex-col">
                    <div className="bg-[#3B4B4A] rounded-2xl mx-2">
                        <p className="creato-medium text-[14px] p-4 text-justify text-white
                        2xl:text-[30px] 2xl:p-10
                        ">My mission is to provide the best service to every company and startup out there by developing websites that are engaging, interactive, and memorable. I strive to deliver excellence in order to build customer satisfaction through the products I create.</p>
                    </div>
                </div>
                <div className="my-10 flex flex-col justify-between px-4
                lg:flex-row
                ">
                    <h2 className="roboto-condensed font-bold text-[2rem] max-w-[200px]
                    2xl:text-[60px] 2xl:max-w-[360px]
                    ">How Can I Serve You?</h2>
                    <div className="flex flex-col gap-3
                    2xl:gap-7
                    ">
                        <div className="bg-[#FFFAE8] max-w-[900px] max-h-[230px] rounded-2xl">
                            <div className="flex p-5 gap-4 items-start">
                                <img src={frontEnd} alt="Front End Development" className="w-[40px] object-contain
                                2xl:p-4 2xl:w-[100px]
                                " />
                                <p className="creato-regular text-[12px] text-justify
                                2xl:p-4 2xl:text-[18px]
                                ">I build responsive and user-friendly websites that work perfectly on any device. From custom designs to interactive interfaces, I make sure every detail looks great and delivers a smooth experience for users.</p>
                            </div>
                            <div className="flex justify-between p-4">
                                <h3 className="creato-bold text-[14px]
                                2xl:text-[24px] 2xl:px-10 2xl:pb-10
                                ">Front End Development</h3>
                                <p className="creato-regular text-[14px]
                                2xl:text-[24px] 2xl:px-10 2xl:pb-10
                                ">01</p>
                            </div>
                        </div>
                        <div className="bg-[#FFFAE8] max-w-[900px] max-h-[230px] rounded-2xl">
                            <div className="flex p-5 gap-4 items-start">
                                <img src={backEnd} alt="Front End Development" className="w-[40px] object-contain
                                2xl:p-4 2xl:w-[100px]
                                " />
                                <p className="creato-regular text-[12px] text-justify
                                2xl:p-4 2xl:text-[18px]
                                ">I provide reliable backend development to power your applications. From secure authentication and robust APIs to efficient database management, I ensure your backend is scalable and high-performing.</p>
                            </div>
                            <div className="flex justify-between p-4">
                                <h3 className="creato-bold text-[14px]
                                2xl:text-[24px] 2xl:px-10 2xl:pb-10
                                ">Back End Development</h3>
                                <p className="creato-regular text-[14px]
                                2xl:text-[24px] 2xl:px-10 2xl:pb-10
                                ">02</p>
                            </div>
                        </div><div className="bg-[#FFFAE8] max-w-[900px] max-h-[230px] rounded-2xl">
                            <div className="flex p-5 gap-4 items-start">
                                <img src={uiux} alt="Front End Development" className="w-[40px] object-contain
                                2xl:p-4 2xl:w-[100px]
                                " />
                                <p className="creato-regular text-[12px] text-justify
                                2xl:p-4 2xl:text-[18px]
                                ">I design clean and intuitive user interfaces that combine creativity and functionality. My goal is to make applications and websites both visually appealing and easy to use.</p>
                            </div>
                            <div className="flex justify-between p-4">
                                <h3 className="creato-bold text-[14px]
                                2xl:text-[24px] 2xl:px-10 2xl:pb-10
                                ">UI/UX Design</h3>
                                <p className="creato-regular text-[14px]
                                2xl:text-[24px] 2xl:px-10 2xl:pb-10
                                ">03</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}