import ocep from "../assets/ocep_no_bg2.png";

export default function Hero() {
    return (
        <div className="py-3 gradient-bg
        2xl:py-10
        ">
            <div className="mx-auto
            2xl:max-w-[1400px] 
            md:max-w-[600px]
            lg:max-w-[1000px]
            ">
                <div className="flex flex-col gap-10 items-center
                    2xl:py-20
                    md:flex-row
                ">  
                    <div className="relative flex items-center justify-center w-1/2">
                        <h1 className="belavoir-serif text-[2rem] absolute left-5 top-1/4 -translate-y-1/2 z-20
                        2xl:text-[6rem]
                        md:left-20
                        lg:left-30
                        ">Hey,</h1>
                        <img src={ocep} alt="" className="max-w-[300px] max-h-[550px] object-contain  z-10 bg-transparent
                        2xl:max-w-[700px] 2xl:max-h-[700px]
                        "/>
                        <h1 className="belavoir-serif text-[2rem] absolute -right-4 top-1/4 -translate-y-1/2 z-20
                        2xl:text-[6rem]
                        md:right-10
                        lg:right-20
                        2xl:right-5
                        ">There</h1>
                    </div>
                    <div className="flex flex-col w-1/2 items-center justify-center gap-3
                    2xl:gap-13
                    md:items-center md:gap-5
                    ">
                        <h1 className="roboto-condensed text-[2rem] font-bold leading-[80%] text-center
                            2xl:text-[8rem] 2xl:w-[400px]
                            md:w-[200px] md:text-start md:text-[3rem]
                        ">I AM YOSEF</h1>
                        <h2 className="roboto-condensed text-[1.5rem] font-bold leading-[80%] text-center
                            2xl:text-[4rem] 2xl:w-[400px]
                            md:w-[200px] md:text-start md:text-[2rem]
                        ">SOFTWARE ENGINEER</h2>
                        <p className="creato-regular bg-[#3B4B4A] text-[12px] w-[200px] p-3 rounded-2xl text-[#FFFAE8]
                            2xl:text-[24px] 2xl:w-[400px] 2xl:p-6
                        ">Specialized in Web Development, Front-End Development, Back-End Development, and UI/UX</p>
                    </div>
                </div>
            </div>
        </div>
    );
}