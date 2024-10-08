import React from "react";
import Pgirls from "../Subpages/Pgirls";

const Girls = ({isLoggedin, uid, setProductViewID}) => {
  
  return (
    <>
      <div className="girls_collection" style={{marginTop:'70px'}}>
        <div className="g_heading">
          <h2 style={{ textAlign: "center" }}>Girls Collection</h2>
          <div className="g_box"></div>
        </div>
        <div className="g_contents mt-3">
          <Pgirls isLoggedin={isLoggedin} uid={uid} setProductViewID={setProductViewID} />
        </div>
      </div>
    </>
  );
};

export default Girls;
