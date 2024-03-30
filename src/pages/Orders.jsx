import React, { useEffect, useState } from "react";
import { getAllOrder } from "../service/productApi";
import styled from "styled-components";
import OrderItem from "./OrderItem";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { Link } from "react-router-dom";
import { userRequest } from "../requestMethods";

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  width: 10%;
  margin-left: 1000px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 15px;
`;
const Dm = styled.div`
  margin-left: 10px;
  font-size: 30px;
  margin-top: 50px;
`;
const Det = styled.span`
  margin-left: 50px;
`;

function Orders() {
  useEffect(() => {
    getOrderList();
  }, []);

  const [list, setList] = useState();

  const getOrderList = async () => {
    const id = JSON.parse(localStorage.getItem("user"))._id;
    const user = await userRequest.get(`/users/find/${id}`);
    const data = await getAllOrder(user.data.username);
    if (data) {
      setList(data);
    }
  };

  return (
    <>
      <Navbar />
      <Announcement />
      <Dm>
        <Det>My Bookings</Det>
        <Link to="/">
          <TopButton>Explore More Poojas</TopButton>
        </Link>
      </Dm>

      {list?.map((item) => (
        <OrderItem key={item.id} product={item} />
      ))}
    </>
  );
}

export default Orders;
