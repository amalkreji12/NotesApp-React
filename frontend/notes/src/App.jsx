/* eslint-disable no-unused-vars */
import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import LandingPage from './pages/Landing/LandingPage';
import About from './pages/About/About';
import Features from './pages/Features/Features';


const routes = (
  <Router>
    <Routes>
      <Route path='/' exact element={<LandingPage/>} />
      <Route path='/dashboard' exact element={<Home />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/signup' exact element={<SignUp />} />
      <Route path='/about' exact element={<About/>} />
      <Route path='/features' exact element={<Features/>} />
    </Routes>
  </Router >
)
function App() {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App