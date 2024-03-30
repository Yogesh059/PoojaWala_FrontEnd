import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import payment from "./payment.png";

const Container = styled.div`
  width: 100vw;
  height: 85vh;
  color: #f8e6e1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -7px;
  margin-right: 2px;
`;
const Wrapper = styled.div`
  width: 60vw;
  padding: 10px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #503c3c;

  border: 2px solid #f8e1e6;
  box-shadow: 0 8px 14px 0 rgba(31, 38, 135, 0.17);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  @media screen and (max-width: 450px) and (min-width: 325px) {
    height: 80vh;
    width: 90vw;
  }
`;

const Title = styled.h1`
  display: flex;
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  @media screen and (max-width: 450px) and (min-width: 325px) {
  font-size: 20px;
  }
`;
const Image = styled.img`
  display: flex;
  align-items: center;
  margin-top: 80px;
  height: 350px;
  width: 300px;
  @media screen and (max-width: 450px) and (min-width: 325px) {
  
  }
`;

const Donation = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>
            Support our cause to unite unmarried individuals in need through
            your kind donations
          </Title>
          <Image src={payment} className="logo" alt="Home" />
        </Wrapper>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Donation;
