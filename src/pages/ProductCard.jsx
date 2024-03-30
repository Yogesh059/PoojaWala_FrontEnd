import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getProduct } from "../service/productApi";
import { Add, DeleteForever, Remove } from "@material-ui/icons";
import { publicRequest } from "../requestMethods";

const ProductContainer = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden;
  margin-left: 10px;
  margin-bottom: 20px;
  // box-shadow:  1px 1px 5px #503c3c;  
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  @media screen and (max-width: 425px) and (min-width: 325px) {
    margin-left: 10px;
  }
  `;

const Container = styled.div`
display: flex;
flex-direction: column;
width: 70vw;
@media screen and (max-width: 1020px) and (min-width: 325px) {
  width: 91vw;
}

`;

const ProductDetail = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: auto;
  height: 250px;
  margin-right: auto;
  max-width: 200px;
  border-radius: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
   
  @media screen and (max-width: 425px) and (min-width: 325px) {
    height: 200px;
    width: auto;
    margin-left: 20px;

  }
`;

const Details = styled.div`
  padding: 20px;  
  display: flex;
  // margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #503c3c;
`;

const ProductId = styled.span`
  font-size: 16px;
  color: #000000;
`;


const ProductSize = styled.span`
  font-size: 14px;
  color: #666;
`;

const PriceDetail = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 525px) and (min-width: 325px) {
    align-items: center;
    
  }
  
`;

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 20px;
  margin-left: -60px;
`;

const Icon = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  height: 20px;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const ProductCart = ({ product, getUserProductsList }) => {
  const [pro, setPro] = useState();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const data = await getProduct(product.productId);
    setPro(data);
  };

  const deleteProduct = async () => {
    try {
      const res = await publicRequest.delete(`carts/${product.productId}`);
      if (res) {
        alert("An item has been deleted");
        getUserProductsList();
        window.location.reload();
      }
    } catch (e) {
      console.error("Error deleting product", e);
    }
  };

  return (
    <ProductContainer>
    <Container>
      <ProductDetail>
        <Image src={pro?.img} />
      
      {/* <DetailContainer>   */}
        <Details>
          <ProductName>{pro?.title}</ProductName>
          <br />
          <ProductId>ID: {product.productId}</ProductId>
          <br />
          <ProductSize>Pandit Preference: {product.panditType}</ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductPrice>Total: &nbsp;&nbsp;₹ {pro?.price * product.quantity}</ProductPrice>
      </PriceDetail>
      {/* </DetailContainer> */}

      </Container>
      <Icon>
        <DeleteForever onClick={deleteProduct} />
      </Icon>
    </ProductContainer>
  );
};

export default ProductCart;
