import React from "react";
import Pboys from "../Subpages/Pboys";

const Boys = () => {
  return (
    <>
      <div className="boys_collection " style={{marginTop:'70px'}}>
        <div className="b_heading">
          <h2 style={{ textAlign: "center" }}>Boys Collection</h2>
          <div className="b_box"></div>
        </div>
        <div className="b_contents mt-5">
          <Pboys />
        </div>
      </div>
    </>
  );
};

export default Boys;
