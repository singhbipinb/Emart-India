import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [mobile, setMobile] = useState(shippingAddress.mobile);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ mobile, address, city, postalCode, country })
    );
    history.push("/payment");
  };

  return (
    <FormContainer style={{ boxShadow: "5px 5px 5px #004d40" }}>
      <CheckoutSteps step1 step2 />
      <h1 align="center">Shipping</h1>
      <Form
        onSubmit={submitHandler}
        style={{
          boxShadow: "5px 5px 5px #004d40",
          padding: 30,
          borderColor: "blue",
        }}
      >
        <Form.Group controlId="mobile">
          <Form.Label>Address</Form.Label>
          <Form.Control
            style={{ borderRadius: 10 }}
            type="text"
            placeholder="Enter Mobile Number"
            value={mobile}
            required
            onChange={(e) => setMobile(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            style={{ borderRadius: 10 }}
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            style={{ borderRadius: 10 }}
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            style={{ borderRadius: 10 }}
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            style={{ borderRadius: 10 }}
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          style={{ borderRadius: 10, backgroundColor: "#08966c" }}
        >
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
