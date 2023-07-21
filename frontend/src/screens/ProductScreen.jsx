import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Message from "../components/Message";
import { useState } from "react";
import { addToCart } from "../slices/cartSlice";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ qty , setQty] = useState(1);

 

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

   const addToCartHandler = () => {
     dispatch(addToCart({ ...product, qty }));
     navigate('/cart')
   };
  return (
    <>
      <Link className="btn btn-light my-3 " to="/">
        Go Back
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message varient="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Row>
          <Col md={5}>            
            {(
              <Image
                src={`http://localhost:5000${product.file}`}
                alt={product?.name}
                fluid
              />
            ) || <Card.Img src={product.image} alt={product?.name} fluid />}
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product?.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product?.rating}
                  text={`${product?.numReviews}`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product?.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flish">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product?.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product?.countInStock > 0 ? "InStock" : "Out of Stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    className="btn-secondary"
                    type="button"
                    disabled={product?.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
