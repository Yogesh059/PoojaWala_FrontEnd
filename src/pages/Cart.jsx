import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { publicRequest } from "../requestMethods";
import { Link } from "react-router-dom";
import { getUserProducts } from "../service/productApi";
import Summary from "./Summary";
import ProductCart from "./ProductCard";


const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;

  @media only screen and (max-width: 1024px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "tranparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

const TopText = styled.span`
  text-decoration: none;
  cursor: pointer;
  margin: 0px 10px;
  font-size: 20px;
  color: teal;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
`;



const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;


const Cart = () => {
  const [productList, setProductList] = useState();
  const [user, setUser] = useState();

  let totalPrice = 0;


  const userId = JSON.parse(localStorage.getItem("user"))._id;

  useEffect(() => {
    getUserProductsList();
  }, []);

  const getUserProductsList = async () => {
    const list = await getUserProducts(userId);
    const res = await publicRequest.get(`/users/find/${userId}`);
    setUser(res.data.username);
    setProductList(list);
  };

  return (
    <Container>
      <Navbar length={productList?.length} />
      <Announcement />
      <Wrapper>
        <Title>🕉️ Your Divine Collection</Title>
        <Top>
          <Link to="/">
            <TopButton>Explore More Spiritual Offerings</TopButton>
          </Link>
          <TopTexts>
            <TopText>🕉️ Divine Collection ({productList?.length})</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {productList?.map((product, index) => (
              <React.Fragment key={index}>
                {
                  <div style={{ display: "none" }}>
                    {" "}
                    {(totalPrice += product.quantity * product.pricePerItem)}
                  </div>
                }
                <ProductCart
                  key={product._id}
                  product={product}
                  totalPrice={totalPrice}
                  getUserProductsList={getUserProductsList}
                />
                <Hr key={`hr-${index}`} />
              </React.Fragment>
            ))}
          </Info>
          <Summary
            totalPrice={totalPrice}
            productList={productList}
            user={user}
          />
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
