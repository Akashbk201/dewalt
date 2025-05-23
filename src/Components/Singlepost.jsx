import React from "react";
import Button from "./Button";
import Subheading from "./Subheading";

function Singlepost({ heading, detail, img }) {
  return (
    <>
      <div className="single-post">
        <div className="single-post-img-box">
          <img src={img} alt="" />
        </div>
        <div className="single-cont-box">
          <Subheading text={heading} align="center" />
          <p>{detail}</p>
          <Button text="Learn More" />
        </div>
      </div>
    </>
  );
}

export default Singlepost;
