import heroImage from '../../public/assets/hero1.jpeg';
import Image from "next/image";
import Counter from './counter';

function Hero() {
  return (
    <section className="grid bg-opacity-30 px-4 md:grid-cols-2 mx-auto w-full max-w-screen-xl bg-image pt-24 my-2 overflow-x-hidden">
      <div>
        <div>
          <h3 className="animate-fedeIn opacity-100 transition-opacity duration-900 ease-in-out text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 font-extrabold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h3>
        </div>
        <div className="flex">
          <p className="animate-fedeIn text-[14px] lg:text-base opacity-100 transition-opacity duration-500 ease-in-out">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
        </div>
        <div className="py-10  items-center text-center">
          <div className="px-12 py-4 rounded-full bg-black text-white shadow-lg hover:text-black duration-500 hover:bg-white text-center w-full mx-auto md:mx-0 md:w-52">
            View All
          </div>
        </div>
        <Image
          src={heroImage}
          alt="Hero Image"
          width={1000}
          height={1000}
          className="opacity-100 justify-center max-w-full h-auto block md:hidden"
        />
        <div className="gap-3 flex flex-wrap items-center justify-between my-24 mx-auto w-full max-w-screen-xl px-4">
          <div>
            <Counter target={200} />
            <span className="text-sm text-gray-400">International Brands</span>
          </div>
          <div>
            <Counter target={149} />
            <span className="text-sm text-gray-400">High-Quality Products</span>
          </div>
          <div>
            <Counter target={3000} />
            <span className="text-sm text-gray-400">Happy Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

