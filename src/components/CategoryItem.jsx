import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  width: 18%;
  min-width: 18%;
  max-width: 18%;
  margin: 3px 10px 15px;
  height: 50vh;
  position: relative;
  overflow: hidden;
  box-shadow: 1px 1px 5px #d4a537;
  border-radius: 19px;

  @media screen and (max-width: 515px) and (min-width: 325px) {
    min-width: 90%;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    height: 300px;
    width: 90vw; 
    margin: 5px auto; 
  }
  @media screen and (max-width: 768px) and (min-width: 515px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 300px;
    width: 90vw;
    min-width: 30vw;
    max-width: 30vw;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  transition: transform 0.3s ease;
  background-size: 100% 100%;
  @media screen and (max-width: 515px) and (min-width: 325px) {
    height: 300px;
  }

  ${Container}:hover & {
    transform: scale(1.1);
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
`;

const Title = styled.h1`
  background-color: rgba(255, 255, 255, 0.6);
  color: black;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  ${Container}:hover & {
    background-color: #503c3c;
    color: white;
    transform: scale(1.1);
  }
`;

const CategoryItem = ({ item }) => {
  if(!item) return null;

  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Book Your Pandit Now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
