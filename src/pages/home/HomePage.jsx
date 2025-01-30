import Category from "../../components/categorySection/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homepageProductCard/HomePageProductCard";
import Layout  from "../../components/layout/Layout";
import Testimonial from "../../components/testmonials/Testimonials";
import Track from "../../components/track/Track";


const HomePage = () => {

  return (
  
    <Layout>
        <HeroSection/>
        <Category/>
        <HomePageProductCard/>
        <Track/>
        <Testimonial/>
    </Layout>
  )
}

export default HomePage