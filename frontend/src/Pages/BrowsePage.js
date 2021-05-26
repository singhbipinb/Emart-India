import Loader from "../components/Loader";
import Message from "../components/Message";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Paginate from "../components/Paginate";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { browseProducts } from "../actions/productActions";
import Meta from "../components/Meta";
import arrowBackThickFill from "@iconify-icons/akar-icons/arrow-back-thick-fill";
// import { Icon } from "@iconify/react";

const BrowseScreen = ({ match }) => {
  const category = match.params.category;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(browseProducts(category, pageNumber));
  }, [dispatch, category, pageNumber]);

  return (
    <div>
      <Meta title={category} />

      <Link to="/" className="btn btn-light">
        <Icon icon={arrowBackThickFill} height="50" width="70" />
      </Link>

      <h1>{category}</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default BrowseScreen;
