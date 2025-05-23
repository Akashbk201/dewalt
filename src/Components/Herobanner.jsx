import React from "react";
import Button from "./Button";

function Herobanner() {
  return (
    <>
      <div className="hero-banner-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-cont">
                <h2>
                  BE SAFE TODAY. <br />
                  BUILD FOR TOMORROW.™
                </h2>
                <p>
                  May 5-9 is Construction Safety Week. Join DEWALT in committing
                  to safe jobsites today and everyday.
                </p>
                <Button text="Learn More" align="center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herobanner;
