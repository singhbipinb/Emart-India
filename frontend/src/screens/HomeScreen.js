import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import CategoriesNavigation from "../components/CategoriesNav.js";
import Features from "../components/Features.js"
import arrowBackThickFill from "@iconify-icons/akar-icons/arrow-back-thick-fill";
import {Icon} from "@iconify/react";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])


  return (

    <div style={{paddingLeft:0,marginLeft:"0px"}}><CategoriesNavigation />
<br/>
      <Meta />
      {!keyword ? (
        <><ProductCarousel />
          <Features/></>
      ) : (
        <Link to='/' className='btn btn-light'>
            <Icon icon={arrowBackThickFill} height="50" width="70" />
        </Link>
      )}<br/>

      <h1>Latest Products</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </div>
  )
}

export default HomeScreen
