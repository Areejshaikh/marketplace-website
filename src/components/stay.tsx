export default function StayData (){
    return(
        <div className="max-w-screen-xl  grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16  max-w-frame mx-auto bg-black rounded-[20px]">
        <div className="">
            <p className="text-white font-extrabold  text-[44px] text-center sm:text-left">
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



//     <main className="w-full flex justify-center items-center mb-14">
//     <div className="w-[90%] md:w-full md:h-[150px] rounded-[20px] p-10 bg-black flex flex-col md:flex-row justify-between items-center">
//         {/* left */}
//         <div className="w-full lg:w-[600px] ">
//         <h1 className="text-2xl text-white md:text-3xl font-serif font-extrabold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>

//         </div>
//         {/* right */}
//         <div className="space-y-4 mt-2">
//         <div 
//         className="  flex justify-start items-center bg-[#F0F0F0] md:w-[300px] 
//         h-[35px] pl-2 md:ml-0 hover:border-none rounded-full"> 
//         {/* <AiOutlineMail className="text-xl"/> */}
//          <input   placeholder={`Enter your email address`}  
//         className="bg-[#F0F0F0] w-[90%] rounded-full h-full  ml-2"/>
//         </div>
//         <button className="w-full  text-sm border bg-white py-2 px-10 rounded-[20px]" >Subscribe to Newsletter</button>

//         </div>
//     </div>
// </main>
    )
}