import React from 'react'

const Head = () => {
    return (
        <>
            <div className="p-4 w-30 h-20 flex justify-between items-center">
                <svg  xmlns="http://www.w3.org/2000/svg" width={30} height={60} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                <path d="M11 17v4h2v-8h8v-2h-8V3h-2v8H3v2h8v4"/>
                </svg>

                <div className= "text-3xl">Instagram</div>
                
                <div className="flex space-x-2 items-center">
                    <button className="border bg-stone-300 hover:bg-stone-400 text-white rounded-xl w-20 h-10">Logout</button>
                    <svg  xmlns="http://www.w3.org/2000/svg" width={30} height={60} 
                    fill={"currentColor"} viewBox={"0 0 24 24"}>
                    <path d="M13.12 12.76 12 10.5l-1.12 2.26-2.38.21 1.85 1.85-.82 2.68L12 15.85l2.47 1.65-.82-2.68 1.85-1.85z"/><path d="m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5a1 1 0 0 0-.3-.2l-.09-.03a.9.9 0 0 0-.27-.05c-.02 0-.04-.01-.05-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z"/>
                    </svg>

                    <svg  xmlns="http://www.w3.org/2000/svg" width={30} height={60} 
                    fill={"currentColor"} viewBox={"0 0 24 24"}>
                    <path d="M11.29 20.66c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.3-2.28-5.85-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41zM5.21 6.16C6 5.38 7 4.99 8.01 4.99s2.01.39 2.79 1.17l.5.5c.39.39 1.02.39 1.41 0l.5-.5c1.56-1.56 4.02-1.56 5.59 0 1.56 1.57 1.56 4.02 0 5.58l-6.79 6.79-6.79-6.79a3.91 3.91 0 0 1 0-5.58Z"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Head