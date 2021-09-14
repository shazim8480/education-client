import React from "react";
import CheckoutDetails from "../CheckoutDetails/CheckoutDetails";
import BottomFooter from "../Home/BottomFooter/BottomFooter";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import Subscribe from "../Home/Subscribe/Subscribe";
import TopNav from "../Home/TopNav/TopNav";

const Checkout = () => {
  return (
    <section>
      <TopNav />
      <Navbar />
      {/* Checkout details container */}
      <CheckoutDetails />
      {/* Checkout details container */}
      <Subscribe />
      <Footer />
      <BottomFooter />
    </section>
  );
};

export default Checkout;
