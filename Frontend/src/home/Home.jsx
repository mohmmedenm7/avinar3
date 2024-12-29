import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Course from "../components/Course";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Course/>
      <Footer />
    </>
  );
}

export default Home;
