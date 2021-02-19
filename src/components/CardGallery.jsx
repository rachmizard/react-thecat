import React from "react";
import { Card } from "react-bootstrap";

export const CardGallery = ({ image }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        width={image.width > 250 ? 300 : image.width}
        height={image.height > 250 ? 300 : image.height}
        src={image.url}
      />
    </Card>
  );
};
