import React, { Component } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaPinterestSquare,
  FaRssSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FcAbout, FcFile, FcLock, FcShop } from "react-icons/fc";
import { SiGooglepay, SiSamsungpay } from "react-icons/si";

class Footer extends Component {
  state = {};

  render() {
    return (
      <div style={{ backgroundColor: "#00251a", color: "white" }}>
        <br />
        <Container>
          <Row style={{ display: "flex" }}>
            <Col>
              <div>
                <h3 style={{ color: "white" }}>We accept...</h3>
                <hr color="Yellow" />
                <ul>
                  <li>Cash on Delivery</li>
                  <li>Bank Payment</li>
                  <li>Credit/Debit Card</li>
                  <li>Mobile Wallet</li>
                </ul>
                <FaCcMastercard size="30" />
                &nbsp;
                <FaCcVisa size="30" />
                &nbsp;
                <FaCcPaypal size="30" />
                &nbsp;
                <FaCcAmazonPay size="30" />
                &nbsp;
                <FaCcApplePay size="30" />
                &nbsp;
                <FaCcDiscover size="30" />
                &nbsp;
                <SiSamsungpay size="30" />
                &nbsp;
                <SiGooglepay size="30" />
              </div>
            </Col>
            <Col>
              <div>
                <h3 style={{ color: "white" }}>Newsletter</h3>
                <hr color="Yellow" />
                <Form>
                  <div align="center">
                    <h5 style={{ color: "white" }}>
                      Always be the first to know.
                    </h5>
                    <p>Sign up for our newsletter!</p>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          id="basic-addon1"
                          style={{ borderRadius: 10 }}
                        >
                          <MdEmail size="25px" />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        style={{ borderRadius: 5 }}
                        placeholder="abc@gmail.com"
                      />
                      <InputGroup.Append>
                        <Button variant="success" style={{ borderRadius: 10 }}>
                          Submit
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </div>
                </Form>
              </div>
            </Col>
            <Col>
              <div>
                <h3 style={{ color: "white" }}>Social Media</h3>
                <hr color="Yellow" />
                <div align="center">
                  <h5 style={{ color: "white" }}>
                    Also visit our social Profiles.
                  </h5>
                  <p>Feel free to contact there!</p>
                  <a
                    href="https://www.facebook.com/bbksa"
                    style={{ decoration: "none" }}
                  >
                    <FaFacebookSquare color="white" size="30px" />
                  </a>{" "}
                  <a href="https://twitter.com/bibekkrsah">
                    <FaTwitterSquare color="white" size="30px" />
                  </a>{" "}
                  <a href="https://www.linkedin.com/in/bbksa">
                    <FaLinkedin color="white" size="30px" />
                  </a>{" "}
                  <a href="https://www.pinterest.com/bbk_sa">
                    <FaPinterestSquare color="white" size="30px" />
                  </a>{" "}
                  <a href="https://wa.me/917497044831">
                    <FaWhatsappSquare color="white" size="30px" />
                  </a>{" "}
                  <a href="#googleplus">
                    <FaGooglePlusSquare color="white" size="30px" />
                  </a>{" "}
                  <a href="#rss">
                    <FaRssSquare color="white" size="30px" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>

          <br />

          <Row style={{ display: "flex" }}>
            <Col>
              <div>
                <div>
                  <h4 style={{ color: "white" }}>About eMart</h4>
                  <hr color="Yellow" />
                  <p>
                    eMart is the Simple shopping Solution. It's a full-featured
                    website with all product details and a shopping cart system
                    that bends over backward to give you the flexibility you
                    need to run your online store.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <h4 style={{ color: "white" }}>Information</h4>
                <hr color="Yellow" />
                <FcAbout size="20px" />{" "}
                <a
                  href="about.html"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About Us
                </a>
                <br />
                <FcShop size="20px" />{" "}
                <a
                  href="Product.html"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Shop
                </a>
                <br />
                <FcLock size="20px" />{" "}
                <a
                  href="#privacy"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
                <br />
                <FcFile size="20px" />{" "}
                <a
                  href="#terms"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Terms &amp; Conditions{" "}
                </a>
              </div>
            </Col>
            <Col>
              <div>
                <h4 style={{ color: "white" }}>Contact Us</h4>
                <hr color="Yellow" />
                <MdLocationOn size="25px" /> Address: Mullana, Haryana,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 133207, India <br />
                <MdCall size="25px" /> Phone:{" "}
                <a
                  href="tel:+91 7497044831"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  +91 7497044831
                </a>
                <br />
                <MdEmail size="25px" /> {""}
                Email:{" "}
                <a
                  href="mailto:emartindiaco@gmail.com"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  emartindiaco@gmail.com
                </a>
              </div>
            </Col>
          </Row>

          <hr color="white" />

          <div align="center">
            All Rights Reserved. © 2021{" "}
            <a href="/">
              <img src="/eMart.png" height="30" alt="Logo" />
            </a>
          </div>
          <br />
        </Container>
      </div>
    );
  }
}

export default Footer;
