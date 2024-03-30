import React, { useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router";
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
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  height: 90vh;
  padding: 20px;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  @media screen and (max-width: 450px) and (min-width: 325px) {
    height: 90vh;
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 300;
  @media screen and (max-width: 450px) and (min-width: 325px) {
    font-size: 16px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: #503c3c;
  color: white;
  cursor: pointer;
  @media screen and (max-width: 425px) and (min-width: 325px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    padding: 10px 10px;
    border-radius: 10px;
  }
`;

const RadioList = styled.div`
  margin-top: 10px;
  label {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
    input {
      margin-right: 10px;
    }
  }
`;

const Icon = styled.i`
  margin-left: 5px;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [User_Type, setUserType] = useState("user");
  const [passwordError, setPasswordError] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const navigate = useNavigate();

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordBlur = () => {
    if (password && !isPasswordValid(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, one special character, one number, and be between 8 to 16 characters long."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      fname === "" ||
      lname === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill in all fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else if (!termsChecked) {
      alert("Please accept the terms and conditions");
    } else if (passwordError) {
      alert(passwordError);
    } else if (phone.length < 10) {
      alert("Phone Number Should be Ten Digits");
    } else {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        username,
        email,
        password,
        phone,
        address,
        fname,
        lname,
        User_Type,
      };
      try {
        await publicRequest
          .post("/auth/register", body, config)
          .then((res) => {
            alert("Registered Successfully");
            navigate("/login");
          })
          .catch((e) => {
            alert(e);
          });
      } catch (e) {
        alert("Some error occurred");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const fetchCurrentLocation = () => {
    // Logic to fetch current location using Google Maps API
    // Once fetched, update the address state
    const currentAddress = "Current Address"; // Placeholder for fetched address
    setAddress(currentAddress);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input
              name="fname"
              value={fname}
              placeholder="First Name"
              onChange={(e) => setFname(e.target.value)}
            />
            <Input
              name="lname"
              value={lname}
              placeholder="Last Name"
              onChange={(e) => setLname(e.target.value)}
            />
            <Input
              name="username"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Password"
              onBlur={handlePasswordBlur}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Icon
              className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
              onClick={togglePasswordVisibility}
            ></Icon>
            <ErrorMessage>{passwordError}</ErrorMessage>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              name="cpassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Icon
              className={
                showConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye"
              }
              onClick={toggleConfirmPasswordVisibility}
            ></Icon>
            <Input
              name="Phone"
              value={phone}
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              name="address"
              value={address}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Icon
              className="fas fa-map-marker-alt"
              onClick={fetchCurrentLocation}
            ></Icon>
            <RadioList>
              <label>
                <input
                  type="radio"
                  value="user"
                  checked={User_Type === "user"}
                  onChange={() => setUserType("user")}
                />
                User
              </label>
              <label>
                <input
                  type="radio"
                  value="pandit"
                  checked={User_Type === "pandit"}
                  onChange={() => setUserType("pandit")}
                />
                Pandit
              </label>
            </RadioList>
            <Agreement>
              <Checkbox
                type="checkbox"
                checked={termsChecked}
                onChange={() => setTermsChecked(!termsChecked)}
              />
              By Creating an Account, I Consent to the Processing of my Personal
              data in accordance with the PRIVACY POLICY
            </Agreement>
            <Button onClick={handleSubmit} type="submit">
              CREATE
            </Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
