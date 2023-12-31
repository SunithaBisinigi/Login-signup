import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import LoginNavbar from './components/LoginNavbar';
import { ProtectedRoute } from './protectRoute/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/LoginNavbar" element={<ProtectedRoute> <LoginNavbar /> </ProtectedRoute>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App;
