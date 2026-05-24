import React from 'react'
import WebtoonCard from './WebtoonCard'
import SectionHeader from './SectionHeader'
import img from "../assets/webtoon.jpg";

const webtoonList = [
    {
        id: 1,
        image: img,
        title: "소녀의 세계",
        author: "모랑지",
        rating: "9.97",
    },
    {
        id: 2,
        image: img,
        title: "마루는 강쥐",
        author: "모죠",
        rating: "9.95",
    },
    {
        id: 3,
        image: img,
        title: "연애혁명",
        author: "232",
        rating: "9.91",
    },
    {
        id: 4,
        image: img,
        title: "바른연애 길잡이",
        author: "남수",
        rating: "9.98",
    },
    {
        id: 5,
        image: img,
        title: "독립일기",
        author: "자까",
        rating: "9.90",
    },
]

const WebtoonSection = () => {
    return (
        <section className="px-8 py-10">
            <SectionHeader />

            <div className="grid grid-cols-5 gap-4">
                {webtoonList.map((webtoon) => (
                    <WebtoonCard
                        key={webtoon.id}
                        image={webtoon.image}
                        title={webtoon.title}
                        author={webtoon.author}
                        rating={webtoon.rating}
                    />
                ))}
            </div>
        </section>
    )
}


export default WebtoonSection