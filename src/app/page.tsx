import AdBanner from "@/components/Home/AdBanner";
import AthleticsAboutSection from "@/components/Home/AthleticsAbout";
import Hero from "@/components/Home/Hero";
import UpcomingMatch from "@/components/Home/UpcomingMatch";

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
    </div>
  );
};

export default HomePage;
