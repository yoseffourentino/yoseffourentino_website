import giatAI from "../assets/giatAI.png"
import bMusicStudio from "../assets/bMusicStudio.png"
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Portfolio() {
    const PortfolioData = [
        {
            id: 1,
            title: "GIAT AI Company Profile",
            image: giatAI,
            link: "https://www.giat-ai.com/"
        },
        {
            id: 2,
            title: "B Music Studio",
            image: bMusicStudio,
            link: "https://www.bmusicstudio.com/" 
        }
    ]
    
    return (    
        <div className="py-10 bg-[#D9D9D9]" id="portfolio">
            <div className="max-w-[1400px] mx-auto flex flex-col">
                <div>
                    <h1 className="roboto-condensed font-bold text-[32px] max-w-[360px] px-4">Explore my Portfolio</h1>
                </div>
                {/* <div>
                    <div className="grid grid-cols-1">
                        {PortfolioData.map((item) => (
                            <div key={item.id} className="p-4">
                                <Link to={item.link} target="blank">
                                    <img src={item.image} alt={item.title} className="w-[450px] h-[350px] rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer" />
                                </Link>
                                <h2 className="mt-2 text-lg font-semibold creato-regular">{item.title}</h2>
                            </div>
                        ))}
                    </div>
                </div> */}
                <Carousel opts={{
                    align: "start",
                    }} 
                    className="flex-auto">
                    <CarouselContent className="p-4 gap-6">
                        {PortfolioData.map((item) => (
                            <CarouselItem key={item.id} className="flex flex-col max-w-[450px]">
                                <Link to={item.link} target="blank">
                                    <img src={item.image} alt={item.title} className="w-[450px] h-[350px] rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer" />
                                </Link>
                                <h2 className="mt-2 text-lg font-semibold creato-regular">{item.title}</h2>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}