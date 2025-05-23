import React from "react";

function SingleProduct({ img, price, discount, title }) {
  return (
    <>
      <div className="product-content">
        <div className="product-img-box">
          <img src={img} alt="" />
        </div>
        <div className="price-dis">
          <div className="price-box">
            <p>{price}</p>
          </div>
          <div className="dis-box">
            <p>{discount}</p>
          </div>
        </div>
        <h2>{title}</h2>
        <button>Buy Now</button>
      </div>
    </>
  );
}

export default SingleProduct;
