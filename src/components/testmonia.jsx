
import {Piece} from './Piece.jsx'

const data = [
    {
        info: 'Sed vestibulum scelerisque urna, eu finibus leo facilisis sit amet. Proin id dignissim magna. Sed varius urna et pulvinar venenatis. ',
        src: '../src/icons/smash.png'
    },
    {
        info: 'Donec euismod dolor ut ultricies consequat. Vivamus urna ipsum, rhoncus molestie neque ac, mollis eleifend nibh.',
        src: '../src/icons/codedrops.png'
    },
    {
        info: 'In efficitur in velit et tempus. Duis nec odio dapibus, suscipit erat fringilla, imperdiet nibh. Morbi tempus auctor felis ac vehicula.  ',
        src: '../src/icons/w.png'
    },
    {
        info: 'Sed vestibulum scelerisque urna, eu finibus leo facilisis sit amet. Proin id dignissim magna. Sed varius urna et pulvinar venenatis. ',
        src: '../src/icons/pixel.png'
    },
    {
        info: 'Praesent ut eros tristique, malesuada lectus vel, lobortis massa. Nulla faucibus lorem id arcu consequat faucibus. ',
        src: '../src/icons/cb.png'
    },
    {
        info: 'Fusce pharetra erat id odio blandit, nec pharetra eros venenatis. Pellentesque porttitor cursus massa et vestibulum.',
        src: '../src/icons/tnw.png'
    },
]

export function Testmonia() {

    return(
        <section className="mt-10 flex flex-col iteams-center justify-beetween gap-20 tet py-16 mb-[-30px]">
            <section className='flex flex-col items-center gap-14'>
                <section className='mt-4'>
                    <p className='tetx-center w-full text-[400%] text-[#fff] text-center max-[500px]:text-[200%]'>People Are Talking About Fork</p>
                </section>

                <section className=' w-full flex flex-wrap items-center justify-center'>
                    {data.map((element, i) => {
                        return (
                            <Piece key={i} element={element} />
                        )
                    })}
                </section>
            </section>
            
            <section className='w-full flex justify-center text-center'>
                <p className='text-[14px] mb-0 text-[#A291A5] max-w-[70%]'>
                    Duis lobortis arcu sed arcu tincidunt feugiat. Nulla nisi mauris,
                    facilisis vitae aliquet id, imperdiet quis nibh. Donec eget elit eu libero
                    tincidunt consequat nec elementum orci. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. 
                </p>
            </section>

            <hr className='m-auto mt-0 w-[60%]'/>
        </section>
    )
}