import { React } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { CardGallery } from "./CardGallery";
import logo from "./../logo.svg";

export const CardGalleries = ({ images, isLoading }) => {
  return (
    <div className="mb-5">
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
              <span className="text-muted text-bold">
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
            <Col key={index} className="m-2 d-flex justify-content-center">
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
