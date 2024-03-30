import { useLocation } from "react-router";
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Star } from 'react-feather';

const Suc = styled.div`
  font-size: 20px;
  display: flex;
  background-color: rgb(252,245,216);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
  width: 100vw;
  height: 100vh;
`;

const ContentBox = styled.div`
  background-color: rgb(252,245,216);
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 60px;
  text-align: center;
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  &:hover {
    color: teal;
    height: 25px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTextarea = styled.textarea`
  background-color: #FCF5D8;
  font: 16px Cursive;
  color: black;
  border: 3px solid teal;
  width: 80vw;
  padding: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  height: 40px;
  width: 150px;
  color: white;
  font: 20px Cursive;
  font-weight: 500;
  border: 2px solid teal;
  background-color: #503c3c;
  cursor: pointer;
  border-radius: 25px;

  &:hover {
    color: teal;
    background-color: white;
  }
`;

const Success = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating, feedback }),
      });

      if (response.ok) {
        console.log("Feedback submitted successfully!");
             } else {
        console.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <Suc>
      <ContentBox>
        <div>
          Thanks for choosing your Best Pandit. Our Team will contact you very soon.
        </div>
        <br />
        <div>
          Rate your experience:
          <StarContainer>
            {[1, 2, 3, 4, 5].map((value) => (
              <Star
                key={value}
                color={value <= rating ? 'teal' : 'gray'}
                onClick={() => handleRatingChange(value)}
              />
            ))}
          </StarContainer>
        </div>
        <br />

        <Container>
          <div>
            How was your experience placing the order:
            <StyledTextarea value={feedback} onChange={handleFeedbackChange} />
          </div>
        </Container>

        <Button onClick={handleSubmit}>Submit</Button>

      </ContentBox>
      <ContentBox>
        <div>
          Click here to &nbsp;
          <Link to="/" style={{ color: "MediumSeaGreen", textDecoration: "inherit" }}>
            Explore More Spiritual Offerings
          </Link>
        </div>
      </ContentBox>
    </Suc>
  );
};

export default Success;
