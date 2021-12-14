import React from "react";
import { Routes, Route } from "react-router-dom";
import { WelcomScreen } from "../Components/Screen/WelcomScreen";
import { Contactus } from "../Components/Screen/Contactus";
import { Navba } from "../Components/ui/Navba";
import { About } from "../Components/Screen/About";
import { AuthScreen } from "../Components/Screen/authScreen/AuthScreen";

export const AuthRouter = () => {
  return (
    <>
      <Navba />
      <div className="container mt-2">
        <Routes>
          <Route path="/contact" element={<Contactus/>} />
          <Route path="/welcom" element={<WelcomScreen/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<AuthScreen/>} />
          <Route path="/welcom" element={<WelcomScreen/>} />
        </Routes>
      </div>
    </>
  );
};
