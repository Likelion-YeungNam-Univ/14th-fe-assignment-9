import React from 'react'
import profile from './image_2.png'
import picture from './image_1.png'

const PostList = [
    {id:1, profile: profile, username:"username_1", follow:"팔로우", setting:"˙˙˙", post:picture, date:"3분"},
    {id:2, profile: profile, username:"username_2", follow:"팔로우", setting:"˙˙˙", post:picture, date:"16시간"},
];

const Post = () => {
    return (
        <>
        <div className="flex">
            <div className="flex-col max-w-fit p-3 space-y-8">
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>
                <path d="m12.71,2.29c-.39-.39-1.02-.39-1.41,0L3.29,10.29c-.19.19-.29.44-.29.71v9c0,1.1.9,2,2,2h3c.55,0,1-.45,1-1v-7h6v7c0,.55.45,1,1,1h3c1.1,0,2-.9,2-2v-9c0-.27-.11-.52-.29-.71L12.71,2.29Z"/>
                </svg>

                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M10 13H8c-2.76 0-5 2.24-5 5v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5m-5 5c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3zm7.73-11.49c-.08-.22-.19-.42-.3-.62v-.01c-.69-1.14-1.93-1.89-3.42-1.89-2.28 0-4 1.72-4 4s1.72 4 4 4c1.49 0 2.73-.74 3.42-1.89v-.01c.12-.2.22-.4.3-.62.02-.06.03-.12.05-.18.06-.17.11-.34.15-.52.05-.25.07-.51.07-.78s-.03-.53-.07-.78c-.03-.18-.09-.35-.15-.52-.02-.06-.03-.12-.05-.18M9 10c-1.18 0-2-.82-2-2s.82-2 2-2 2 .82 2 2-.82 2-2 2m6 0q-.165 0-.33-.03c-.22.66-.56 1.27-.98 1.81.41.13.84.22 1.31.22 2.28 0 4-1.72 4-4s-1.72-4-4-4c-.47 0-.9.09-1.31.22.43.53.76 1.14.98 1.81.11-.01.21-.03.33-.03 1.18 0 2 .82 2 2s-.82 2-2 2m1 3h-1.11c.6.58 1.08 1.27 1.44 2.03C17.83 15.2 19 16.46 19 18h-2v1c0 .35-.07.69-.18 1H20c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5"></path></svg>
            
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                <path d="m2.6 10.42 7.64 3.34 3.34 7.64c.16.37.52.6.92.6h.05a1 1 0 0 0 .9-.69l5.5-17c.12-.36.02-.75-.24-1.01a.98.98 0 0 0-1.01-.24L2.69 8.55c-.4.13-.67.49-.69.9-.02.42.22.8.6.97m15.85-4.86-4.09 12.63-2.44-5.59c-.1-.23-.28-.41-.52-.52L5.81 9.64l12.63-4.09Z"></path>
                </svg>
            
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
                fill={"currentColor"} viewBox={"0 0 24 24"}>
                <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                </svg>
            </div>
            
            <div className="space-y-20 w-fit mx-auto">
                {PostList.map((post) => (
                    <div id={post.id}>
                        <div className="flex justify-between p-2">
                            <div className="flex space-x-2">
                                <img src={post.profile}/>
                                <div>{post.username}</div>
                                <div className="font-thin text-sm text-gray-500">{post.date}</div>
                            </div>
                            <div className="flex space-x-2">
                                <div className="w-20 h-8 bg-gray-200 rounded-xl text-sm font-bold flex items-center justify-center">{post.follow}</div>
                                <div>{post.setting}</div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <img src={post.post} className="w-[500px] h-[500px]"/>
                            <div className="flex space-x-5">
                                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
                                fill={"currentColor"} viewBox={"0 0 24 24"}>
                                <path d="M11.29 20.66c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.3-2.28-5.85-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41zM5.21 6.16C6 5.38 7 4.99 8.01 4.99s2.01.39 2.79 1.17l.5.5c.39.39 1.02.39 1.41 0l.5-.5c1.56-1.56 4.02-1.56 5.59 0 1.56 1.57 1.56 4.02 0 5.58l-6.79 6.79-6.79-6.79a3.91 3.91 0 0 1 0-5.58Z"></path>
                                </svg>

                                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
                                fill={"currentColor"} viewBox={"0 0 24 24"}>
                                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10h9c.37 0 .71-.21.89-.54.17-.33.15-.73-.06-1.03l-1.75-2.53a10 10 0 0 0 1.93-5.9c0-5.51-4.49-10-10-10Zm6 16.43L19.09 20H12c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8c0 1.91-.69 3.75-1.93 5.21-.3.34-.32.85-.06 1.22Z"></path>
                                </svg>

                                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
                                fill={"currentColor"} viewBox={"0 0 24 24"}>
                                <path d="M17 5H6c-1.1 0-2 .9-2 2v5h2V7h11v3l5-4-5-4zm1 12H7v-3l-5 4 5 4v-3h11c1.1 0 2-.9 2-2v-5h-2z"></path>
                                </svg>

                                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
                                fill={"currentColor"} viewBox={"0 0 24 24"}>
                                <path d="m2.6 10.42 7.64 3.34 3.34 7.64c.16.37.52.6.92.6h.05a1 1 0 0 0 .9-.69l5.5-17c.12-.36.02-.75-.24-1.01a.98.98 0 0 0-1.01-.24L2.69 8.55c-.4.13-.67.49-.69.9-.02.42.22.8.6.97m15.85-4.86-4.09 12.63-2.44-5.59c-.1-.23-.28-.41-.52-.52L5.81 9.64l12.63-4.09Z"></path>
                                </svg>

                                <div className ="flex-grow"></div>

                                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                fill={"currentColor"} viewBox={"0 0 24 24"}>
                                <path d="M18 2H6c-1.1 0-2 .9-2 2v17c0 .36.19.69.5.87s.69.18 1 0l6.5-3.72 6.5 3.72c.15.09.32.13.5.13s.35-.04.5-.13c.31-.18.5-.51.5-.87V4c0-1.1-.9-2-2-2m0 8v9.28l-5.5-3.14a.98.98 0 0 0-.99 0l-5.5 3.14V4h12v6Z"></path>
                                </svg>
                            </div>
                            <div>{post.username}</div>
                        </div>
                    </div>
                ))}
            </div>
                
            

        </div>
        </>
    )
}

export default Post