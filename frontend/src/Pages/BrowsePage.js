import Loader from "../components/Loader";
import Message from "../components/Message";
import {Col, Row} from "react-bootstrap";
import Product from "../components/Product";
import Paginate from "../components/Paginate";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {browseProducts} from "../actions/productActions";
import Meta from "../components/Meta";

const BrowseScreen = ({match}) => {

    const category = match.params.category

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const {loading, error, products, page, pages} = productList

    useEffect(() => {
        dispatch(browseProducts(category, pageNumber))
    }, [dispatch, category, pageNumber])


    return (<div>
            <Meta title={category}/>
            <h1>{category}</h1>
            {loading ? (
                <Loader/>
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Row>
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                                <Product product={product}/>
                            </Col>
                        ))}
                    </Row>
                    <Paginate
                        pages={pages}
                        page={page}
                        category={category ? category : ''}
                    />
                </>
            )}
        </div>
    )
}

export default BrowseScreen