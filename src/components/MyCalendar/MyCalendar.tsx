import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const MyCalendar = () => {
  moment.locale("ko-KR");
  const localizer = momentLocalizer(moment);

  const MyEventList = [
    {
      title: "All Day Event very long title",
      allDay: true,
      start: new Date(2022, 1, 0, 10, 30, 0, 0),
      end: new Date(2022, 1, 1, 10, 30, 0, 0),
    },
    {
      title: "Hellen",
      allDay: true,
      start: new Date(2022, 1, 0),
      end: new Date(2022, 1, 1),
    },
    {
      title: "WIM",
      allDay: true,
      start: new Date(2022, 1, 0),
      end: new Date(2022, 1, 1),
    },
    {
      title: "JjaJaJan",
      allDay: true,
      start: new Date(2022, 1, 0),
      end: new Date(2022, 1, 1),
    },
    {
      title: "dorn",
      allDay: true,
      start: new Date(2022, 1, 0),
      end: new Date(2022, 1, 1),
    },
    {
      title: "Long Event",
      start: new Date(2022, 1, 7),
      end: new Date(2022, 1, 10),
    },
    {
      title: "Some Event",
      start: new Date(2022, 1, 9, 0, 0, 0),
      end: new Date(2022, 1, 9, 0, 0, 0),
    },
    {
      title: "Conference",
      start: new Date(2022, 1, 11),
      end: new Date(2022, 1, 13),
      desc: "Big conference for important people",
    },
    {
      title: "Meeting",
      start: new Date(2022, 3, 12, 10, 30, 0, 0),
      end: new Date(2022, 3, 12, 12, 30, 0, 0),
      desc: "Pre-meeting meeting, to prepare for the meeting",
    },
    {
      title: "Lunch",
      start: new Date(2022, 3, 12, 12, 0, 0, 0),
      end: new Date(2022, 3, 12, 13, 0, 0, 0),
      desc: "Power lunch",
    },
    {
      title: "Meeting",
      start: new Date(2022, 3, 11),
      end: new Date(2022, 3, 11),
    },
    {
      title: "Meeting",
      start: new Date(2022, 3, 12, 14, 0, 0, 0),
      end: new Date(2022, 3, 12, 15, 0, 0, 0),
    },
    {
      title: "Happy Hour",
      start: new Date(2022, 3, 12, 17, 0, 0, 0),
      end: new Date(2022, 3, 12, 17, 30, 0, 0),
      desc: "Most important meal of the day",
    },
    {
      title: "Dinner",
      start: new Date(2022, 3, 12, 20, 0, 0, 0),
      end: new Date(2022, 3, 12, 21, 0, 0, 0),
    },
    {
      title: "Birthday Party",
      start: new Date(2022, 3, 13, 7, 0, 0),
      end: new Date(2022, 3, 13, 10, 30, 0),
    },
    {
      title: "Birthday Party 2",
      start: new Date(2022, 3, 13, 7, 0, 0),
      end: new Date(2022, 3, 13, 10, 30, 0),
    },
    {
      title: "Birthday Party 3",
      start: new Date(2022, 3, 13, 7, 0, 0),
      end: new Date(2022, 3, 13, 10, 30, 0),
    },
    {
      title: "Late Night Event",
      start: new Date(2022, 3, 17, 19, 30, 0),
      end: new Date(2022, 3, 17, 21, 0, 0),
    },
    {
      title: "Multi-day Event",
      start: new Date(2022, 3, 20, 19, 30, 0),
      end: new Date(2022, 3, 22, 2, 0, 0),
    },
  ];

  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultView="month"
        defaultDate={new Date(2022, 1, 11)}
        events={MyEventList}
        titleAccessor="title"
        startAccessor="start"
        endAccessor="end"
        tooltipAccessor="title"
        style={{ height: 600, width: 1200 }} // 기본 props
        selectable
        onSelectSlot={({ start, end }) => {
          console.log("Selected", start, end);
        }}
        onDoubleClickEvent={(event) => console.log("double Clicked")}
        // popup={true}
        drilldownView="agenda" // 기능 props
        showMultiDayTimes={false}
      />
    </div>
  );
};

export default MyCalendar;
