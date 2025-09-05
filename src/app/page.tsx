import AdBanner from "@/components/Home/AdBanner";
import AthleteSpotlight from "@/components/Home/AthleteSpotlight";
import AthleticsAboutSection from "@/components/Home/AthleticsAbout";
import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import UpcomingMatch from "@/components/Home/UpcomingMatch";
import Footer from "@/components/layout/Footer";

import React from "react";

const HomePage = () => {
  
  return (
    <div>
      {/* <AdBanner /> */}
      {/* <AthleticsAboutSection /> */}
      <Hero />
      <AdBanner />
      {/* <AthleticsAboutSection /> */}
      <UpcomingMatch/>
      <LatestNews/>
      <AthleteSpotlight/>
      <Footer/>
    </div>
  );
};

export default HomePage;
