import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CalendarContainer from "@components/Calendar/containers/CalendarContainer";

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CalendarContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
