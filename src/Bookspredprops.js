import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

function Bookspredprops({ img, title, author }) {
  // const { img, title, author } = props;
  const clickhandler = (e) => {
    console.log(e);
    console.log(e.target);
  };
  const morcomplex = () => {
    console.log(author);
  };
  return (
    <div
      className="bookpropssection"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <div
        className="card shadow h-100"
        onMouseOver={() => {
          console.log(author);
        }}
      >
        <div className="card-body text-center">
          <img
            src={img}
            className=" "
            style={{ maxHeight: "200px", width: "100%" }}
          />
          <h5 className="mt-2">console.log(title)</h5>
          <h6 className="text-primary">{author}</h6>
          <button className="btn btn-success" onClick={clickhandler}>
            example
          </button>
          <button
            className="btn btn-success ms-2"
            onClick={() => morcomplex(author)}
          >
            more complex
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bookspredprops;
