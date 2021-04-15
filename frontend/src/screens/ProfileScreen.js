import React, { useState, useEffect } from "react";
import { Table, Form, Button, Row } from "react-bootstrap";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "react-web-tabs/dist/react-web-tabs.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { listMyOrders } from "../actions/orderActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Row>

      <Tabs defaultTab="vertical-tab-one" vertical>
        <TabList>
          <Tab tabFor="vertical-tab-one"><span style={{fontSize:18,fontWeight:"bold"}}>User Profile</span></Tab>
          <Tab tabFor="vertical-tab-two"><span style={{fontSize:18,fontWeight:"bold"}}>My Orders</span></Tab>

        </TabList>

        <TabPanel tabId="vertical-tab-one">

            <h2>User Profile</h2>
            {message && <Message variant="danger">{message}</Message>}
            {}
            {success && <Message variant="success">Profile Updated</Message>}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        style={{ borderRadius: 10,width:600 }}
                        type="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        style={{ borderRadius: 10,width:"100%" }}
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        style={{ borderRadius: 10 }}
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        style={{ borderRadius: 10 }}
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Button
                      type="submit"
                      variant="primary"
                      style={{ borderRadius: 10, backgroundColor: "#08966c",width:600 }}
                  >
                    Update
                  </Button>
                </Form>
            )}
          {/*</Col>*/}
        </TabPanel>

        <TabPanel tabId="vertical-tab-two" style={{textAlign:"center"}}>


            <h2>My Orders</h2>
            {loadingOrders ? (
                <Loader />
            ) : errorOrders ? (
                <Message variant="danger">{errorOrders}</Message>
            ) : (
                <Table
                    striped
                    bordered
                    hover
                    responsive
                    className="table-dark"
                    style={{ backgroundColor: "#004d40", width:1000,boxShadow: "5px 5px 5px #004d40" }}
                >
                  <thead>
                  <tr>
                    <th>ORDER ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>DELIVERED</th>
                    <th>DETAILS</th>
                  </tr>
                  </thead>
                  <tbody>
                  {orders.map((order) => (
                      <tr key={order._id}>
                        <td>{order._id.toUpperCase()}</td>
                        <td>{order.createdAt.substring(0, 10)}</td>
                        <td>{order.totalPrice}</td>
                        <td>
                          {order.isPaid ? (
                              order.paidAt.substring(0, 10)
                          ) : (
                              <i className="fas fa-times" style={{ color: "red" }}></i>
                          )}
                        </td>
                        <td>
                          {order.isDelivered ? (
                              order.deliveredAt.substring(0, 10)
                          ) : (
                              <i className="fas fa-times" style={{ color: "red" }}></i>
                          )}
                        </td>
                        <td>
                          <LinkContainer to={`/order/${order._id}`}>
                            <Button className="btn-sm" variant="light">
                              Details
                            </Button>
                          </LinkContainer>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </Table>
            )}
          {/*</Col>*/}
        </TabPanel>

      </Tabs>


    </Row>
  );
};

export default ProfileScreen;
