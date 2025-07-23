// "use client";
import Navbar from "./components/navbar/navbar";
import LandingPage from "./components/landing_page";
import About from "./components/about";
import Tracks from "./components/tracks";
import FAQ from "./components/faq";
// import Contributors from "./components/contributors";
// import Schedule from "./components/schedule";
// import Resources from "./components/resources";
import Carousel from "./components/carousel/carousel";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="cursor-default bg-coffeeBg font-dmSerif">
      <Navbar />

      <LandingPage />
      <About />
      <Tracks />
      <FAQ />
      {/* <Schedule />
      <Contributors />
      <Resources /> */}
      <Carousel />
      <Footer />
    </div>
  );
}
