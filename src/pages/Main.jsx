import { React, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CardFilter } from "../components/CardFilter";
import { CardGalleries } from "../components/CardGalleries";
import ServiceAPI from "../service/api";
import { Paginate } from "../components/layouts/Paginate";

export const Main = () => {
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);

  const [totalContent, setTotalContent] = useState(0);

  const [payload, setPayload] = useState({
    limit: 6,
  });

  const getImages = async (page = 0) => {
    setIsLoading(true);
    return await ServiceAPI.get("/images/search", {
      params: { ...payload, page: page },
    })
      .then((resp) => {
        setCurrentPage(parseInt(resp.headers["pagination-page"]) + 1);
        setTotalContent(parseInt(resp.headers["pagination-count"]));
        setImages(resp.data);
      })
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    getImages(currentPage);
  }, []);

  useEffect(() => {
    getImages();
  }, [payload]);

  const paginateHandler = (currentPage) => {
    getImages(currentPage - 1);
  };

  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col className="mb-5" sm={12}>
            <CardFilter payload={payload} setPayload={setPayload} />
          </Col>
          <Col sm={12}>
            <CardGalleries images={images} isLoading={isLoading} />
            <Paginate
              images={images}
              isLoading={isLoading}
              activePage={currentPage}
              itemsCountPerPage={payload.limit}
              totalItemsCount={totalContent}
              handlePage={paginateHandler}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
