import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./CalendarFull.css";
import {
  showScheduleFromDepartment,
  showScheduleFromDepartmentByShift,
} from "../../services/schedule.service";

function CalendarFull({ selectedDepartment, shift, estilo }) {
  const [events, setEvents] = useState([]);

  const headerToolbar = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,dayGridWeek",
  };

  const colors = (shift) => {
    switch (shift) {
      case "Morning":
        return "#F9C97B";
      case "Evening":
        return "#D68E61";
      case "Night":
        return "#6c86a7";
      case "Off":
        return "#7FA76C";
      case "Holiday":
        return "#A76CA1";
      case "Medical":
        return "#AC5252";
      default:
        return "#357b8d";
    }
  };

  // DATE=AAAA/MM/DD

  const showAll = async () => {
    if (shift !== "All") {
      const res = await showScheduleFromDepartmentByShift(
        selectedDepartment,
        shift
      );
      if (res) {
        const eventsMap = res.map((el) => {
          return {
            title: el.employee.name,
            start: el.date.substring(0, 10),
            color: colors(el.shift),
          };
        });
        setEvents(eventsMap);
      } else {
        setEvents("");
      }
    } else {
      const res = await showScheduleFromDepartment(selectedDepartment); // SHIFT => ALL (only)
      if (res) {
        const eventsMap = res.map((el) => {
          return {
            title: el.employee.name,
            start: el.date.substring(0, 10),
            color: colors(el.shift),
          };
        });
        setEvents(eventsMap);
      } else {
        setEvents("");
      }
    }
  };

  //SCHEDULE FROM ONE DEPARTMENT

  useEffect(() => {
    showAll();
  }, [selectedDepartment, shift]);

  return (
    <div className={estilo}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridWeek"
        firstDay={1}
        events={events}
        headerToolbar={headerToolbar}
      />
    </div>
  );
}

export default CalendarFull;
//col-start-1 w-[1000px] h-[850px] overflow-hidden mb-8
