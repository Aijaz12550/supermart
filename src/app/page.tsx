import { products } from "./assets/data";
import Arrival from "./components/Arrival";
import Banner from "./components/Banner";
import BeautyProducts from "./components/Beauty_Products";
import CategoryBrowser from "./components/CategoryBrowser";
import Fashion from "./components/Fashion";
import FeaturesSection from "./components/Feature-Section";
import Footer from "./components/Footer";
import GadgetAndAccessories from "./components/Gadget";
import HeroBanner from "./components/hero-banner";
import HomeLiving from "./components/HomeLiving";
import PromoCard from "./components/Promo-Card";

export default function Home() {
  return (
    <main>
      <div className="p-4">
        <HeroBanner />
        <CategoryBrowser />
        <PromoCard />
        <GadgetAndAccessories />
        <BeautyProducts />
        <Fashion/>
        <HomeLiving/>
        <FeaturesSection />
        <Arrival title="New Arrival" products={products} />
        <Banner />
      </div>
      <Footer />
    </main>
  );
}
