import React from 'react';
import styled from "styled-components";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { GalleryItems } from '../data';

const Heading = styled.h2`
font-family: "Comic Sans MS", "Comic Sans", cursive;
color: black;
text-align: center;
text-shadow: 1px 1px 5px rgb(250, 118, 84);
`;

const Container = styled.div`
  width: 100%;
  height: 425px;
  position: relative;
  margin: 20px 0 20px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  
  // background-color: #7C93C3  ;
  white-space: nowrap;
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slider = styled.div`
  width: 320px;
  height: 420px;
  // background: #EEF5FF;
  background-image: linear-gradient(#fa7654,#ffffff);
  border: 1px solid #000000;
  border-radius: 12px;
  display: inline-block;
  margin-left: 5px;
  margin-right: 20px;
  box-shadow: 2px 2px 10px brown;
  transform: translateX(${props => props.$slideindex * -100}vw);
  transition: transform 5s ease;
  animation: slideAnimation 15s infinite;
  @keyframes slideAnimation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const Title = styled.p`
  margin: 5px 0px 5px 10px;
  font-weight: 700;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: 16px;
  margin-top: 10px;
`;

const Description = styled.p`
  opacity: 0.9;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: 13px;
  margin-left: 10px;
`;

const Item = styled.div`
  width: 100%;
  height: 220px;
  background-color: rgb(240 240 240 / 80%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ChevronLeft = styled(MdChevronLeft)`
  background: white;
  border-radius: 100%;
  position: absolute;
  opacity: 0.5;
  z-index: 999;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 12%);
  cursor: pointer;
  left: 0;

  &:hover {
    opacity: 1;
  }
`;

const ChevronRight = styled(MdChevronRight)`
  background: white;
  border-radius: 100%;
  position: absolute;
  opacity: 0.5;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 12%);
  cursor: pointer;
  right: 0;

  &:hover {
    opacity: 1;
  }
`;

const Gallery = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
    <Heading>The Pooja performed by our Pandit</Heading>
    <Container>
      <ChevronLeft size={40} onClick={slideLeft} />
      <Wrapper id="slider">
        {GalleryItems.map((slide, index) => (
          <Slider key={index}>
            <Item style={{ backgroundImage: `url(${slide.img})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat',  height: '320px', objectFit: 'fill', opacity: '1' }} />
            <Title>{slide.title}</Title>
            <Description>{slide.descrption}</Description> {/* Corrected description typo */}
          </Slider>
        ))}
      </Wrapper>
      <ChevronRight size={40} onClick={slideRight} />
    </Container>
    </>
  );
};

export default Gallery;
