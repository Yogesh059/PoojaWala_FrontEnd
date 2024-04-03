import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, Badge } from "@material-ui/core";
import {
  Menu as MenuIcon,
  ExitToAppOutlined,
  ShoppingCartOutlined,
  ShoppingBasket,
} from "@material-ui/icons";
import { getUserProducts } from "../service/productApi";
import home from "../assets/home.png";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { FormattedMessage, IntlProvider } from 'react-intl';
import pa from "../pa.json";
import en from "../en.json";
import hi from "../hi.json";

const messages = {
  en,
  hi,
  pa,
};

const Container = styled.div`
  color: #503C3C;
  height: 90px;
  margin-top: -5px;
  margin-bottom: 15px;
`;

const Content = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;

  @media screen and (max-width: 425px) and (min-width: 325px) {
    padding: 10px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIconContainer = styled.div`
  margin-top: 20px;
  margin-right: 10px;
  cursor: pointer;
  @media screen and (min-width: 665px) {
    display: none; /* Hide the MenuIconContainer for screen widths up to 786px */
  }
`;

const LogoImage = styled.img`
  height: 90px;
  width: auto;
  margin-top: 5px;
  margin-left: 10px;
  // display: block;

  @media screen and (max-width: 665px) {
    display: flex;
    align-item: flex-end;
    height:80px;
    margin-top: 20px;
    margin-left: 40px;
    width: auto;
  }
`;

const TitleContainer = styled.div`
  // flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;

  @media screen and (max-width: 650px) {
    flex: none;
    display: none;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  margin-right: 10px;
  cursor: pointer;
`;

const BoldText = styled.p`
  color: #503c3c;
  font-weight: bold;
  font-size: 16px;
  margin: 0;
`;

const StyledHeading = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: #503C3C;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  // margin-left: 300px;

  @media screen and (min-width: 325px) and (max-width: 833px) {
    display: none;
  }
`;

const Navbar = ({ length }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const [len, setLength] = useState();
  const [data, setData] = useState();
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    getProductItem();
    getSetuser();
  }, []);

  useEffect(() => {
    setLength(length);
  }, [length, len]);

  const getProductItem = async () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    
    if (!userData || !userData._id) {
      console.error("User data not found or missing _id property");
      return;
    }
  
    try {
      const data = await getUserProducts(userData._id);
      setLength(data?.length);
    } catch (error) {
      console.error("Error fetching user products:", error);
    }
  };

  const getSetuser = () => {
    const user = localStorage.getItem("user");
    setData(user);
  };

  const changeLanguage = (newLocale) => {
    setLocale(newLocale);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDrawerItemClick = (path) => {
    navigate(path);
    handleDrawerClose();
  };

  const handleOrder = () => {
    navigate("/orders");
  };

  const handleClick = () => {
    localStorage.clear();
    setLength(0);
    navigate("/");
    getSetuser();
  };

  const handleCart = () => {
    if (!data) {
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Container>
        <Content>
          
          <LogoContainer>
            <MenuIconContainer>
              <MenuIcon
                style={{ fontSize: "30px", color: "#503c3c" }}
                onClick={handleDrawerOpen}
              />
            </MenuIconContainer>
            <div>
              <Link to="/">
                <LogoImage src={home} className="logo" alt="Home" />
              </Link>
            </div>
          </LogoContainer>

          <TitleContainer>
            <StyledHeading>
              <FormattedMessage id="title" />
            </StyledHeading>
          </TitleContainer>

          <ActionsContainer>
            <div>
              <select onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="pa">Punjabi</option>
              </select>
            </div>
            {data ? (
              <IconButton title="Your orders" onClick={handleOrder}>
                <ShoppingBasket style={{ fontSize: "24px", color: "#503c3c" }} />
              </IconButton>
            ) : null}
            <Button onClick={handleCart}>
              <div>
                {data ? (
                  <Badge
                    badgeContent={len}
                    overlap="rectangular"
                    color="primary"
                    title="Items In Cart"
                  >
                    <ShoppingCartOutlined style={{ fontSize: "24px", color: "#503c3c" }} />
                  </Badge>
                ) : (
                  <Badge
                    badgeContent={null}
                    overlap="rectangular"
                    color="primary"
                    title="Items In Cart"
                  >
                    <ShoppingCartOutlined style={{ fontSize: "24px", color: "#503c3c" }} />
                  </Badge>
                )}
              </div>
            </Button>
            {!data ? (
              <>
                <Link to="/register">
                  <Button>
                    <BoldText><FormattedMessage id="register" /></BoldText>
                  </Button>
                </Link>
                <Link to="/login">
                  <Button>
                    <BoldText><FormattedMessage id="signIn" /></BoldText>
                  </Button>
                </Link>
                <Link to="/Video">
                  <Button>
                    <BoldText><FormattedMessage id="poojaTutorials" /></BoldText>
                  </Button>
                </Link>
              </>
            ) : (
              <Button onClick={handleClick} title="Logout">
                <ExitToAppOutlined style={{ fontSize: "24px" }} />
              </Button>
            )}
          </ActionsContainer>

        </Content>
      </Container>

      {/* Menu Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        style={{ zIndex: "999" }}
        onClick={handleDrawerClose}
      >
        <div style={{ textAlign: "right", padding: "10px" }}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          <ListItem button onClick={() => handleDrawerItemClick("/")}>
            <ListItemText primary={<FormattedMessage id="home" />} />
          </ListItem>
          <ListItem button onClick={() => handleDrawerItemClick("/cart")}>
            <ListItem>
              <div>
                {data ? (
                  <Badge
                    badgeContent={len}
                    overlap="rectangular"
                    color="primary"
                    title={<FormattedMessage id="itemsInCart" />}
                  >
                    <ShoppingCartOutlined style={{ fontSize: "24px" }} />
                  </Badge>
                ) : (
                  <Badge
                    badgeContent={null}
                    overlap="rectangular"
                    color="primary"
                    title={<FormattedMessage id="itemsInCart" />}
                  >
                    <ShoppingCartOutlined style={{ fontSize: "24px" }} />
                  </Badge>
                )}
              </div>
            </ListItem>
          </ListItem>
          <ListItem button onClick={() => handleDrawerItemClick("/register")}>
            <ListItemText primary={<FormattedMessage id="register" />} />
          </ListItem>
          <ListItem button onClick={() => handleDrawerItemClick("/login")}>
            <ListItemText primary={<FormattedMessage id="signIn" />} />
          </ListItem>
          <ListItem button onClick={() => handleDrawerItemClick("/Donation")}>
            <ListItemText primary={<FormattedMessage id="donation" />} />
          </ListItem>
          <ListItem button onClick={() => handleDrawerItemClick("/Video")}>
            <ListItemText primary={<FormattedMessage id="poojaTutorials" />} />
          </ListItem>
          {data && (
            <ListItem button onClick={handleClick}>
              <ListItemText primary={<FormattedMessage id="logout" />} />
            </ListItem>
          )}
               <ListItem>
              <select onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="pa">Punjabi</option>
              </select>
            </ListItem>
        </List>
      </Drawer>
    </IntlProvider>
  );
};

export default Navbar;
