import React from "react";
import { Routes, Route } from "react-router-dom";
import { Contactus } from "../Components/Screen/Contactus";
import { Equip } from "../Components/Screen/Equip";
import { MyProyects } from "../Components/Screen/login/MyProyects";
import { NewEquip } from "../Components/Screen/login/NewEquip";
import { NewProyect } from "../Components/Screen/login/NewProyect";
import { ProfileScreen } from "../Components/Screen/login/ProfileScreen";
import { WelcomScreen } from "../Components/Screen/WelcomScreen";
import { Nav1 } from "../Components/ui/Nav1";



export const DashboardRoutes = () => {
  return (
      <>
        <Nav1 />
        <div className="container mt-2">
          <Routes>
            <Route path="/contact" element={<Contactus/>} />
            <Route path="/myproyects" element={<MyProyects/>} />
            <Route path="/newproyect" element={<NewProyect/>} />
            <Route path="/profile" element={<ProfileScreen/>} />
            <Route path="/welcom" element={<WelcomScreen/>} />
            <Route path="/newequip" element={<NewEquip/>} />
            <Route path="/addequip/:nameproy" element={<Equip/>}/>
          </Routes>
        </div>
      </>
    );
}