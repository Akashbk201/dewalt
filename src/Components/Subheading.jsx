import React from "react";

function Subheading({ text, align }) {
  return (
    <>
      <div className={align}>
        <h3 className="sub-heading">{text}</h3>
      </div>
    </>
  );
}

export default Subheading;
