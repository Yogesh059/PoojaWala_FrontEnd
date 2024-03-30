import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { useLocation } from "react-router";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;


const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  console.log("cat is", cat);
  const [filters, setFilters] = useState({});
  const [sort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
