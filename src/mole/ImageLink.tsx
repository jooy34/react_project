import React from "react";

const ImageLink = (props: {
  linkPath: string | undefined;
  imgPath: string | undefined;
}) => {
  return (
    <div>
      <a href={props.linkPath}>
        <img className="logo" src={props.imgPath} alt="Anyflow" />
      </a>
    </div>
  );
};

export default ImageLink;
