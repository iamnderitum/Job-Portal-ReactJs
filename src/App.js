import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CandidateRegistration from "./components/CandidateRegistration";
import CandidateList from "./components/CandidateList";
import Navbar from "./components/Navbar";
import logo from "./logo.svg"

function App() {
  return (
    <Router>
    // Hint: Implement routing and modify this file to render correct components as per requirements.
      <div>
       <Navbar />
       <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/candidate/registration" Component={CandidateRegistration}/>
          <Route exact path="/candidate/list" Component={CandidateList}/>
       </Routes>
      </div>
    </Router>
  );

}

export default App;
