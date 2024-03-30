import { Send } from "@material-ui/icons";
import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45vh;
  color: #ffffff;
  background-color: #503c3c;
  // border-bottom: 1px solid #503C3C;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-family: Comic Sans MS;
  font-size: 60px;
  margin-bottom: 10px;

  @media screen and (max-width: 500px) and (min-width: 325px) {
    font-size: 50px;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-wrap: wrap; 

  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) and (min-width: 325px) {
    font-size: 16px;
  }
`;

const InputContainer = styled.div`
  width: 70%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  // border: 1px solid lightgray;
`;

const Input = styled.input`
  border: 1px solid #000000;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #F8E6E1;
  color: #503c3c;
  border: 1px solid #000000;
  cursor: pointer;
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to send the email to the server
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Subscription successful!");
      } else {
        alert("Subscription failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>
        🎉 Subscribe now to receive daily exciting offers and divine Aartis of
        Bhagwan in your inbox! <br />
        🌟 Embrace the joy of savings and spiritual bliss. Don't miss out! 💌✨
        .
      </Desc>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">
            <Send />
          </Button>
        </InputContainer>
      </form>
    </Container>
  );
};

export default Newsletter;
