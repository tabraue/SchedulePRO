import React, { useState } from "react";
import "./Calendar.css";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [startMonth, setStartMonth] = useState(new Date().getMonth());
  const [startYear, setStartYear] = useState(new Date().getFullYear());

  const nextWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(newStartDate.getDate() + 7);
    setStartDate(newStartDate);
    setStartMonth(newStartDate.getMonth());
    setStartYear(newStartDate.getFullYear());
  };

  const previousWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(newStartDate.getDate() - 7);
    setStartDate(newStartDate);
    setStartMonth(newStartDate.getMonth());
    setStartYear(newStartDate.getFullYear());
  };

  const weekDaysNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  switch (startMonth) {
    case 0:
      setStartMonth("January");
      break;
    case 1:
      setStartMonth("February");
      break;
    case 2:
      setStartMonth("March");
      break;
    case 3:
      setStartMonth("April");
      break;
    case 4:
      setStartMonth("May");
      break;
    case 5:
      setStartMonth("June");
      break;
    case 6:
      setStartMonth("July");
      break;
    case 7:
      setStartMonth("August");
      break;
    case 8:
      setStartMonth("September");
      break;
    case 9:
      setStartMonth("October");
      break;
    case 10:
      setStartMonth("November");
      break;
    case 11:
      setStartMonth("December");
      break;
  }

  const getWeekDays = () => {
    const weekDays = [];
    const startOfWeek = new Date(startDate);
    startOfWeek.setDate(
      startDate.getDate() - ((startDate.getDay() + 6) % 7) // Ajuste para que el inicio de la semana sea siempre lunes
    );

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      weekDays.push(
        <span className="day" key={day.getDate()}>
          {day.getDate()}
        </span>
      );
    }

    return weekDays;
  };

  return (
    <>
      <div className="month-year">
        <button onClick={previousWeek}>
          <p>----</p>
        </button>
        <h2>
          {startMonth} {startYear}
        </h2>
        <button onClick={nextWeek}>
          <p>----</p>
        </button>
      </div>

      <div className="dayContainer">
        {weekDaysNames.map((dayName, idx) => (
          <span className="day" key={idx}>
            {dayName}
          </span>
        ))}
        {getWeekDays()}
      </div>
    </>
  );
}

export default Calendar;
