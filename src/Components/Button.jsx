import React from "react";

function Button({ text, align }) {
  return (
    <>
      <div className={align}>
        <button className="main-button"> {text}</button>
      </div>
    </>
  );
}

export default Button;
