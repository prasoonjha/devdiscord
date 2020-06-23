import React from "react";

import "./spinner.css";

function SpinnerComponent() {
  return (
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default SpinnerComponent;
