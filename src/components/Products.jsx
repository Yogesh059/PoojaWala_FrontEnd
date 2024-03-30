import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import axios from "axios";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  border: 2px solid #503c3c;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 20px;
  width: 50%;
  transition: background-color 0.3s;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 20px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
`;

const TopButton = styled.button`
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: #503c3c;
  color: white;
  border: none;
  border-radius: 20px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const ResultsMessage = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

const ViewMoreButton = styled.button`
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: #503c3c;
  color: white;
  border: none;
  border-radius: 20px;
  margin: 20px auto;
  display: block;
`;

const Products = ({ cat }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResultsMessage, setSearchResultsMessage] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [viewMore, setViewMore] = useState(true);

  useEffect(() => {
    getProducts();
  }, [cat]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    if (value === "") {
      setSearchResultsMessage("");
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
      setSearchResultsMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const getProducts = async () => {
    try {
      const res = await axios.get(
        cat
          ? `https://pooja-wala.onrender.com/api/products?category=${cat}`
          : "https://pooja-wala.onrender.com/api/products"
      );
      setProducts(res.data);
      setFilteredProducts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = () => {
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filtered.length > 0) {
      setFilteredProducts(filtered);
      setSearchResultsMessage(`Showing results for: "${searchText}"`);
    } else {
      setSearchResultsMessage(`No results found for: "${searchText}"`);
    }

    setSearchText("");
  };

  const handleViewMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 10);
    setViewMore(false);
  };
  
  const handleLoadMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 10);
  };

  const handleViewLess = () => {
    setVisibleProducts(10);
    setViewMore(true);
  };

  return (
    <>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Search Your Favourite Pooja"
          value={searchText}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <TopButton onClick={handleSearch}>
          <Search />
        </TopButton>
      </SearchContainer>

      {searchResultsMessage && (
        <ResultsMessage>{searchResultsMessage}</ResultsMessage>
      )}

      <Container>
        {filteredProducts.slice(0, visibleProducts).map((item, index) => (
          <Product item={item} key={`${item.id}-${index}`} cat={cat} />
        ))}
      </Container>

      {!searchResultsMessage && filteredProducts.length > visibleProducts && (
  <>
    {viewMore ? (
      <ViewMoreButton onClick={handleViewMore}>View More</ViewMoreButton>
    ) : (
      <>
        <ViewMoreButton onClick={handleLoadMore}>Load More</ViewMoreButton>
        <ViewMoreButton onClick={handleViewLess}>View Less</ViewMoreButton>
      </>
    )}
  </>
)}

    </>
  )
};

export default Products;
