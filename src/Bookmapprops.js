import React from "react";

function Bookmapprops(props) {
  const { img, title, author } = props.book;
  return (
    <div
      className="bookpropssection"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <div className="card shadow h-100">
        <div className="card-body text-center">
          <img
            src={img}
            className=" "
            style={{ maxHeight: "200px", width: "100%" }}
          />
          <h5 className="mt-2">{title}</h5>
          <h6 className="text-primary">{author}</h6>
        </div>
      </div>
    </div>
  );
}
export default Bookmapprops;
