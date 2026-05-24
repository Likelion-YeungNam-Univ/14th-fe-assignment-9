import React from 'react'
import profile from './image_2.png'

const storyList = [
    {id:1, username: "내 스토리", profile:profile},
    {id:2, username: "username_1", profile:profile},
    {id:3, username: "username_2", profile:profile},
    {id:4, username: "username_3", profile:profile},
    {id:5, username: "username_4", profile:profile},
    {id:6, username: "username_5", profile:profile},
];

const Story = () => {
    return (
        <div className="flex justify-center space-x-5 p-4">
            {storyList.map(story => (
                <div id={story.id} className="justify-items-center">
                    <img src={story.profile} />
                    <div>{story.username}</div>
                </div>
            ))}
        </div>
    )
}

export default Story