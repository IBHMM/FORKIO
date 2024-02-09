

export function Piece({element}) {

    return (
        <div className="flex flex-col items-center w-[33%] justify-center mb-5 gap-10 min-w-[230px]">
            <img src={element.src} alt="" />
            <p className="max-w-[350px] text-[17px] text-[#fff] font-[Lato] text-center ">
                {element.info}
            </p>
        </div>
    )
}