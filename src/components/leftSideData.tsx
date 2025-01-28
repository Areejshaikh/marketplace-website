import { MdOutlineChecklistRtl } from "react-icons/md";
import { HiChevronRight } from "react-icons/hi";
import Link from "next/link"
import { Button } from "./ui/button";
export default function LeftSideData() {
    return (
<div>
        <div className="hidden py-4 text-gray-800 md:flex justify-left text-center">
          <Link className="text-sm" href="/">Home</Link>
          <span className="px-4  text-xl">

            <HiChevronRight /> </span>
          <Link className="text-sm" href="/">Shop</Link>
        </div>
        <div className="hidden md:block min-w-[300px]  max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
          <div className="flex mx-auto justify-between text-center items-center">
            <h4 className="font-bold text-lg">Filters</h4>
            <MdOutlineChecklistRtl className="font-bold text-2xl" />
          </div>
          <div className=" min-w-[30px]  max-w-[295px] border border-black/10"></div>
          <div className="text-black/30 space-y-4">
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'}>T-shirts</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'}>Shorts</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'}>Shirts</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'}>Hoodie</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'}>jeans</Link>
              <HiChevronRight />
            </div>
          </div>
          <div className=" min-w-[30px]  max-w-[295px] border border-black/10"></div>
          <div className="flex mx-auto justify-between text-center items-center">
            <Link href={'/'} className="text-xl font-semibold">Prices</Link>
            <HiChevronRight />
          </div>
        
          {/* <div className=" min-w-[30px] min-h-2 rounded-xl max-w-[295px] border border-black/10"></div> */}

          <div className=" min-w-[30px]  max-w-[295px] border border-black/10"></div>
          {/* Colors */}
          <div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'} className="text-xl font-semibold">Colors</Link>
              <HiChevronRight />
            </div>
            <button className="w-10 h-10 border ml-4 bg-red-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-blue-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-green-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-yellow-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-gray-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-indigo-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-purple-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-pink-800 rounded-full"></button>
          </div>
          <div className=" min-w-[30px]  max-w-[295px] border border-black/10"></div>
          {/* Size */}
          <div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'} className="text-xl font-semibold">Size</Link>
              <HiChevronRight />
            </div>
            <div>
              <button className="w-full md:w-28  my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">XX-Small</button>
              <button className="w-full md:w-28  my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">X-Small</button>
              <button className="w-full md:w-28   my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">small</button>
              <button className="w-full md:w-28   my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">Medium</button>
              <button className="w-full md:w-28   my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">Large</button>
              <button className="w-full md:w-28   my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">X-Large</button>
              <button className="w-full md:w-28   my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">XX-Large</button>
              <button className="w-full md:w-28   my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">Xl</button>
            </div>
          </div>
          <div className=" min-w-[30px]  max-w-[295px] border border-black/10"></div>
          {/* Dress Style */}
          <div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'} className="text-xl font-semibold">Dress Style</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={"/product/products"}>T-shirts</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={"/product/products"}>Shorts</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={"/product/products"}>Hoodie</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={"/product/products"}>Shirts</Link>
              <HiChevronRight />
            </div> <div className="flex mx-auto justify-between text-center items-center">
              <Link href={"/product/products"}>Jeans</Link>
              <HiChevronRight />
            </div>
          </div>
          {/* Button */}
          <div className="py-10 relative items-center text-center">
           <Button>Apply Filter</Button>
    
          </div>

        </div>

      </div>

)
}