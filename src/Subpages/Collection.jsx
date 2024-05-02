import React from "react";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <>
      <div className="row">
        <div className="heading_collection">
          <h2 className="mb-3  fw-bold">Collections:</h2>
        </div>
        <div className="col-lg-6 col-sm-12 collection">
          <img
            src="collection_men.jpg"
            style={{ width: "100%", height: "90%" }}
            alt=""
            className="rounded shadow-lg"
          />
          <Link to="/boys">
            {" "}
            <button className="btn btn-dark py-2" id="collection_btn">
              Shop Men's
            </button>
          </Link>
        </div>
        <div className="col-lg-6 col-sm-12 collection">
          <img
            src="collection_woman.jpeg"
            style={{ width: "100%", height: "90%" }}
            alt=""
            className="rounded shadow-lg"
          />
          <Link to={"/girls"}>
            <button className="btn btn-light py-2" id="collection_btn">
              Shop Woman's
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Collection;
