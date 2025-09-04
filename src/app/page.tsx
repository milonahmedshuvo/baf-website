import AdBanner from "@/components/Home/AdBanner";
import AthleticsAboutSection from "@/components/Home/AthleticsAbout";
import Hero from "@/components/Home/Hero";

import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* <AdBanner /> */}
      {/* <AthleticsAboutSection /> */}
      <Hero />
      <AdBanner />
      <AthleticsAboutSection />
    </div>
  );
};

export default HomePage;
