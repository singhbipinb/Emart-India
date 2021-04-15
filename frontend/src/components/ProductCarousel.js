import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel>
      <Carousel.Item>
        <a href="#s3">
          <img
            className="d-block w-100"
            src="/Images/Slide/slide3.jpg"
            height="300px"
            alt="Third slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="#s3">
          <img
            className="d-block w-100"
            src="/Images/Slide/slide2.jpg"
            height="300px"
            alt="Third slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="#s3">
          <img
            className="d-block w-100"
            src="/Images/Slide/Ms1.jpg"
            height="300px"
            alt="Fourth slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="#s1">
          <img
            className="d-block w-100"
            src="/Images/Slide/Ms2.png"
            alt="First slide"
            height="300px"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="#s3">
          <img
            className="d-block w-100"
            src="/Images/Slide/slide4.jpg"
            height="300px"
            alt="Third slide"
          />
        </a>
      </Carousel.Item>
    </Carousel>

    // <Carousel pause="hover" className="bg-dark">
    //   {products.map((product) => (
    //     <Carousel.Item key={product._id}>
    //       <Link to={`/product/${product._id}`}>
    //         <Image src={product.image} alt={product.name} fluid />
    //         <Carousel.Caption className="carousel-caption">
    //           <h2>
    //             {product.name} (₹{product.price})
    //           </h2>
    //         </Carousel.Caption>
    //       </Link>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>
  );
};

export default ProductCarousel;
