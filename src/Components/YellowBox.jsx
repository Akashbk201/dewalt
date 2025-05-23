import React from "react";

function YellowBox() {
  return (
    <>
      <div className="yellow-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="yellow-box-content">
                <h2>LEAVE A REVIEW. ENTER TO WIN.</h2>
                <p>
                  Write a review for any DEWALT product on our website and be
                  entered for a chance to win a 20V MAX* XR® Brushless Cordless
                  1/2 in. Drill/Driver Kit (DCD800D2). No purchase necessary,
                  limit of five review entries per person.
                </p>

                <div className="yellow-btn-box">
                  <button className="scondary-btn">LEAVE A REVIEW</button>
                  <button className="text-btn">VIEW COMPLETE RULES</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YellowBox;
