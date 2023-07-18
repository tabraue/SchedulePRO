import React from "react";
import LinesChart from "./LinesChart";



function MiChart() {




  return (
    <div>
      <h1>Chart</h1>
      <div>
        <p>Employee 1</p>
        <div className="bg-white-sand min-w[450px] min-h-[300px] border border-2 border-blue-calypso p-5 m-11">
          <LinesChart/>
        </div>
      </div>
    </div>
  );
}

export default MiChart;
