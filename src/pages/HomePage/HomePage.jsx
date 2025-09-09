import React from 'react'
import Header2 from '../../components/Header2/Header2'
import HomeNews from '../../components/HomeNews/HomeNews'
import PopularCourses from '../../components/Cards/Cards'
import HomeTest from '../../components/Blue/Blue'

const HomePage = () => {
    return (
        <div>
            <Header2 />
            <HomeNews />
            <PopularCourses />
            <HomeTest />
        </div>
    )
}

export default HomePage
