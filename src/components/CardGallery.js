import React from "react";
import { Image } from "react-bootstrap";

export const CardGallery = ({ image }) => {
  return (
    <Image
      width={image.width > 250 ? 200 : image.width}
      height={image.height > 250 ? 200 : image.height}
      src={image.url}
      rounded
    />
  );
};
