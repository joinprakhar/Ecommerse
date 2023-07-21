import { Link, useParams } from "react-router-dom";
import {Row, Col} from "react-bootstrap"
import Product from "../components/Product"
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Paginate from "../components/Paginate";


const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error} = useGetProductsQuery({ keyword , pageNumber });


  return (
    <>
    {keyword && <Link to='/' className="btn btn-light mb-4">Go Back</Link>}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message varient="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products &&
              data.products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <br />
          <br />
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
}

export default HomeScreen