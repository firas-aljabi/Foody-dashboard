
const ReceptCard = () => {
  return (
    
    <div className="container flex flex-col bg-white h-5/6 justify-around px-3 border-r-2 border-dotted border-black py-5 gap-4">
        <div className="flex justify-between text-black">
            <h1 className="text-24 font-bold leading-36">Table1</h1>
            <h1 className="text-24 font-semibold leading-36">Order Id #12344</h1>
            <h1 className="text-24 font-semibold leading-36">Timer: <span className="text-[##C4C4C4]">12Min</span></h1>
        </div>
        <div className="flex justify-between gap-5  items-center">
            <a href="#" className="h-10 w-full bg-[#61B2E4] text-white flex justify-center items-center text-24 font-semibold rounded-lg">New</a>
            <h1 href="#" className="flex whitespace-nowrap text-black text-20 font-bold leading-30">Order Time:<span className="text-[#C4C4C4]">12:00 pm</span></h1>
        </div>
        <div className="shadow-md flex flex-col">
            <div className="border-b-2 border-dotted border-blue-300 ">
            <div className="border-l-8 border-l-[#61B2E4] px-5 flex flex-col justify-between gap-4 py-5 mb-5" >
                    <h1 className="text-20 font-bold leading-30 text-black">Burger mac beef <span className="text-[#DC0D28]">x3</span></h1>
                    <div className="details flex flex-col gap-4 whitespace-nowrap">
                        <div className="flex whitespace-nowrap">
                            <p className="text-20 font-normal leading-30 text-black">Note: </p>
                            <p className="text-20 font-normal leading-30 text-[#C4C4C4]">Note: lorem lorem lorem lorem lorem</p>
                        </div>
                        <div className="flex whitespace-nowrap">
                            <p className="text-20 font-normal leading-30 text-black">Add ingre: </p>
                            <p className="text-20 font-normal leading-30 text-[#C4C4C4]">Note: lorem <span className="text-[#DC0D28]">x3</span>lorem <span className="text-[#DC0D28]">x3</span>lorem <span className="text-[#DC0D28]">x3</span> </p>
                        </div>
                        <div className="flex whitespace-nowrap">
                            <p className="text-20 font-normal leading-30 text-black">Delete ingre: </p>
                            <p className="text-20 font-normal leading-30 text-[#C4C4C4]">Note: lorem lorem lorem lorem lorem</p>
                        </div>
                    </div>
                </div> 
            </div>

            
            <div className="border-l-8 border-l-[#61B2E4] px-5 flex flex-col justify-between gap-4 py-5 mt-5">
                    <h1 className="text-20 font-bold leading-30 text-black">Burger mac beef <span className="text-[#DC0D28]">x3</span></h1>
                    <div className="details flex flex-col gap-4 whitespace-nowrap">
                        <div className="flex whitespace-nowrap">
                            <p className="text-20 font-normal leading-30 text-black">Note: </p>
                            <p className="text-20 font-normal leading-30 text-[#C4C4C4]">Note: lorem lorem lorem lorem lorem</p>
                        </div>
                        <div className="flex whitespace-nowrap">
                            <p className="text-20 font-normal leading-30 text-black">Add ingre: </p>
                            <p className="text-20 font-normal leading-30 text-[#C4C4C4]">Note: lorem <span className="text-[#DC0D28]">x3</span>lorem <span className="text-[#DC0D28]">x3</span>lorem <span className="text-[#DC0D28]">x3</span> </p>
                        </div>
                        <div className="flex whitespace-nowrap">
                            <p className="text-20 font-normal leading-30 text-black">Delete ingre: </p>
                            <p className="text-20 font-normal leading-30 text-[#C4C4C4]">Note: lorem lorem lorem lorem lorem</p>
                        </div>
                    </div>
                </div> 
        </div>
        <div className="shadow-md p-2 w-full text-white flex items-center justify-center  text-center rounded-lg border border-gray-300">
            <a href="" className="w-full  bg-[#DC0D28] rounded-lg h-12 flex items-center justify-center">Ok</a>
        </div>
    </div>
  );
};

export default ReceptCard;
