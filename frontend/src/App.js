import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Pages/HomePage";
import ProductScreen from "./Pages/ProductPage";
import CartScreen from "./Pages/CartPage";
import LoginScreen from "./Pages/LoginPage";
import RegisterScreen from "./Pages/RegisterPage";
import ProfileScreen from "./Pages/ProfilePage";
import ShippingScreen from "./Pages/ShippingPage";
import PaymentScreen from "./Pages/PaymentPage";
import PlaceOrderScreen from "./Pages/PlaceOrderPage";
import OrderScreen from "./Pages/OrderPage";
import UserListScreen from "./Pages/UserListPage";
import UserEditScreen from "./Pages/UserEditPage";
import ProductListScreen from "./Pages/ProductListPage";
import ProductEditScreen from "./Pages/ProductEditPage";
import OrderListScreen from "./Pages/OrderListPage";
import BrowseScreen from "./Pages/BrowsePage";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route
            path="/admin/productlist"
            component={ProductListScreen}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListScreen}
            exact
          />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/search/:keyword" component={HomeScreen} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/browse/:category" component={BrowseScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
