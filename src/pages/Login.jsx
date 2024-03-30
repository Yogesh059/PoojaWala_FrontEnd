import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { auth, firebaseConfig } from "../firebase.config";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://st3.depositphotos.com/6395384/18766/i/450/depositphotos_187669526-stock-photo-agnihotra-is-a-vedic-yadnya.jpg")
      center;
  background-panditType: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  width: 25%;
  padding: 20px;

  @media screen and (max-width: 430px) and (min-width: 325px) {
    height: 40vh;
    width: 65vw;
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 20px;
  font-weight: 600;
  flex: 1;
  border-radius: 20px;
  border: none;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  border-radius: 20px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  border-radius: 15px;
  background-color: #503c3c;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Lin = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: red;
    background-color: white;
  }
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { isFetching } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      username: username,
      password: password,
    };

    try {
      const response = await publicRequest.post("/auth/login", body, config);

      if (response.status === 200) {
        const userData = response.data;
        localStorage.setItem("user", JSON.stringify(userData));
        alert(`Login successful`);
        navigate("/");
      } else {
        console.error("Login failed - response:", response);
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong.");
    }
  };

  const onGoogleAuthHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      console.log(user, "usersdsss");
  
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="Username"
              autoComplete=""
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              placeholder="Password"
              autoComplete=""
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button onClick={handleClick} type="submit" disabled={isFetching}>
              Login
            </Button>
           
            {error && <Error>{error}</Error>}
            <Link to="/register">
              <Lin>CREATE A NEW ACCOUNT</Lin>
            </Link>
            <br />
            <Link to="/ForgetPassword">
              <Lin>Forget Password</Lin>
            </Link>
          </Form>
          <Button onClick={onGoogleAuthHandler} >
              Sign in with Google
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
