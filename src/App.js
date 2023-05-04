import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Comment from "./pages/Comment.jsx";
import Analistic from "./pages/Analistic.jsx";
import Login from "./pages/login.jsx";
import './App.css';


const Sport = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/registration" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analistic" element={<Analistic />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default Sport;