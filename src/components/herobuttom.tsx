import Image from 'next/image'
import vector1 from '../../public/assets/vector1.png'
import vector2 from '../../public/assets/vector2.png'
import vector3 from '../../public/assets/vector3.png'
import vector4 from '../../public/assets/vector4.png'
import vector5 from '../../public/assets/vector5.png'

export default function HeroButtom() {
    return (
        <section>
        
                <div className="bg-[#0a0909] max-w-screen-xl grid grid-cols-3 sm:grid-cols-5 s text-white mx-auto ">
                    <Image src={vector1} alt='vector' className=" h-auto w-auto max-w-[100px] max-h-[26px] lg:max-h-9 my-5 md:my-11 text-3xl"/>
                    <Image src={vector2} alt='vector' className="h-auto w-auto max-w-[100px] max-h-[26px] lg:max-h-9 my-5 md:my-11 text-3xl" />
                    <Image src={vector3} alt='vector' className="h-auto w-auto max-w-[100px] max-h-[26px] lg:max-h-9 my-5 md:my-11 text-3xl" />
                    <Image src={vector4} alt='vector' className="h-auto w-auto max-w-[100px] max-h-[26px] lg:max-h-9 my-5 md:my-11 text-3xl" />
                    <Image src={vector5} alt='vector' className="h-auto w-auto max-w-[100px] max-h-[26px] lg:max-h-9 my-5 md:my-11 text-3xl" />
                </div>

            
        </section>
    )
}