
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import AddStudent from './pages/addStudent';
import AllStudent from './pages/allStudent';
import EditStudent from './pages/editStudent';
import AddVideo from './pages/addVideo';
import AllVideos from './pages/allVideos';
import DisplayVideo from './pages/displayVideo';
import Graphs from './pages/graphs';
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
          <Route path="/allStudents" element={<AllStudent />} />
          <Route path="/editStudent/:id" element={<EditStudent />} />
          <Route path="/addvideo" element={<AddVideo />} />
          <Route path="/allvideos" element={<AllVideos />} />
          <Route path="/displayvideo/:id" element={<DisplayVideo />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
