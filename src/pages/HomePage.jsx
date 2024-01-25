import React from "react";
import Footer from "../components/Footer";
import SpotSection from "../components/SpotSection";
import FeaturedSection from "../components/FeaturedSection";
import AtlasSection from "../components/AtlasSection";
import WebinarSection from "../components/WebinarSection";
import SolutionsSections from "../components/SolutionsSections";
import StrechSection from "../components/StrechSection";
import SpotHomeSection from "../components/SpotHomeSection";
import ExploreSection from "../components/ExploreSection";

function HomePage() {
  return (
    <div>
      <ExploreSection />
      <SpotHomeSection />
      {/* <StrechSection /> */}
      <SolutionsSections />
      <WebinarSection />
      <AtlasSection />
      <FeaturedSection />
      <SpotSection />
      <Footer />
    </div>
  );
}

export default HomePage;
