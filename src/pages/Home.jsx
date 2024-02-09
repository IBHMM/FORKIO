import {Header} from '../components/Header.jsx';
import {Present} from '../components/Present.jsx';
import {Features} from '../components/Features.jsx';
import {Testmonia} from '../components/testmonia.jsx'
import {Pricing} from '../components/Pricing.jsx';
import {Downland} from '../components/Downland.jsx'


export function Home() {

    return(
        <main className='flex flex-col p-0 m-0 font-[Montserrat]'>  
            <Header />
            <Downland />
            <Present />
            <Features />
            <Testmonia />
            <Pricing /> 
        </main>
    )
}