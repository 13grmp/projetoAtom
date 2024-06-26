'use client'

import { useState } from 'react';
import Link from 'next/link';
import { IoIosSearch, IoIosMenu, IoIosClose } from "react-icons/io";

const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-[#290742] text-white py-4 z-[100] ">
            <div className='flex justify-center'>
                <div className='flex justify-between items-center w-[70%]'>
                    <div className="text-2xl font-bold flex">The Blog<div className='text-[#4FFF4B]'>.</div></div>
                    <div className="hidden lg:flex space-x-4">
                        <Link href="#home" className="hover:text-[#4FFF4B] font-bold flex items-center">
                            <div className='border-s-[3px] border-[#4FFF4B] h-4  me-1'></div>Home
                        </Link>
                        <Link href="#sobre" className="hover:text-[#4FFF4B]">Sobre</Link>
                        <Link href="#categoria" className="hover:text-[#4FFF4B]">Categorias</Link>
                        <Link href="#contact" className="hover:text-[#4FFF4B]">Contato</Link>
                    </div>
                    <div className="hidden lg:flex">
                        <input
                            type="text"
                            placeholder="Buscar"
                            className="pl-3 pr-8 py-2 rounded-sm bg-[#170027]"
                        />
                        <button className="right-1 top-1 bg-[#9e6dc2] p-2 px-4  rounded-e-sm">
                            <IoIosSearch />
                        </button>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-white p-2 focus:outline-none">
                            {menuOpen ? <IoIosClose size={20} /> : <IoIosMenu size={20} />}
                        </button>
                    </div>
                     {/* menu hamburguer */}
                    {menuOpen && (
                        <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#290742] text-white flex flex-col items-center space-y-4 py-4">
                            <Link href="#home" className="hover:text-[#4FFF4B]" onClick={toggleMenu}>Home</Link>
                            <Link href="#sobre" className="hover:text-[#4FFF4B]" onClick={toggleMenu}>Sobre</Link>
                            <Link href="#categoria" className="hover:text-[#4FFF4B]" onClick={toggleMenu}>Categorias</Link>
                            <Link href="#contact" className="hover:text-[#4FFF4B]" onClick={toggleMenu}>Contato</Link>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Buscar"
                                    className="pl-3 pr-8 py-2 rounded-sm bg-[#170027]"
                                />
                                <button className="right-1 top-1 bg-[#9e6dc2] p-2 px-4  rounded-e-sm">
                                    <IoIosSearch />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
