
export function Desktop() {
    return (

        <nav className="flex flex-row mt-10 w-full items-center justify-between z-10 px-10">
            <section className="flex gap-5 items-center">
                <img src="../src/icons/logo.png"className="w-15 h-15 -[#8D81AC]" alt="" />
                <p className="text-[#8D81AC] text-3xl font-thin">FORKIO</p>
            </section>

            <section className="flex felx-row items-center text-[#8D81AC] font-bold">
                <span className="mr-10">Overwiew</span>
                <span className="mr-10">About Fork</span>
                <span className="mr-10"> Buying Options</span>
                <span className="mr-10">Support</span>

            <button className="bg-[#8D81AC] w-40 h-10 rounded-2xl text-white font-bold">
                Buy Now
            </button>
                                
            </section>

        </nav>
    )
}

