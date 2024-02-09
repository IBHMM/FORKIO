

export function Tablet() {
    return (
        <nav className="w-full p-4 gap-5 flex flex-col items-center bg-[#27262A] max-[500px]:none min-[1000px]:none">
            <section className="w-full flex flex-row justify-between items-center">
                <section className="flex gap-5 items-center">
                    <img src="../src/icons/logo.png" className="w-15 h-15 text-[#8D81AC]" alt="" />
                    <p className="text-[#8D81AC] text-3xl font-thin">FORKIO</p>
                </section>
                <section>
                    <button className="bg-[#8D81AC] w-40 h-10 rounded-2xl text-white font-bold">
                        Buy Now
                    </button>
                </section>
            </section>
            <section className="w-full flex flex-row justify-center items-center text-[#8D81AC] max-[600px]:text-[70%]">
                <span className="mr-10">Overwiew</span>
                <span className="mr-10">About Fork</span>
                <span className="mr-10">Buying Options</span>
                <span className="mr-10">Support</span>
            </section>
        </nav>
    );
}
