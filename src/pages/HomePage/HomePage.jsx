import Header2 from '../../components/Header2/Header2'
import HomeNews from '../../components/HomeNews/HomeNews'
import PopularCourses from '../../components/Cards/Cards'
import HomeTest from '../../components/Blue/Blue'
import Stars from '../../components/Stars/Stars'
import PricingList from '../../components/PricingList/PricingList'

const HomePage = () => {
    return (
        <div>
            <Header2 />
            <HomeNews />
            <PopularCourses />
            <HomeTest />
            <Stars />
            <PricingList />
        </div>
    )
}

export default HomePage
