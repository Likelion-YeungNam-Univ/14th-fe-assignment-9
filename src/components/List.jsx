import React from 'react'
import logo from '../images/YU_LikeLion.png'

const List = () => {
    return (
        <aside className="w-16 bg-[#003366] max-h-screen flex flex-col items-center py-4 text-white">
            <div className="mb-8">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer">
                    <img src={logo} alt="LOGO" className="w-full h-full object-contain" />
                </div>
            </div>

            <div className="flex-1 text-[20px] w-16">
                <div className="  hover:bg-[#004080] bg-[#003366] flex items-center justify-center py-1">sub</div>   
                <div className=" bg-white text-[#003366] flex items-center justify-center py-1">home</div> 
                <div className=" hover:bg-[#004080] bg-[#003366] flex items-center justify-center py-1">menu</div>   
                <div className=" hover:bg-[#004080] bg-[#003366] flex items-center justify-center py-1">all</div>   
                <div className=" hover:bg-[#004080] bg-[#003366] flex items-center justify-center py-1">Q&A</div>   
            </div> 

            <div className="flex justify-center mt-auto w-16 p-2 hover:bg-[#004080] cursor-pointer">quit</div>
        </aside>
    );
};

export default List;