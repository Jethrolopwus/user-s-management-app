
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import React from 'react';
import Home from "./Pages/Home";
import Navbar from './Pages/Navbar';
import User from "./Pages/Users/User";

function App() {
  return (
    <BrowserRouter>
     <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route  path="/users/:id" element={< User />}/>
        {/* <Route  path="/add-user" element={< Adduser />}/> */}
        {/* Add more routes here */}
      </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
