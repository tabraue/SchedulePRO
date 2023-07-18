import React, { useEffect, useState } from "react";
import LinesChart from "./LinesChart";
import { showFormatScheduleFromEmployee } from "../../services/schedule.service";



function MiChart({id}) {
  const [lengthState, setLengthState] = useState([])
  /*

   [
    {shift: 'Evening', day: '2023-07-18T00:00:00.000Z'}
    {shift: 'Night', day: '2023-07-19T00:00:00.000Z'} 
]
  */
  const schedule = async () => {
    const res = await showFormatScheduleFromEmployee(id) 
    if(res){
      const shifts = ["Morning", "Evening", "Night", "Day Off", "Holiday", "Medical"];
      const shiftCount = {};
      shifts.forEach((shift) => { shiftCount[shift] = 0 });  

      res.forEach((entry) => {
        const { shift } = entry;
        if (shift in shiftCount) {
          shiftCount[shift]++;
        }
      });
  
      const lengths = shifts.map((shift) => shiftCount[shift]);
      setLengthState(lengths)
      return lengths;
    }
  }

  useEffect(() => {
    schedule()
  }, [])

  return (
    <div className="bg-white-sand">
        <div className="bg-white-sand min-w[450px] min-h-[300px] border border-2 border-blue-calypso p-5 m-11">
          <LinesChart lengthState={lengthState}/>
        </div>
    </div>
  );
}

export default MiChart;
