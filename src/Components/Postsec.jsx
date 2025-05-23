import React from "react";
import Singlepost from "./Singlepost";
import postImage from "../assets/post-1.jpg";
import postImage2 from "../assets/post-2.jpg";
import postImage3 from "../assets/post-3.jpg";

function Postsec() {
  return (
    <>
      <div className="post-sec" id="service">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Singlepost
                img={postImage}
                heading="NO GAS. NO CORDS. NO JOB TOO BIG. "
                detail="The TOUGHSYSTEM 2.0 DXL™ lineup from DEWALT is the industry's first 30 in. modular workstation system."
              />
            </div>
            <div className="col-md-4">
              <Singlepost
                img={postImage2}
                heading="BUILT FOR HEAVY LIFTING "
                detail="The TOUGHSYSTEM 2.0 DXL™ lineup from DEWALT is the industry's first 30 in. modular workstation system."
              />
            </div>
            <div className="col-md-4">
              <Singlepost
                img={postImage3}
                heading="A WORKSTATION BUILT TO MOVE"
                detail="The TOUGHSYSTEM 2.0 DXL™ lineup from DEWALT is the industry's first 30 in. modular workstation system."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Postsec;
