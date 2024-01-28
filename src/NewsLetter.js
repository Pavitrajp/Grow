import React from "react";

const NewsLetter = () =>{
    return(
        <>
            <div className="bg-[#2699fb] p-4">
                <div className="max-w-[1240px] md:flex mx-auto justify-between py-[50px]">
                    <div className="m-2">
                        <div className="text-white font-bold text-[20px] md:text-4xl">Want to learn latest I.T skills</div>
                        <span className="text-white">Sign up to our newsletter and stay up to date</span>
                    </div>
                    <div className="m-2">
                        <input type="text" className="p-3 mr-2 rounded text-slate-600" placeholder="Email"/>
                        <button className="bg-black text-white p-3 rounded mt-3">Get started</button>
                        <br/>
                        <div className="text-white">We care about the protection of your data. Read our<br/> <a className="text-black">Privacy Policy.</a></div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default NewsLetter;