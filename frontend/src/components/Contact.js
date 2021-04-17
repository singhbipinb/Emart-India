import React from "react";
import { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container align="center">
          <h2>Contact Us</h2>
          <hr />
          <h4 float="left">Let's Talk</h4>
          <p>
            We'd love to talk with you about your shopping experience. Drop us a
            line, and we'll get to you within two days.
            <br />
            <br />
            Want to hear from us sooner? Call us...
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6893.101541053264!2d77.04228368159733!3d30.24988466235911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1618643216661!5m2!1sen!2sin"
            width="100%"
            height="270px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </Container>
        <br />

        <div>
          <Container>
            <Row>
              <Col xs={4}>
                <Row>
                  <Col xs={1.5}>
                    <MdLocationOn size="40" />
                  </Col>
                  <Col>
                    <h4>Location:</h4>
                    <p>
                      Mullana, Haryana,
                      <br />
                      133207, India
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1.5}>
                    <MdEmail size="40" />
                  </Col>
                  <Col>
                    <h4>Email:</h4>
                    <p>
                      <a href="mailto:emartindiaco@gmail.com">
                        emartindiaco@gmail.com
                      </a>
                      <br />
                      <a href="mailto:bibeksa1999@gmail.com">
                        bibeksa1999@gmail.com
                      </a>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1.5}>
                    <BiPhoneCall size="40" />
                  </Col>
                  <Col>
                    <h4>Call:</h4>
                    <p>
                      <a href="tel:+977 9817811032">+91 8529873125</a>
                      <br />
                      <a href="tel:+91 7497044831"> +91 7497044831</a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <form role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      required
                      defaultValue={""}
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      style={{
                        align: "center",
                        borderRadius: 10,
                        backgroundColor: "#08966c",
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Contact;
