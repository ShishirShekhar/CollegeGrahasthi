// Import all the required components
import Hero from "../components/Home/Hero/Hero";
import Usp from "../components/Home/Usp/Usp";
import Sample from "../components/Home/Sample";
import Info from "../components/Home/Info";
import Stats from "../components/Home/Stats/Stats";
import Ratings from "../components/Home/Ratings/Ratings";
import Footer from "../components/Footer/Footer";
// Import all the required data
import data from "../data";
// Import all the required image
import cg from "../img/cg.png"

const Home = () => {
    return (
        <>
            <Hero />
            <Usp />
            <Sample />
            <Info 
                title={data.home[0].title}
                content={data.home[0].content}
                img={cg}
                left={false}
                className="w-full sm:w-1/2 sm:pl-8 lg:pl-16"
            />
            <Stats />
            <Info
                title={data.home[1].title}
                content={data.home[1].content}
                img={cg}
                left={true}
                button="Learn more"
                className="w-full sm:w-1/2 sm:pl-8 lg:pl-16"
            />
            <Ratings />
            <Footer />
        </>
    )

}

export default Home;
