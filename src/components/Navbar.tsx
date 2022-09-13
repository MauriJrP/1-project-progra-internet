import { useState } from "react";

export default function Navbar(): JSX.Element {
    // add functionally to make the navbar responsive
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);


    return (
        //navbar of a portfolio website with tailwindcss
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Portafolio</span>
            </div>
            <div className="block lg:hidden" onClick={toggle}>
                <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            {open && <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                        Inicio
                    </a>
                    <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                        Acerca
                    </a>
                    <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
                        Contacto
                    </a>
                </div>
            </div>}
        </nav>


    );
}
