import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import Header from "./layout/Header";
import RootRoutes from "./layout/RootRoutes";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <RootRoutes />
      </Router>
    </div>
  );
}

export default App;