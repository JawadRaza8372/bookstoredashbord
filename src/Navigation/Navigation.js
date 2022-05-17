import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Routess from "./Routess";
import AnimatedSideBar from "../Components/SideBar/AnimatedSideBar";
function Navigation() {
  const location = useLocation()?.pathname;
  return (
    <>
      {location !== "/" ? (
        <AnimatedSideBar>
          <Routess />
        </AnimatedSideBar>
      ) : (
        <Routess />
      )}
    </>
  );
}

export default Navigation;
