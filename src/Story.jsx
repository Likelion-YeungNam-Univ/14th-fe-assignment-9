import React from 'react'
import profile1 from './assets/pf.png'
import profile2 from './assets/pf.png'
import profile3 from './assets/pf.png'
import profile4 from './assets/pf.png'
import profile5 from './assets/pf.png'
import profile6 from './assets/pf.png'
import {useTheme} from './ThemeContext' //themecontext 추가

const StoryList = [ 
    {id:1, story: "id1", png:profile1},
    {id:2, story: "id2", png:profile2},
    {id:3, story: "id3", png:profile3},
    {id:4, story: "id4", png:profile4},
    {id:5, story: "id5", png:profile5},
    {id:6, story: "id6", png:profile6},
];
const Story = () => {
  const {isDarkMode} = useTheme(); //추가
  return (
    //테마 배경 전환
    <div className={`flex gap-10 pt-[10px] pl-[30px] p-4 overflow-x-auto transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {StoryList.map(story => ( 
        <div 
          key={story.id}
          className="flex flex-col items-center gap-0.1 flex-shrink-0 cursor-pointer"
        >
          <img 
            src={story.png} 
            alt={story.story} 
            className="w-16 h-15" 
          />

          {/* 다크모드 글자색 hover */}
          <div className={`text-[8px] font-semibold pr-[8px] whitespace-nowrap ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>
            {story.story}
          </div>
        </div>
      ))}
    </div>
  )
}
export default Story