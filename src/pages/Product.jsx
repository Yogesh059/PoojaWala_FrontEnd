import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useNavigate, useParams } from "react-router";
import { publicRequest } from "../requestMethods";
import { addProductApi } from "../service/productApi";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 15px;
  margin-right: 15px;

  @media screen and (max-width: 425px) and (min-width: 325px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) and (min-width: 425px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 40vw;
  height: 80vh;
  margin-top: 25px;
  margin-left: 30px;

  @media screen and (max-width: 768px) and (min-width: 325px) {
    margin: 25px 5px 0px;
    height: 450px;
    width: 90vw;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 20px;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [panditType, setpanditType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    getProduct();
  }, [id]);

  const handleClick = async () => {
    const data = localStorage.getItem("user");
    if (!data) {
      navigate("/login");
    } else {
      const data = await addProductApi({
        userId: JSON.parse(localStorage.getItem("user"))._id,
        PanditId: id,
        panditType: panditType,
        pricePerItem: product.price,
      });
      if (data) {
        window.location.reload();
      }
      alert("An item has been added to Cart");
    }
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>₹ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Pandit Preference</FilterTitle>
              <FilterSize onChange={(e) => setpanditType(e.target.value)}>
                {product.panditType?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Button onClick={handleClick}>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
