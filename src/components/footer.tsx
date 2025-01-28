import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Babge13 from "../../public/assets/Frame 53.png";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="max-w-screen-xl rounded-2xl bg-[#e0dcde] mt-24 mx-auto">
            <div className="  top-24 grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16  max-w-frame mx-auto bg-black rounded-[20px]">
                <div>
                    <p className="text-white font-extrabold mx-auto  text-[44px] text-center sm:text-left">
                        STAY UP TO DATE ABOUT OUR LATEST OFFERS
                    </p>
                </div>
                <div className="flex justify-center items-center p-4">
                    <div className="flex flex-col items-center space-y-4 ">
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="px-4 py-2 rounded-lg border-2 border-gray-300 "
                        />
                        <button
                            className="px-6 py-2 rounded-lg border-2 text-white"
                        >Subscribe To news Letter</button>
                    </div>
                </div>
            </div>
            {/* <SubFooter/> */}
            <div className="max-w-screen-2xl  w-full mx-auto flex justify-center items-center py-4 sm:py-16 px-4 sm:px-2">
                <div className=" flex flex-col justify-center md:flex-row space-y-10 md:space-y-0 mx-auto">
                    {/* First div */}
                    <div className="w-full md:w-1/5 text-textColor space-y-6">
                        <Link href={'/'}  className="text-3xl md:text-2xl font-bold tracking-wider cursor-pointer">Shop .Co</Link>
                        <p className="leading-[24px] text-[15px] md:text-base">
                            We have clothes that suits your style and which you’re proud to wear. From women to men.
                        </p>
                        <div className="flex justify-start space-x-4 ">
                            <Link href='https://www.facebook.com/profile.php?id=100084509955029' target="_blank" className="relative bg-white hover:bg-black hover:text-white  h-8 w-8 transition-all rounded-full border border-black/20 text-gray-400">
                                <RiFacebookLine className="absolute left-2 top-2" />
                            </Link>
                            <Link href='https://www.twiter.com/'  target="_blank" className="relative bg-white hover:bg-black hover:text-white  h-8 w-8 transition-all rounded-full border border-black/20 text-gray-400">
                                <CiTwitter className="absolute left-2 top-2" />
                            </Link>
                            <Link href='https://www.instagram.com/' target="_blank" className="relative bg-white hover:bg-black hover:text-white  h-8 w-8 transition-all rounded-full border border-black/20 text-gray-400">
                                <FaInstagram className="absolute left-2 top-2" />
                            </Link>
                            <Link href='https://www.linkedin.com/in/areej-zaheer-0356202b4/' target="_blank" className="relative bg-white hover:bg-black hover:text-white  h-8 w-8 transition-all rounded-full border border-black/20 text-gray-400">
                                <FaLinkedinIn className="absolute left-2 top-2" />
                            </Link>
                        </div>
                    </div>
                    <div className="grid sm:space-x-12 sm:grid-cols-4 grid-cols-2 gap-6 md:">
                        {/* Second div */}
                        <div className="w-full sm:w-[146px] text-textColor space-y-2 sm:ml-0 md:ml-20">
                            <h2 className="text-lg md:text-xl font-bold">COMPANY</h2>
                            <ul className="space-y-2 md:space-y-4">
                                <li><Link href={'/about'} className="text-sm md:text-base tracking-[2px]">About</Link></li>
                                <li><Link href={'/features'} className="text-sm md:text-base">Features</Link></li>
                                <li><Link href={'/works'} className="text-sm md:text-base">Works</Link></li>
                                <li><Link href={'/career'} className="text-sm md:text-base">Career</Link></li>
                            </ul>
                        </div>
                        {/* Third div */}
                        <div className="w-full md:w-[146px] text-textColor space-y-2">
                            <h2 className="text-lg md:text-xl font-bold">Account</h2>
                            <ul className="space-y-2 md:space-y-4">
                                <li><Link href={'/customer'} className="text-sm md:text-base sm:w-auto md:w-[166px]">Customer Support</Link></li>
                                <li><Link href={"/deliveryDetail"} className="text-sm md:text-base  sm:w-auto md:w-[166px]">Delivery Details</Link></li>
                                <li><Link href={'/terms'} className="text-sm md:text-sm sm:w-auto md:w-[166px]">Terms & Conditions</Link></li>
                                <li><Link href={'/policy'} className="text-sm md:text-base sm:w-auto md:w-[166px]">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        {/* Fourth div */}
                        <div className="w-full md:w-[146px] text-textColor space-y-2">
                            <h2 className="text-lg md:text-xl font-bold">FAQ</h2>
                            <ul className="space-y-2 md:space-y-4">
                                <li><Link href={'/login'} className="text-sm md:text-base">Account</Link></li>
                                <li><Link href={'/shipment'} className="text-sm md:text-base sm:w-auto md:w-[133px]">Manage Deliveries</Link></li>
                                <li><Link href={'/orders'} className="text-sm md:text-base">Orders</Link></li>
                                <li> <Link href={'/payments'} className="text-sm md:text-base">Payments</Link></li>
                            </ul>
                        </div>
                        {/* Fifth div */}
                        <div className="  w-full md:w-[196px] text-textColor space-y-2 animate__animated animate__fadeIn animate__delay-4s">
                            <h2 className="text-lg md:text-xl font-bold">Resources</h2>
                            <ul className="space-y-2 md:space-y-4">
                                <li><Link href={'/'} className="text-sm md:text-base font-medium sm:w-auto md:w-[166px] w-auto">Free eBooks</Link></li>
                                <li><Link href={'/'} className="text-xs md:text-base font-medium sm:w-auto md:w-[166px] w-auto">Development</Link></li>
                                <li><Link href={'/'} className="text-sm md:text-base font-medium sm:w-auto md:w-[166px] w-auto">How to - Blog</Link></li>
                                <li><Link href={'/'} className="text-sm md:text-base font-medium sm:w-auto md:w-[166px] w-auto">Youtube Playlist</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-full max-w-screen-xl "></div>
            <div className="mx-auto py-4   bg-[#e0dcde] max-w-screen-2xl">
                <div className="mx-auto bg-[#e0dcde] px-5 flex flex-col sm:justify-between sm:flex-row">
                    <p className="text-gray-500 text-base text-center">
                        Areej-Zaheer © Made by Areej Zaheer, Designed by
                    </p>
                    <span className="max-w-screen-xl flex sm:mt-0 mt-2 sm:w-auto w-full text-center  bg-[#e0dcde]  text-sm">
                        <Image src={Babge13} alt="Babge1" className="rounded-xl" />
                    </span>
                </div>
            </div>
        </footer>

    );
}
