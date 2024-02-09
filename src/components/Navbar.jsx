import { useState, useEffect } from 'react';
import { Desktop } from './navbar_Desktop';
import { Tablet } from './navbar_Tablet.jsx';
import { Mobile } from './navbar_Mobile.jsx';


export function Navbar() {
    const [t, setT] = useState((window.innerWidth <= 1000) && (window.innerWidth > 500));
    const [m, setM] = useState(window.innerWidth <= 500);
    const [d, setD] = useState(window.innerWidth > 1000);

    const handleResize = () => {
        setT(window.innerWidth <= 1000 && window.innerWidth > 500);
        setM(window.innerWidth <= 500);
        setD(window.innerWidth > 1000);
    };

    useEffect(() => {

        window.addEventListener('resize', handleResize);

    }, []);

    return (
        <>
            {(!t && !m) ? <Desktop /> : (t) ? <Tablet /> : <Mobile />}
        </>
    );
}
