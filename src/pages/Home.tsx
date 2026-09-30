import AppPromoBanner from "../components/Home/AppPromoBanner";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import Home_4 from "../components/Home/Home_4";
import Home_5 from "../components/Home/Home_5";
import Home_6 from "../components/Home/Home_6";
import PopularProducts from "../components/Home/PopularProducts";

const Home = () => {
    return (
        <div className="min-h-screen w-full mx-auto">
            <Hero />
            <Features />
            <PopularProducts />
            <AppPromoBanner />
            <Home_4 />
            <Home_6></Home_6>
            <Home_5 />
        </div>
    );
};

export default Home;
