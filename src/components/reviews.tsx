'use client'

import { HiStar } from "react-icons/hi2";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import reviews from '../../public/assets/ratingVector2.png'
import Image from "next/image";
import Slider from "react-slick";



interface Ireviws {
    id: string;
    title: string;
    content: string;
    date: string;
}
const reviws: Ireviws[] = [
    {
        id: '1',
        title: "Samantha D.",
        content:
            "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        date: ' Posted on August 14, 2023'
    },

    {
        id: '2',
        title: "Alex M.",
        content:
            "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        date: "Posted on August 15, 2023"
    },

    {
        id: '3',
        title: "Jane Doe",
        content: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",

        date: "Posted on August 16, 2023"
    },

    {
        id: '4',
        title: "Olivia P.",
        content: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        date: "Posted on August 17, 2023"
    },

    {
        id: '5',
        title: "Liam K.",
        content: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",

        date: "Posted on August 18, 2023"
    },

    {
        id: '6',
        title: "Ava H",
        content:
            "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",

        date: "Posted on August 19, 2023"
    },

]





export default function OurCustomer() {



    let settings = {
        dots: true,
        infinite: false,
        speed: 500,

        slidesToScroll: 2,
        initialSlide: 0,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="mx-auto max-w-screen-xl my-24 rounded-3xl">
            <div className=" flex justify-between mx-6">
                {/* Heading and Timer */}
                <h2 className="text-[16px] capitalize  md:text-[44px] lg:w-[654px] w-[250px] font-extrabold leading-[48px] tracking-[4%]">
                    Our Happy Customerse
                </h2>
                <div className="flex space-x-5">
                    <button className="rounded-md font-medium">
                        <FaArrowLeft /></button>
                    <button className="rounded-md font-medium">
                        <FaArrowRight />
                    </button>
                </div>
                {/* Button */}
            </div>
            <div className=" max-w-screen-2xl mx-auto rounded-3xl gap-5 ">
                <Slider {...settings} className="gap-x-4">
                    {
                        reviws.map((r,i) => (

                            <div key={i} className="md:w-[180px] w-[300] p-6 mx-auto rounded-2xl  h-[220px] border  border-black/20 my-8  md:space-y-2">
                                <div className="flex">
                                    <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                                        <HiStar className="w-[20px] h-[20px]" />
                                        <HiStar className="w-[20px] h-[20px]" />
                                        <HiStar className="w-[20px] h-[20px]" />
                                        <HiStar className="w-[20px] h-[20px]" />
                                        <HiStar className="w-[20px] h-[20px]" />
                                    </span>
                                </div>
                                <div className="flex">
                                    <h2 className="font-bold ">{r.title}</h2>
                                    <Image src={reviews} alt="Rating Vector" width={40} height={40} className="w-5 h-5" />

                                </div>
                                <p className=" text-xs line-clamp-4">{r.content}</p>
                                <p>{r.date}</p>
                            </div>


                        ))
                    }
                </Slider>

            </div>

        </section>
    )
}