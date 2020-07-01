import React from "react";
import Image from "../image/Image";

const ListImages = ({ images }) => {
  return (
    <div className="col-12 p-5 row">
      {images.map((image) => (
        <Image key={image.id} image={image}></Image>
      ))}
    </div>
  );
};

export default ListImages;
