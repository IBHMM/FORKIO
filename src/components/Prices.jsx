

export function PriceBlock({element}) {
    return (
        <section className="flex flex-col text-center w-[18%] min-w-[250px] transition duration-150 h-[500px] items-center justify-between hover:scale-y-[110%] hover:bg-[#463048]">

            <div className="h-[20%] bg-[rgba(255,255,255,0.2)] w-full flex items-center justify-center ">
                <p className="text-[#fff] text-2xl">{element.who}</p>
            </div>

            <div className="h-[80%] bg-[rgba(255,255,255,0.1)] w-full flex flex-col items-center justify-around">
                <div className="flex flex-col text-center items-center justify-between">
                    <p className="text-[#fff] text-[60px]">${element.price}</p>
                    <p className="text-[#fff]"> {element.duration} </p>
                    <div className="h-[5px] bg-[#8D81AC] mt-10 w-[100px]">  </div>
                    <p className="text-[#fff] mt-10"> {element.description} </p>
                </div>
                <div>
                    <button className="px-10  bg-[rgba(255,255,255,0.1)] h-[40px] rounded-2xl text-[#fff] transform transition-transform scale-100 hover:scale-90 focus:scale-90 active:scale-100"> 
                        PURCHASE
                    </button>
                </div>
            </div>
        
        </section>


    )
}