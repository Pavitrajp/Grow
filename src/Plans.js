import React from "react";
import first from "../src/assets/img/first.png";
import second from "../src/assets/img/second.webp";
import third from "../src/assets/img/third.jpeg"

const Plans = () =>{
    return(
        <>
            <div className="py-[100px] px-2">
                <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6 text-center justify-center">
                    <div className=" shadow hover:scale-105 duration-500 my-4"><img src={first} className="w-full"/></div>
                    <div className=" shadow bg-gray-100 hover:scale-105 duration-500 my-4"><img src={second} className="w-full"/></div>
                    <div className=" shadow hover:scale-105 duration-500 my-4"><img src={third} className="w-full"/></div>
                </div>
            </div>
        </>
    );
};
export default Plans;