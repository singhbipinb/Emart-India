import React, { Component } from "react";
import { Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class CategoriesNavigation extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "#e0f2f1",
          paddingTop: 5,
          marginLeft: 0,
          align: "center",
          alignContent: "center",
        }}
      >
        <Nav variant="pills" activeKey="1">
          <Container fluid>
            <Row align={"center"} style={{ display: "flex" }} fluid>
              <Col>
                <a href="/browse/Smartphones">
                  <img
                    variant="top"
                    src="/Images/mobile.png"
                    alt="mobile"
                    height="100"
                    width="200"
                  />
                </a>
                <NavDropdown
                  title="Smartphones and Accessories"
                  id="nav-dropdown"
                >
                  <LinkContainer to="/browse/Smartphones">
                    <NavDropdown.Item>Smartphones</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/Travel Adapter">
                    <NavDropdown.Item>Travel Adapter</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/Power Banks">
                    <NavDropdown.Item>Power Banks</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/Cover and Cases">
                    <NavDropdown.Item>Cover and Cases</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Col>

              <Col>
                <a href="/browse/Laptop">
                  <img
                    variant="top"
                    src="/Images/ComputerAccessories.webp"
                    alt="computer"
                    height="100"
                    width="180"
                  />
                </a>
                <NavDropdown title="Computer and Accessories" id="nav-dropdown">
                  <LinkContainer to="/browse/Laptop">
                    <NavDropdown.Item>Laptop</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/Mouse and Keyboard">
                    <NavDropdown.Item>Mouse and Keyboards</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/Storage Devices">
                    <NavDropdown.Item>Storage Devices</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/PC Peripherals">
                    <NavDropdown.Item>PC Peripherals</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/Softwares">
                    <NavDropdown.Item>Softwares</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Col>

              <Col>
                <a href="/browse/Smart Wearables">
                  <img
                    variant="top"
                    src="/Images/gadgets.png"
                    alt="gadget"
                    height="100"
                    width="125"
                  />
                </a>
                <NavDropdown title="Gadgets" id="nav-dropdown">
                  <LinkContainer to="/browse/Smart Wearables">
                    <NavDropdown.Item eventKey="4.1">
                      Smart Wearables
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/Smart Home">
                    <NavDropdown.Item>Smart Home</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/Camera and Accessories">
                    <NavDropdown.Item>Camera and Accessories</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/Tablets">
                    <NavDropdown.Item>Tablets</NavDropdown.Item>
                  </LinkContainer>{" "}
                  <LinkContainer to="/browse/Audio Devices">
                    <NavDropdown.Item>Audio Devices</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Col>

              <Col>
                <a href="/browse/Home Appliances">
                  <img
                    variant="top"
                    src="/Images/homeappliances.png"
                    alt="home"
                    height="100"
                    width="180"
                  />
                </a>
                <NavDropdown title="Home Appliances" id="nav-dropdown">
                  <LinkContainer to="/browse/Televisions">
                    <NavDropdown.Item>Televisions</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/Refrigerator">
                    <NavDropdown.Item>Refrigerators</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/Washing Machine  ">
                    <NavDropdown.Item>Washing Machines</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/Kitchen Appliance">
                    <NavDropdown.Item>Kitchen Appliances</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/browse/Home Appliance">
                    <NavDropdown.Item>Home Appliances</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Col>
            </Row>
          </Container>
        </Nav>
      </div>
    );
  }
}

export default CategoriesNavigation;
