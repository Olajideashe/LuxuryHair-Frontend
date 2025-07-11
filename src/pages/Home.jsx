import FeaturedCollections from "../components/featuredCollection/FeaturedCollections"
import Features from "../components/features/Features"
import Footer from "../components/footer/Footer"
import HairCosmetics from "../components/haircosmetics/HairCosmetics"
import Header from "../components/header/Header"
import HeroCarousel from "../components/heroCarousel/HeroCarousel"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Subscribe from "../components/subscribe/Subscribe"
import Testimonial from "../components/testimonial/Testimonial"

const Home = () => {
  return (
    <>
      <Header />
      <HeroCarousel />
      <HairCosmetics />
      <FeaturedCollections />
      <Features />
      <NewArrivals />
      <Testimonial />
      <Subscribe />
    </>
  )
}

export default Home