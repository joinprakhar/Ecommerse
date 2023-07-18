//import {useEffect, useState} from 'react'
import {Row, Col} from "react-bootstrap"
import Product from "../components/Product"
import { useGetProductsQuery } from "../slices/productsApiSlice";
//import axios from "axios";


const HomeScreen = () => {
  const { data: products, isLoading, isError} = useGetProductsQuery()
  //const [products, setProduct] = useState()


  // useEffect(() => {
  //     const fetchProduct = async () => {
  //       const { data } = await axios.get(`/api/products`);
  //       setProducts(data);
  //     };
  //     fetchProduct();
  //   }, []);
  return (
    <>
      {isLoading ? (
        <>
          <h2>Loading</h2>
        </>
      ) : isError ? (
        <>
          <div> {isError?.data?.message || isError.error}</div>
        </>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products &&
              products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
        </>
    )}
    </>
  );
}

export default HomeScreen