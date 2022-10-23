import React, { Component } from "react";
import Root from "./Root";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import requireAuth from "./utils/RequireAuth";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers['Content-Type'] = 'application/json'

const ProtectedDashboard = requireAuth(Dashboard);

class App extends Component {
  render() {
    return (
      <div>
        <Root>
          <Routes>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<ProtectedDashboard/>} />
            <Route exact path="/" element={<Home/>} />
            <Route path="*" element={<Navigate to='/' />} />
          </Routes>
        </Root>
        <ToastContainer hideProgressBar={true} newestOnTop={true} />
      </div>
    );
  }
}

export default App;