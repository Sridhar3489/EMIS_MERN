
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import StudentLogin from './pages/studentLogin';
import CoursePage from './pages/coursePage';
import StudentRegister from './pages/studentRegister';
import FacultyLoginforCourse from './pages/facultyLoginforCourse';
import FacultyRegister from './pages/facultyRegister';
import FacultyHomePage from './pages/facultyHomePage';
import AddCourse from './pages/addCourse';
import Image from './pages/image';
import Video from './pages/video';
const App = () => {
  return (

    <>

      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/facultyloginforcourse" element={<FacultyLoginforCourse/>}/>
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/learninghomepage" element={<CoursePage />} />
          <Route path="/studentregister" element={<StudentRegister />} />
          <Route path="/facultyregister" element={<FacultyRegister />} />
          <Route path='/facultyhomepage' element={<FacultyHomePage/>}/>
          <Route path='/addcourse' element={<AddCourse/>}/>
          <Route path='/image' element={<Image/>}/>
          <Route path='/video/:id' element={<Video/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
