import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { publicRequest, userRequest } from "../requestMethods";
import { useNavigate } from "react-router";

const SummaryBox = styled.div`
  flex: 1;
  border: 0.5px solid black;
  border-radius: 20px;
  padding: 20px;
  height: 50vh;
  margin-left: 10px;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => (props.type === "total" ? "500" : "normal")};
  panditType: ${(props) => (props.type === "total" ? "24px" : "inherit")};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #503c3c;
    transform: scale(1.1);
  }
`;

const KEY = process.env.REACT_APP_STRIPE;

const Summary = ({ totalPrice, productList, user }) => {
  const history = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: totalPrice * 100,
        });

        if (res) {
          for (let i = 0; i < productList?.length; i++) {
            try {
              await publicRequest.post("/orders", {
                userId: user,
                products: [
                  {
                    PanditId: productList[i].PanditId,
                  },
                  {
                    quantity: productList[i].quantity,
                  },
                ],
                amount: productList[i].pricePerItem * productList[i].quantity,
                status: "Success",
              });
            } catch (e) {
              console.log("Error while ordering");
            }
          }

          history("/success");
        }
      } catch (e) {
        console.log(e);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken, totalPrice, history, productList, user]);

  return (
    <SummaryBox>
      <SummaryTitle>BOOKING SUMMARY</SummaryTitle>
      <SummaryItem>
        <SummaryItemText>SubTotal</SummaryItemText>
        <SummaryItemPrice>₹ {totalPrice}</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Extra Charges</SummaryItemText>
        <SummaryItemPrice>₹ 0</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem type="total">
        <SummaryItemText>Total</SummaryItemText>
        <SummaryItemPrice>₹ {totalPrice}</SummaryItemPrice>
      </SummaryItem>
      <StripeCheckout
        name="AY"
        img="https://avatars.githubusercontent.com/u/1486366?v=4"
        billingAddress
        shippingAddress
        description={`Your total is ₹${totalPrice}`}
        amount={totalPrice * 100}
        token={(token) => setStripeToken(token)}
        stripeKey={KEY} // Make sure KEY is defined and has a valid value
      >
        <Button>CHECKOUT NOW</Button>
      </StripeCheckout>
    </SummaryBox>
  );
};

export default Summary;
