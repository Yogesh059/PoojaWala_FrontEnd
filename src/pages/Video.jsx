import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-item: center;
  justify-content: space-between;
  margin-top: 40px;
`;
const Container2 = styled.div`
  // align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  border: 1px solid black;
`;
const Container3 = styled.div`
  // align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  border: 1px solid black;
`;

const Container4 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-item: center;
  justify-content: space-between;
`;

const Container5 = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: space-between;
  margin-left: 20px;
  border: 1px solid black;
`;

const Container6 = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: space-between;
  margin-left: 20px;
  border: 1px solid black;
`;
const Heading1 = styled.h2`
  color: black;
  text-shadow: 2px 2px 5px rgb(250, 118, 84);
  margin-left: 10px;
`;
const Heading2 = styled.h2`
  marginleft: 15rem;
  color: black;
  text-shadow: 2px 2px 5px rgb(250, 118, 84);
  margin-left: 10px;
`;
const Heading3 = styled.h2`
  color: black;
  text-shadow: 2px 2px 5px rgb(250, 118, 84);
  margin-left: 10px;
`;
const Heading4 = styled.h2`
  color: black;
  text-shadow: 2px 2px 5px rgb(250, 118, 84);
  margin-left: 10px;
`;
const Iframe = styled.div`
  margin-left: 0 20px 0;
  border: 1px solid black;
  width: 560px;

  @media screen and (max-width: 768px) {
    width: 450px;
  }

  /* Media query for screens smaller than 480px (e.g., smartphones) */
  @media screen and (max-width: 680px) {
    width: 400px;
  }
`;
const Video = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Container1>
          <Container2>
            <Heading1>Ganesh Aarti</Heading1>
            <Iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/h44RlUWwxNM"
                title="गणपती आरती Ganpati Aarti - सुखकर्ता दुखहर्ता Sukhkarta Dukhharta | Lambodar Pitambar Aarti - Lyrical"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Iframe>
          </Container2>
          <br />
          <Container3>
            <Heading2>Laxmi Aarti</Heading2>
            <Iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0J1aNK16sFM"
                title="ॐ जय लक्ष्मी माता | Laxmi Mata Aarti | Alka Yagnik | Om Jai Laxmi Mata | Lakshmi Mata Aarti"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Iframe>
          </Container3>
        </Container1>
        <br />
        <Container4>
          <Container5>
            <Heading3>श्री हनुमान चालीसा</Heading3>
            <Iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/DTlmuPNXGW0"
                title="श्री हनुमान चालीसा 🚩🙏Shree Hanuman Chalisa | Shankar Mahadevan | #hanumanbhajan #hanumanchalisa"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Iframe>
          </Container5>
          <br />
          <Container6>
            <Heading4>Gayatri Mantra</Heading4>
            <Iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/nwRoHC83wx0"
                title="Gayatri Mantra 108 times Anuradha Paudwal I Full Audio Song I T-Series Bhakti Sagar"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Iframe>
          </Container6>
        </Container4>
        <br />
        <Container4>
          <Container5>
            <Heading3>आरती प्रभु श्री राम की</Heading3>
            <Iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/IlunVIsAUzE"
                title="आरती प्रभु श्री राम की  - Bhakti Mandir Mangarh Aarti | Shri Ram Aarti"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Iframe>
          </Container5>
          <br />
          <Container6>
            <Heading4>काली माँ की आरती </Heading4>
            <Iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7Yqh2S-6e6E"
                title="अम्बे तू है जगदम्बे काली | Ambe Tu Hai Jagdambe Kali | काली माँ की आरती | Kali Maa Ki Aarti"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Iframe>
          </Container6>
        </Container4>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Video;
