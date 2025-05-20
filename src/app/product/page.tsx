import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FeaturesSection from "../components/Feature-Section";
import Suggestion from "../components/Suggestion";
import ProductPage from "@/app/components/Product-Page";


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
