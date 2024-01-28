import React from "react";
import laptop from "../src/assets/img/laptop.jpeg";

const Experts = () =>{
    return(
        <>
            <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 my-10 p-4">
                <div className="col-span-1 md:w-[90%]">
                    <img src={laptop} className="w-full"/>
                </div>
                <div className="col-span-1 flex flex-col justify-center">
                    <div className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</div>
                    <div className="my-2">Smooth transition effect. Adjust the classes based on your styling needs and preferences Smooth transition effect. Adjust the classes based on your styling needs and preferences</div>
                    <button className="bg-black text-white p-3 rounded w-[30%]">Get started</button>
                </div>
            </div>
        </>
    ) 
}
export default Experts;