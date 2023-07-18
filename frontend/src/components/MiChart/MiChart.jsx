import React from "react";
import LinesChart from "./LinesChart";



function MiChart({id}) {

  // ID LLEGA PERFECTAMENTE!!! OK => HAY Q PASARLE A LINESCHART LA INFO DEL LENGTH DE CADA TURNO




  return (
    <div className="bg-white-sand">
        <div className="bg-white-sand min-w[450px] min-h-[300px] border border-2 border-blue-calypso p-5 m-11">
          <LinesChart/>
        </div>
    </div>
  );
}

export default MiChart;
