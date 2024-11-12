import React from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Menu from "../Components/Menu";
import Promotion from "../Components/Promotion";
import Reviews from "../Components/Reviews";
import Location from "../Components/Location";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <Promotion />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}

export default HomePage;
