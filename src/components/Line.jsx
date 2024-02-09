export function Line({ data }) {
    return (
        <div className="flex gap-10 mb-5 flex-row w-full max-[500px]:flex-col max-[500px]-gap-0 max-[500px]:iteams-center max-[500px]:justify-center" >
            
            <div className="w-40 max-[500px]:w-full" >
                <img className="m-auto max-[500px]:m-auto" src={data.src} alt="" />
            </div>

            <div className="flex flex-col gap-2 w-[100%] max-[500px]:text-center">
                <p className="text-[17px]">{data.title}</p>
                <p className="w-[75%] text-[rgba(100,100,100,0.6)] max-[1200px]:w-full">{data.info}</p>
            </div>
        </div>
    );
}