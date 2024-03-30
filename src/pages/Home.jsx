import Announcement from "../components/Announcement";
import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styles from "./scrollbarStyles.module.css";
import Gallery from "../components/Gallery";
import { GalleryItems } from "../data";
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

const Home = () => {
  return (
    <>
      <style>{`.${styles["::-webkit-scrollbar-track"]}`}</style>
      <style>{`.${styles["::-webkit-scrollbar-thumb"]}`}</style>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Gallery images={GalleryItems} />
      <Newsletter />
      {/* <Tutorial /> */}
      <Footer />
    </>
  );
};

export default Home;
