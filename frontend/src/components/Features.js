import React, { Component } from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import deliveryTruck from "@iconify-icons/emojione/delivery-truck";

class QuickFeatures extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          paddingTop: 30,
        }}
      >
        <Container
          style={{
            backgroundColor: "rgb(246,246,246)",
            paddingTop: 30,
            paddingBottom: 30,
          }}
          className="w-100"
          fluid
        >
          <Container
            style={{
              textAlign: "center",
            }}
          >
            <CardGroup>
              <Card>
                {/*  <Card.Img*/}
                {/*    variant="top",*/}
                {/*  /!*  src="/Images/MobileAccessories.jpg"*!/*/}
                {/*    style={{*/}
                {/*      height: 50,*/}
                {/*      width: 50,*/}
                {/*      marginTop: 40,*/}
                {/*    }}*/}
                {/*    className="card-mage"*/}
                {/*></Card.Img>*/}
                <Icon
                  icon={deliveryTruck}
                  width="250"
                  height="200"
                  style={{ align: "center" }}
                />
                <Card.Body>
                  <Card.Title>Free Delivery</Card.Title>
                  <Card.Text>Free Shipping on all orders.</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/return.png"
                  style={{
                    height: 180,
                    width: 180,
                    marginTop: 20,
                    marginLeft: 40,
                  }}
                  className="card-mage"
                />
                <Card.Body>
                  <Card.Title>Return Policy</Card.Title>
                  <Card.Text>Easy return, no questions asked!</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/support.png"
                  style={{
                    height: 180,
                    width: 180,
                    marginTop: 20,
                    marginLeft: 40,
                  }}
                  className="card-mage"
                />
                <Card.Body>
                  <Card.Title>24/7 Support</Card.Title>
                  <Card.Text>Got problem, ask anytime! </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/secure.png"
                  style={{
                    height: 180,
                    width: 180,
                    marginTop: 20,
                    marginLeft: 40,
                  }}
                  className="card-mage"
                />
                <Card.Body>
                  <Card.Title>Secure Payment</Card.Title>
                  <Card.Text>Fast and secure across all devices.</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Container>
        </Container>
      </div>
    );
  }
}

export default QuickFeatures;
