import { React, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CardFilter } from "./CardFilter";
import { CardGalleries } from "./CardGalleries";
import ServiceAPI from "./../service/api";

export const Main = () => {
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [payload, setPayload] = useState({
    limit: 30,
  });

  const getImages = async () => {
    return await ServiceAPI.get("/images/search", { params: payload })
      .then((resp) => {
        setImages(resp.data);
      })
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    getImages();
  }, [payload]);

  return (
    <div className="mt-5">
      <Container fluid>
        <Row>
          <Col sm={4}>
            <CardFilter payload={payload} setPayload={setPayload} />
          </Col>
          <Col sm={8}>
            <CardGalleries
              images={images}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
