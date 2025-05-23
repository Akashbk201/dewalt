import React from "react";
import SingleProduct from "./SingleProduct";
import Proimg1 from "../assets/product1.jpg";
import Proimg2 from "../assets/product2.jpg";
import Proimg3 from "../assets/product3.jpg";
import Proimg4 from "../assets/product4.jpg";
import Proimg5 from "../assets/product5.jpg";
import Proimg6 from "../assets/product6.jpg";
import Proimg7 from "../assets/product7.jpg";
import Proimg8 from "../assets/product8.jpg";

function FeatureProduct() {
  return (
    <>
      <div className="feature-prodcut" id="product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="feature-title">Featured Products</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <SingleProduct
                img={Proimg1}
                price="$20"
                discount="10% Off"
                title="20V MAX* XR® Brushless Cordless 1/2 in. 3-Speed Hammer Drill Kit with
          XR POWERPACK™"
              />
            </div>

            <div className="col-md-3">
              <SingleProduct
                img={Proimg2}
                price="$20"
                discount="10% Off"
                title=" DEWALT® TOUGHSERIES™ Construction Jack     3-Speed Hammer Drill Kit with
          XR POWERPACK™"
              />
            </div>

            <div className="col-md-3">
              <SingleProduct
                img={Proimg3}
                price="$20"
                discount="10% Off"
                title=" 20V MAX* XR POWERPACK™ 8 Ah Battery Kit with
          XR POWERPACK™"
              />
            </div>

            <div className="col-md-3">
              <SingleProduct
                img={Proimg4}
                price="$20"
                discount="10% Off"
                title=" 60V MAX* 17 in. Brushless Cordless Attachment Capable String Trimmer and Handheld Axial Blower Combo Kit™"
              />
            </div>

            <div className="col-md-3">
              <SingleProduct
                img={Proimg5}
                price="$20"
                discount="10% Off"
                title="20V MAX* XR® Brushless Cordless 1/2 in. 3-Speed Hammer Drill Kit with
          XR POWERPACK™"
              />
            </div>

            <div className="col-md-3">
              <SingleProduct
                img={Proimg6}
                price="$20"
                discount="10% Off"
                title="20V MAX* XR® Brushless Cordless 1/2 in. 3-Speed Hammer Drill Kit with
          XR POWERPACK™"
              />
            </div>

            <div className="col-md-3">
              <SingleProduct
                img={Proimg7}
                price="$20"
                discount="10% Off"
                title="20V MAX* XR® Brushless Cordless 1/2 in. 3-Speed Hammer Drill Kit with
          XR POWERPACK™"
              />
            </div>

            <div className="col-md-3">
              <SingleProduct
                img={Proimg8}
                price="$20"
                discount="10% Off"
                title="20V MAX* XR® Brushless Cordless 1/2 in. 3-Speed Hammer Drill Kit with
          XR POWERPACK™"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureProduct;
