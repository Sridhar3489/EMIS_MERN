
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import AddStudent from './pages/addStudent'
import StudentLogin from './pages/studentLogin';

const App = () => {
  return (

    <>

      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
