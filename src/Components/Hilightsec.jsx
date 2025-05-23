import React from "react";
import Highimg from "../assets/banner-2.jpg";
import Button from "./Button";

function Hilightsec() {
  return (
    <>
      <div className="hilight-sec" id="about">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-8">
              <img className="hilight-sec-image" src={Highimg} alt="" />
            </div>
            <div className="col-lg-4 relative">
              <div className="hilight-box">
                <h3>RISE ABOVE THE ROUGH</h3>
                <p>
                  Overcome tough outdoor jobs with the power, performance, and
                  durability of DEWALT® outdoor power equipment.
                </p>
                <Button text="Learn More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hilightsec;
