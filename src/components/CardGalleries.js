import { React } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { CardGallery } from "./CardGallery";
import logo from "./../logo.svg";

export const CardGalleries = ({ images, isLoading, setIsLoading }) => {
  return (
    <div>
      <Row>
        {isLoading ? (
          <Col>
            <div className="d-flex justify-content-center">
              <Spinner animation="grow" variant="dark" role="status"></Spinner>
            </div>
          </Col>
        ) : !images.length ? (
          <Col>
            <div className="d-flex justify-content-center mb-5">
              <span className="text-white text-bold">
                No data for query results.
              </span>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </div>
          </Col>
        ) : (
          images.map((image, index) => (
            <Col key={index} sm={3} className="p-2">
              <div>
                <CardGallery image={image} />
              </div>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};
