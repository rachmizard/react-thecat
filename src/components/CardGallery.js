import React from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";
import { FcLike, FcDislike } from "react-icons/fc";

export const CardGallery = ({ index, image, voteHandler }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        width={image.width > 250 ? 300 : image.width}
        height={image.height > 250 ? 300 : image.height}
        src={image.url}
      />
      <Card.Body className="text-center">
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light">
            <FcLike
              onClick={() => voteHandler({ image_id: image.id, value: true })}
              style={{ fontSize: 50 }}
            />
          </Button>
          <Button variant="outline-light">
            <FcDislike
              onClick={() => voteHandler({ image_id: image.id, value: false })}
              style={{ fontSize: 50 }}
            />
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};
