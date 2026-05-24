import React from 'react'
import profile from './image_2.png'

const Message = () => {
    return (
        <>
        <div className="fixed bottom-4 right-6">
            <div className="flex items-center w-64 h-12 bg-white border justify-between border-gray-200 shadow-lg rounded-3xl px-4">
                <div className="flex gap-3">
                    <div className="relative">
                        <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
                        fill={"currentColor"} viewBox={"0 0 24 24"}>
                        <path d="m2.6 10.42 7.64 3.34 3.34 7.64c.16.37.52.6.92.6h.05a1 1 0 0 0 .9-.69l5.5-17c.12-.36.02-.75-.24-1.01a.98.98 0 0 0-1.01-.24L2.69 8.55c-.4.13-.67.49-.69.9-.02.42.22.8.6.97m15.85-4.86-4.09 12.63-2.44-5.59c-.1-.23-.28-.41-.52-.52L5.81 9.64l12.63-4.09Z"></path>
                        </svg>
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold">2</span>
                    </div>
                    <div className="font-semibold text-sm">메시지</div>
                </div>
                <img src={profile} className="w-7 h-7"/>
            </div>
        </div>
        </>
    )
}

export default Message