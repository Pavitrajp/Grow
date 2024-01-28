import React from "react";
import Typed from 'react-typed';

const Banner = () => {
    return (
        <>
            <div className="bg-[#2699fb] w-full py-[100px]">
                <div className="max-w-[1240px] mx-auto text-center font-bold my-[70px]">
                    <div className="text-xl md:text-3xl md:p-[20px]">
                        Learn with us
                    </div>
                    <div className="text-3xl text-white md:text-[60px] md:p-[10px]">Grow with us</div>
                    <div className="text-white text-[20px] md:text-[40px] md:p-[20px]">Learn
                    <Typed
                    className="pl-3"
                    strings={['Web Development','Digital Marketing','Ethical Hacking']}
                    typeSpeed={100}
                    backSpeed={120}
                />
                    </div>
                    <button className="bg-black text-white p-3 rounded mt-3">Get started</button>
                </div>
            </div>
        </>
    );
};
export default Banner;