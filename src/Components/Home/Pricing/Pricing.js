import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import TopNav from "../Home/TopNav/TopNav";
import Subscribe from "../Home/Subscribe/Subscribe";
import Footer from "../Home/Footer/Footer";
import BottomFooter from "../Home/BottomFooter/BottomFooter";
import PricingCard from "../PricingCard/PricingCard";

const Pricing = () => {
  return (
    <section>
      <TopNav />
      <Navbar />
      {/* Pricing Component here */}
      <PricingCard />
      {/* Pricing Component here */}
      <Subscribe />
      <Footer />
      <BottomFooter />
    </section>
  );
};

export default Pricing;
