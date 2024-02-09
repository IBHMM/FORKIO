import { useState } from "react";


export function Mobile() {

    const [menu, setM] = useState(false);
    const [select, setSelect] = useState(0);

    const handleC = () => {
        setM(!menu);
    }

    const handleCs = number => {
        setSelect(number);
    }

    return (
        <nav className="absolute w-full p-4 gap-5 flex flex-col items-center justify-between bg-[#27262A]">

            <section className="flex felx-row items-center justify-between gap-1 w-full">
                <img src="../src/icons/logo.png" className="w-15 h-15 text-[#8D81AC]" alt="" />

                <button className="bg-[#8D81AC] w-40 h-10 rounded-2xl text-white font-bold max-[300px]:w-[50%]">
                        Buy Now
                </button>

                <img src={(menu) ? '../src/icons/closemenu.svg' : '../src/icons/menu.svg'} alt="" onClick={handleC} />

            </section>

            {
                (menu) && 
                    <section className="w-full flex flex-col gap-5 items-start justify-between relative text-[#fff]">
                        <span className=" font-bold ml-10 hover:text-[#8D81AC] " onClick={() => handleCs(1)}>
                            {(select == 1) && <div className=" left-0 w-3 h-[37px] bg-[#8D81AC] absolute"></div>} 
                            Overwiew
                        </span>
                        <span className=" font-bold ml-10 hover:text-[#8D81AC] " onClick={() => handleCs(2)}>
                            {(select == 2) && <div className="left-0 w-3 h-[37px] bg-[#8D81AC] absolute"></div>} 
                            About Fork
                        </span>
                        <span className=" font-bold ml-10 hover:text-[#8D81AC] " onClick={() => handleCs(3)}>
                            {(select == 3) && <div className="left-0 w-3 h-[37px] bg-[#8D81AC] absolute"></div>} 
                            Buying Options
                        </span>
                        <span className=" font-bold ml-10 hover:text-[#8D81AC] " onClick={() => handleCs(4)}>
                            {(select == 4) && <div className="left-0 w-3 h-[37px] bg-[#8D81AC] absolute"></div>} 
                            Support
                        </span>
                    </section>
            }

        </nav>
    );
}
