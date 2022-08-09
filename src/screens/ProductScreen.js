import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products.js";
// import products from "/Users/atulsharma/Downloads/projects/Store/frontend/src/products.js";

const ProductScreen = () => {
  let { id } = useParams();
  let index = products.findIndex((e) => e._id === id);
  let product = products[index];

  // return <div>{product.name}</div>;

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
    </>
  );
};

export default ProductScreen;
