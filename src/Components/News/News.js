import React from "react";
import './News.css'
import { Card, Col } from "react-bootstrap";

const News = (props) => {
  const { title, description, urlToImage, url } = props.news;
  return (
    <Col className='Card'>
      <Card>
        <Card.Img variant="top" src={urlToImage} />{" "}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default News;
