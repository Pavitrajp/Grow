
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className="bg-[#2699fb] p-4">
                <div className="max-w-[1240px] mx-auto flex justify-between items-center py-[16px]">
                    <div className="text-3xl font-bold">
                        WsCube Tech
                    </div>
                    {
                        toggle ?
                            <IoMdClose onClick={() => setToggle(!toggle)} className="text-white text-3xl md:hidden block" />
                            :
                            <IoMdMenu onClick={() => setToggle(!toggle)} className="text-white text-3xl md:hidden block" />
                    }


                    <ul className="hidden md:flex text-white gap-10 ">
                        <li>Home</li>
                        <li>Company</li>
                        <li>Resources</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    {/*Resposive menu*/}
                <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[100px] 
                        ${toggle ? 'left-[0]' : 'left-[-100%]'}
                    `}>
                    <li className="p-3">Home</li>
                    <li className="p-3">Company</li>
                    <li className="p-3">Resources</li>
                    <li className="p-3">About</li>
                    <li className="p-3">Contact</li>
                </ul>
            </div>
        </div >

        </>
    );
};
export default Header;
