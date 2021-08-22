import React from "react";

function Scroll({ children, ...props }) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px",
      }}
    >
      {children}
    </div>
  );
}

export default Scroll;
