import React, { useEffect } from "react";
import FeaturesSection from "@orgs/HomepageSections/FeaturesSection";
import Footer from "@mols/Footer";
import HeroSection from "@orgs/HomepageSections/HeroSection";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Ghostly - Home";
  }, []);

  return (
    <div className="w-full">
      <HeroSection />
      <div className="container mt-[100px] flex flex-col items-center">
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
