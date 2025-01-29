'ues client'
import heroImage from '../../public/assets/hero1.jpeg'

import Image from "next/image";
import vector from '../../public/assets/Vector.png'
import Counter from './counter';


function Hero() {
  return (
    <section className="grid bg-opacity-30  bg-[#d1cfd0] px-4 md:grid-cols-2 mx-auto  max-w-screen-xl bg-image py-24 my-2 ">
      <div>
        <Image
          src={vector}
          alt='vector'
          width="1000"
          height="1000"
          className="mx-auto absolute md:block hidden top-36 sm:top-24 md:top-18 lg:top-18 w-full max-w-[100px] max-h-[100px] animate-[spin_3s_infinite] right-12"
        />
        <div>
          <h3 className="animate-fedeIn opacity-100 transition-opacity duration-900 ease-in-out text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h3>
        </div>
        <div className='flex'>
          <p className="animate-fedeIn text-[14px] lg:text-base opacity-100 transition-opacity duration-500 ease-in-out ">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality a
            nd cater to your sense of style.</p>
          <Image
            src={vector}
            alt='vector'
            width="60"
            height="60"
            className="absolute md:block hidden top-36 sm:top-64 md:top-44 lg:top-60 max-w-11 animate-[spin_3s_infinite] right-[550px]"
          />
        </div>
       
       
        <Image src={heroImage} alt="Hero Image" width={1000} height={1000} className=" opacity-100 justify-center  w-[400px] h-[448px] md:hidden" />
        <div className="my-8 gap-3 grid-cols-2  grid sm:grid-cols-3 items-center justify-center ">
                    <div >
                        <Counter target={200} />
                        <span className="text-sm text-gray-400">International Brands
                        </span>
                    </div>
                    <div className="counter-container">
                        <Counter target={200} />
                        <span className="text-sm text-gray-400">High-Quality Products</span>
                    </div>
                    <div className="counter-container">
                        <Counter target={3000} />
                        <span className="text-sm text-gray-400">Happy Customers</span>
                    </div>
                </div>
      </div>
    </section>
  );
}

export default Hero;



