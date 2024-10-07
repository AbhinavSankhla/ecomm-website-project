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
      <Featured bgColor={'bg-white'}/>
      <Featured bgColor={'bg-[#EAF1F5]'}/>
      <WhoWeAre/>
      <Facilities/>
      <Banner/>
      <Footer/>
    </>
  );
}