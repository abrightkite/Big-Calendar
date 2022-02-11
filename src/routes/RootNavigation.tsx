import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyCalendarContainer from "@components/MyCalendar/containers/MyCalendarContainer";

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyCalendarContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
