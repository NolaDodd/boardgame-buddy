import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import PlayerPicker from "./PlayerPicker"
import Counter from "./Counter"
import DiceRoller from "./DiceRoller";
import Timer from "./Timer"
import RulesLibrary from "./RulesLibrary"
import NotFound from "./NotFound";


function RootRoutes() {
  
  return (
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/picker" element={<PlayerPicker />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/roll" element={<DiceRoller />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/rules" element={<RulesLibrary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default RootRoutes;