import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'



const Product = ({product}) => {

  return (
    <>
      <Card className="my-3 p-3 rounded h-100">
        <Link to={`/product/${product._id}`}>
          {product.file === "/Images/sample.jpg" ? (
            <Card.Img
              style={{ height: "180px" }}
              src={product.image}
              variant="top"
            />
          ) : (
            <Card.Img
              style={{ height: "180px" }}
              src={product.file}
              variant="top"
            />
          )}
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div" className="product-title">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating value={product.rating} text={`${product.numReviews}`} />
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product