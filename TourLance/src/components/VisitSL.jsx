import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Ancient from "../assets/Ancient.png";
import Safari from "../assets/Safari.png";
import Hiking from "../assets/Hiking.png";
import Other from "../assets/other.png";
import Camping from "../assets/camping.png";
import Beach from "../assets/Beach.png";

import '../styles/visitsl.css';

const ImageGrid = () => {
  return (
    <Container>
      <h1 className='visitsl-title'>Visit sri lanka</h1>
      <Row>
        <Col xs={6} md={4}>
          <div className="image-container">
            <img src={Ancient} alt="Image 1" />
            <div className="image-title">Ancient</div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div className="image-mid-container">
            <img src={Safari} alt="Image 2" />
            <div className="image-title">Safari</div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div className="image-container">
            <img src={Hiking} alt="Image 3" />
            <div className="image-title">Hiking</div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div className="image-container">
            <img src={Other} alt="Image 4" />
            <div className="image-title">Other</div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div className="image-mid-container">
            <img src={Camping} alt="Image 5" />
            <div className="image-title">Camping</div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div className="image-container">
            <img src={Beach} alt="Image 6" />
            <div className="image-title">Beach</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageGrid;
