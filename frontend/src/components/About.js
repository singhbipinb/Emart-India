import React, { Component } from "react";
import { Card, Container, Col, Row, Button, Image } from "react-bootstrap";

class About extends Component {
  state = {};
  render() {
    return (
      <Container>
        <h1 align="Center">About Us</h1>
        <hr />
        <Container>
          <Card style={{ backgroundColor: "wheat", padding: "20px" }}>
            <Row>
              <Col xs={4}>
                <img src="/eMart.png" />
              </Col>
              <Col xs={6} style={{ paddingTop: "20px" }}>
                <h1>Launched in March 2021</h1>
              </Col>
            </Row>
          </Card>
          <br />
          <Card style={{ padding: "20px" }}>
            <Row>
              <Col>
                <h3>We're Trusted</h3>
                <p>
                  Customer believes in eMart. <br />
                  We work to make shopping easy.
                </p>
              </Col>
              <Col>
                <h3>We're Professional</h3>
                <p>
                  We are working Professionally <br />
                  in this field since 24/7.
                </p>
              </Col>
              <Col>
                <h3>We're Expert</h3>
                <p>
                  We are export in providing <br />
                  best deal for our customers.
                </p>
              </Col>
            </Row>
          </Card>
          <br />
          <Col>
            <img src="/help.png" />
          </Col>
          <br />
          <br />
          <Row>
            <Row style={{ align: "center" }}>
              <h1>Meet Our Team</h1>
            </Row>
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src="/Developer/Bibek.png"
                  width="200"
                  style={{ paddingBottom: 25 }}
                />
              </Col>
              <Col>
                <Card.Img
                  variant="top"
                  src="/Developer/Bipin.png"
                  width="200"
                  style={{ paddingBottom: 25 }}
                />
              </Col>
              <Col>
                <Card.Img
                  variant="top"
                  src="/Developer/Shubham.png"
                  width="200"
                  style={{ paddingBottom: 25 }}
                />
              </Col>
              <Col>
                <Card.Img
                  variant="top"
                  src="/Developer/Pranav.png"
                  width="200"
                  style={{ paddingBottom: 25 }}
                />
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default About;
