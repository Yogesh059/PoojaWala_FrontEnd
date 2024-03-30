import {
  Copyright,
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
} from "@material-ui/icons";
import XIcon from "@mui/icons-material/X";
import React from "react";
import styled from "styled-components";
import Dhe from "../assets/Dhe.png";
import Job360degree from "../assets/job360.png";
import Poojawala from "../assets/poojawala.png";
import VB from "../assets/VidyaBharti.png";
import Tredul from "../assets/Tredul.png";
import Tudu from "../assets/Tudu.png";
import Itr from "../assets/vb-itr.png";
import ViksitIndia from "../assets/viksit_india.png";
import sarvatr from "../assets/sarvatr.png";
import Alltemple from "../assets/alltemple.png";
import Swadeshi from "../assets/swadeshi.png";
import Rase from "../assets/rase.png";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #503c3c;
  background-color: #f8e6e1;
  padding-bottom: 20px;
`;

const Left = styled.div`
  margin: 0 30px 0;
`;

const Wrapper1 = styled.div``;

const Heading = styled.h2`
  display: flex;
  align-item: center;
  justify-content: left;
`;
const Map = styled.div``;

const StyledIframe = styled.iframe``;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  &:hover {
    transform: scale(1.1);
  }
`;
const SocialIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: #ebebeb;
  border-radius: 50%;
  font-size: 30px;
  color: black;
  transition: all 0.5s;
  cursor: pointer;

  &:hover::before,
  &:active::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fa7654;
    transition: all 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }

  &:hover {
    color: #fa2a1f;
    box-shadow: 0 0 5px #fa7654;
    text-shadow: 0 0 5px #fa7654;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px 0;
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-item: center;
  justify-content: space-between;
  list-style: none;
  // margin-top: -10px;
`;
const ListLeft = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  margin-left: -40px;
`;
const ListRight = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: end;
  // margin-left: 20px;
`;
const ListCenter1 = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  margin-left: 20px;
`;
const ListCenter2 = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  margin: 0px 20px 0px;
`;
const ListItem = styled.li`
  // color: white;
  margin: 10px 0 10px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Link = styled.a`
  color: #000000;
  font-size: 14px;
  font-weight: 900;
  text-decoration: none;
  &:hover {
    color: #fa2a1f;
    backgroud-color: #fa7654;
    z-index: 3;
    font-size: 16px;
    title: "Hover";
  }
`;

const Right = styled.div`
  margin: 0 30px 0;
`;
const ContactItem = styled.div`
  margin: 10px 0 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
`;
const Payment = styled.img`
  margin-top: 10px;
`;

const CopyRight = styled.div`
  height: 35px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #503c3c;
  color: #ffffff;
  margin-top: 10px;
`;

const Footer = () => {
  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleAddressClick = () => {
    alert("Department of Holistic Education");
  };
  return (
    <>
      <Container
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <Wrapper1>
          <Left>
            <Heading>Find us on Google Maps here</Heading>
            <Map>
              <StyledIframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.6606253608606!2d76.70608500958036!3d30.699823374494194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef39a32ed3c1%3A0x9ff15a51ad5117e9!2sDepartment%20of%20Holistic%20Education!5e0!3m2!1sen!2sin!4v1707117984398!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></StyledIframe>
            </Map>
            <SocialContainer>
              <SocialIcon color="#ffffff">
                <Facebook />
              </SocialIcon>
              <SocialIcon color="#ffffff">
                <a href="https://www.instagram.com/poojawala_" color="white">
                  <Instagram />
                </a>
              </SocialIcon>
              <SocialIcon color="#ffffff">
                <a href="https://twitter.com/PoojaWala_" color="white">
                  <XIcon />
                </a>
              </SocialIcon>
              <SocialIcon color="#ffffff">
                <Pinterest />
              </SocialIcon>
            </SocialContainer>
          </Left>
        </Wrapper1>

        <Center>
          <Heading>Useful Links</Heading>

          <List>
            <ListLeft>
              <ListItem>
                <Link href="https://www.dhe.org.in/">
                  <img
                    src={Dhe}
                    height={50}
                    width={50}
                    alt="Dhe"
                    title="Department Of Holistic Education"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://ep.sarvatr.co.in/">
                  <img
                    src={sarvatr}
                    height={50}
                    width={50}
                    alt="Sarvatr"
                    title="Sarvatr"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://vi.rase.co.in/">
                  <img
                    src={ViksitIndia}
                    height={50}
                    width={50}
                    alt="Viksit India"
                    title="Viksit India"
                  />
                </Link>
              </ListItem>
            </ListLeft>

            <ListCenter1>
              <ListItem>
                <Link href="https://itrchandigarh.org/">
                  <img
                    src={Itr}
                    height={50}
                    width={50}
                    alt="ITR Chandigarh"
                    title="ITR Chandigarh"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://tredul.in/">
                  <img
                    src={Tredul}
                    height={50}
                    width={50}
                    alt="Tredul"
                    title="Tredul"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="http://alltemples.org.in">
                  <img
                    src={Alltemple}
                    height={50}
                    width={50}
                    alt="All Temples"
                    title="All Temples"
                  />
                </Link>
              </ListItem>
            </ListCenter1>

            <ListCenter2>
              <ListItem>
                <Link href="https://swadeshibazar.co.in">
                  <img
                    src={Swadeshi}
                    height={50}
                    width={50}
                    alt="Swadeshi Bazar"
                    title="Swadeshi Bazaar"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://tudu.co.in/">
                  <img
                    src={Tudu}
                    height={50}
                    width={50}
                    alt="tudu"
                    title="tudu"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://jobs360degree.com/">
                  <img
                    src={Job360degree}
                    height={50}
                    width={50}
                    alt="Job 360 Degree"
                    title="Job 360 Degree"
                  />
                </Link>
              </ListItem>
            </ListCenter2>

            <ListRight>
              <ListItem>
                <Link href="https://www.poojawala.in/">
                  <img
                    src={Poojawala}
                    height={50}
                    width={50}
                    alt="Pooja Wala"
                    title="Pooja Wala"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.rase.co.in/">
                  <img
                    src={Rase}
                    height={50}
                    width={50}
                    alt="Shiksa Khumbh"
                    title="Shiksa Khumbh"
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://vidyabharti.net/">
                  <img
                    src={VB}
                    height={50}
                    width={50}
                    alt="Vidya Bharti"
                    title="Vidya Bharti"
                  />
                </Link>
              </ListItem>
            </ListRight>
          </List>
        </Center>
        <Right>
          <Heading>Contact</Heading>
          <ContactItem
            style={{ color: "red" }}
            onClick={() => handleAddressClick()}
          >
            <Room style={{ marginRight: "10px", fontWeight: "1200" }} />{" "}
            Department of Holistic Education
          </ContactItem>
          <ContactItem onClick={() => handlePhoneClick("+91 7627888222")}>
            <Phone style={{ marginRight: "10px" }} /> +91 7627888222
          </ContactItem>
          <ContactItem onClick={() => handlePhoneClick("+91 7903431900")}>
            <Phone style={{ marginRight: "10px" }} /> +91 7903431900
          </ContactItem>
          <ContactItem onClick={() => handleEmailClick("director@dhe.org.in")}>
            <MailOutline style={{ marginRight: "10px" }} /> director@dhe.org.in
          </ContactItem>
          <ContactItem onClick={() => handleEmailClick("dhe2021vb@gmail.com")}>
            <MailOutline style={{ marginRight: "10px" }} /> dhe2021vb@gmail.com
          </ContactItem>
          <Payment src="http://i.ibb.co/Qfvn4z6/payment.png" />
          <br />
          Developed by &#58; <br />
          <Link href="mailto:er.yogeshjangra1@gmail.com">Mr. Yogesh</Link>
          &nbsp;& &nbsp;
          <Link href="mailto:manisaroychowdhury@gmail.com">
            Ms. Manisa Roy Chowdhury
          </Link>
        </Right>
      </Container>
      <CopyRight>
        <Copyright /> 2024 Pooja Wala. &nbsp; All rights reserved.
      </CopyRight>
    </>
  );
};

export default Footer;
