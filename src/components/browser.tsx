// import Image from 'next/image'
import FrameImage1 from '../../public/assets/style-1.jpeg'
import FrameImage2 from '../../public/assets/style-2.jpeg'
import FrameImage3 from '../../public/assets/style-3.jpeg'
import FrameImage4 from '../../public/assets/style-4.jpeg'

import Image from "next/image"
import Link from 'next/link';

export default function Brands(){
    return (
        <main className="max-w-screen-xl w-full  mx-auto bg-[#F2F0F1] rounded-3xl">   
         <div className="w-full  flex justify-center items-center mt-10 mb-1  max-w-screen-xl mx-auto ">
            {/* container */}
            <div className="w-[90%] md:w-[80%] bg-[#F0F0F0] p-3 md:p-0 rounded-[20px] ">
                
                <div className="flex justify-center  items-center">
                    <h1 className="text-black text-2xl md:text-4xl  font-extrabold pt-4">BROWSE BY DRESS STYLE</h1> 
                </div>
               {/* boxes container */}
               <Link href={"/products"}>
               <div className=' flex flex-col lg:flex-row lg:flex-wrap justify-center items-center my-8   '>
                     <div className='relative bg-white w-[90%] lg:w-[400px] h-[250px] mt-4 md:mt-0 rounded-[20px]'>
                        <Image src={FrameImage1} className='w-full h-full rounded-[20px]' width={1000}  height={1000} alt='images'/>
                     </div>
                     <div className='relative bg-white w-[90%] lg:w-[600px] h-[250px] mt-4 md:mt-0 md:ml-4 rounded-[20px]'>
                        <Image src={FrameImage2} className='w-full h-full rounded-[20px]' width={1000}  height={1000} alt='images'/>

                     </div>
                     <div className='relative bg-white w-[90%] lg:w-[600px] h-[250px] mt-2 rounded-[20px]'>
                        <Image src={FrameImage3} className='w-full h-full rounded-[20px]' width={1000}  height={1000} alt='images'/>

                     </div>
                     <div className='relative bg-white w-[90%] lg:w-[400px] h-[250px]  mt-2 md:ml-4 rounded-[20px]'>
                        <Image src={FrameImage4} className='w-full h-full rounded-[20px]' width={1000}  height={1000} alt='images'/>

                     </div>
                     
               </div>
               </Link>


            </div>
           </div>
         </main>
    )
}