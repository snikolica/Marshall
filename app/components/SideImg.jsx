import React from "react";

export default function SideImg() {
  return (
    <div className="side-img">
      <h2>
        YOU MAY <span className="italic">LOVE </span>THE IDEAS OF ​​US?
      </h2>
      <p>
        We create experiences that transform brands, grow businesses and make
        people's lives better.
      </p>
      <div className="side-pictures">
        <div className="side-picture">
          <img src="./img/work1.jpg" alt="" />
        </div>
        <div className="side-picture">
          <img src="./img/work2.jpg" alt="" />
        </div>
        <div className="side-picture">
          <img src="./img/work3.jpg" alt="" />
        </div>
        <div className="side-picture">
          <img src="./img/work4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
