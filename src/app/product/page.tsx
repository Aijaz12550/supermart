import React from "react";
import ProductPage from "../components/Product-Page";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FeaturesSection from "../components/Feature-Section";
import Suggestion from "../components/Suggestion";

const Page = () => {
  return (
    <div>
      <ProductPage />
      <Suggestion />
      <FeaturesSection />
      <Banner />
      <Footer />
    </div>
  );
};

export default Page;
