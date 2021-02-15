import React from "react";
import { Col } from "react-bootstrap";
import Pagination from "react-js-pagination";

export const Paginate = ({
  images,
  isLoading,
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  handlePage,
}) => {
  return (
    !isLoading,
    images.length ? (
      <Col>
        <div className="d-flex justify-content-center m-5">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={5}
            onChange={handlePage}
            itemClass="page-item"
            linkClass="page-link"
            firstPageText="First"
            lastPageText="Last"
            nextPageText="Next"
            prevPageText="Previous"
          />
        </div>
      </Col>
    ) : (
      ""
    )
  );
};
