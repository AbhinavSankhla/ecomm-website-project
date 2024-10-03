import Banner from "./common/Banner";
import Facilities from "./home/Facilities";
import Featured from "./home/Featured";
import Footer from "./common/Footer";
import WhoWeAre from "./home/WhoWeAre";
import HeroSection from "./home/HeroSection";
import Navbar from "./common/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Featured/>
      <WhoWeAre/>
      <Facilities/>
      <Banner/>
      <Footer/>
    </>
  );
}