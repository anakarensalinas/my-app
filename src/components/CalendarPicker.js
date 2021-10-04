import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const CalendarPicker = props => (
  <div>
    Select a Date:
    <DatePicker
      dateFormat="yyyy-MM-dd"
      selected={props.date}
      onChange={props.changeDate}
    />
  </div>
);
export default CalendarPicker;