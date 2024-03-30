import {
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addProductApi } from "../service/productApi";
import { useLocation, useNavigate } from "react-router";
import { publicRequest } from "../requestMethods";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Total = styled.div``;

const Subtotal = styled.div`
  width: 40px;
  height: 20px;
  margin-top: 80px;
  border-radius: 10%;
  background-color: green;
  ${"" /* align-items: center; */}
  display: flex;
  text-align: center;
  padding: 1px 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
  width: 18%;
  max-width: 25%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  margin-right: 10px;
  margin-bottom: 15px;
  box-shadow: 1px 1px 5px #d4a537;
  border-radius: 19px;

  @media screen and (max-width: 550px) and (min-width: 325px) {
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    width: 90vw; /* Set width to 90vw for mobile screens */
    margin: 5px auto; /* Align in the center */
  }
  @media screen and (max-width: 768px) and (min-width: 550px) {
    display: flex;
    flex-wrap: wrap;
    margin: 5px;
    margin-left: 10px;
    width: 95vw;
    max-width: 45%;
    // height: 250px;
    display: flex;
    // align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
  }

  &:hover ${Info} {
    opacity: 1;
    border-radius: 19px;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  z-index: 2;
  // object-fit: cover;
  
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Button = styled.button`
  ${"" /* padding: 15px; */}
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  ${
    "" /* border: 2px solid teal;
background-color: white; */
  }
  ${
    "" /* cursor: pointer;
font-weight: 500;` */
  }
`;

const Title = styled.h1`
  background-color: rgba(255, 255, 255, 0.6);
  color: black;
  margin-bottom: 20px;
`;

const Product = ({ item }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity] = useState(1);
  const [panditType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        console.log(res);
        setProduct(res.data);
      } catch (e) {}
    };
    getProduct();
  }, [id]);

  
  const handleClick = async () => {
    // update cart
    const data = localStorage.getItem("user");
    console.log("data ,iss ", data);
    if (!data) {
      navigate("/login");
    } else {
      const data = await addProductApi({
        userId: JSON.parse(localStorage.getItem("user"))._id,
        productId: id,
        panditType: panditType,
        pricePerItem: product.price,
        quantity: quantity,
      });
      if (data) {
        window.location.reload();
        navigate("/cart");
      }
      navigate("/cart");
      alert("See already added Product");
    }
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Total>
          <Icon>
            <Button onClick={handleClick}>
              <ShoppingCartOutlined />
            </Button>
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}>
              <SearchOutlined />
            </Link>
          </Icon>
        </Total>
        <Subtotal>₨-{item.price}</Subtotal>
        <Title>{item.title}</Title>
      </Info>
    </Container>
  );
};
export default Product;
