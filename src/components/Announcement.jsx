import React from 'react';
import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;
const Container = styled.div`
  height: 30px;
  background-color: #f8e6e1;
  color: #503C3C;
  font-size: 14px;
  font-weight: 900;
  overflow: hidden;
  white-space: nowrap;
`;

const MarqueeText = styled.div`
display: flex;
padding: 7px;

  
  animation: ${marquee} 60s linear infinite;
  animation-play-state: running;

  :hover {
    color: green;
    animation-play-state: paused; /* Pause animation on hover */
  }
`;

function Announcement() {
  return (
    <Container>
      <MarqueeText>
        Special Offers on selected pooja! Till 31 March.. All Poojas and Rituals are at Rs. 2100
      </MarqueeText>
    </Container>
  );
}

export default Announcement;
