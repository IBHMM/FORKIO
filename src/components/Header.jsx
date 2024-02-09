import {Navbar} from '../components/Navbar.jsx'
import {Middle} from './Middele.jsx'

export function Header() {
    
    return (
        <section className="relative h-screen w-full bg-black hd">
            <Navbar />
            <Middle />
        </section>
    )
}

