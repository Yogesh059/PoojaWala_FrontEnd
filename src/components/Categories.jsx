import React, { useState } from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import CategoryItem from "./CategoryItem";
import { CategoriesData } from "../data";

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

const Categories = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchResultsMessage, setSearchResultsMessage] = useState("");
  const [visibleCategories, setVisibleCategories] = useState(10);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      setSearchResultsMessage("");
      setFilteredCategories([]);
    } else {
      handleSearch(e.target.value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchText);
    }
  };

  const handleSearch = (query) => {
    const filteredCategories = CategoriesData.filter((item) =>
      item.cat.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredCategories.length === 0) {
      setSearchResultsMessage("No results found.");
    } else {
      setSearchResultsMessage("");
    }

    setFilteredCategories(filteredCategories);
    setVisibleCategories(10);
  };

  const handleViewMore = () => {
    setVisibleCategories((prevVisible) => prevVisible + 10);
  };

  const handleViewLess = () => {
    setVisibleCategories(10);
  };

  return (
    <>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Search here your state for state wise pooja"
          value={searchText}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <TopButton onClick={() => handleSearch(searchText)}>
          <Search />
        </TopButton>
      </SearchContainer>
      {searchResultsMessage && (
        <ResultsMessage>{searchResultsMessage}</ResultsMessage>
      )}

      <Container>
        {searchText === "" || searchResultsMessage
          ? 
            CategoriesData.slice(0, visibleCategories).map(
              (category, index) => <CategoryItem key={index} item={category} />
            )
          : 
            filteredCategories
              .slice(0, visibleCategories)
              .map((category, index) => (
                <CategoryItem key={index} item={category} />
              ))}
      </Container>

      {!searchResultsMessage &&
  (filteredCategories.length > visibleCategories ||
    (searchText === "" && CategoriesData.length > visibleCategories)) && (
    <ViewMoreButton onClick={handleViewMore}>View More</ViewMoreButton>
  )}
{visibleCategories > 10 && (
  <ViewMoreButton onClick={handleViewLess}>View Less</ViewMoreButton>
)}
    </>
  );
};

export default Categories;
