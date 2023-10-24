import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const Calender = ({ calender, month }) => {
  const [date, setDate] = useState();
  useEffect(() => {
    console.log(calender);
    const specificMonth = moment().startOf("month").month(month);
    setDate(specificMonth);
    
  }, [calender, month]);

  return (
    <main style={{ height: "90vh" }}>
      <Calendar
        localizer={localizer}
        events={calender}
        defaultDate={new Date()}
        date={date? date._d : null}
        defaultView="month"
        startAccessor="start"
        endAccessor="end"
        style={{ height: "90vh" }}
      />
    </main>
  );
};

export default Calender;
