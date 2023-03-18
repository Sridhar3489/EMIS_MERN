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
import Home from './pages/Home';
import DistrictLogin from './pages/districtLogin';
import DistrictRegister from './pages/districtRegister';
import AllDistrict from './pages/allDistrict';
import SchoolRegister from './pages/schoolRegister';
import AllSchools from './pages/allSchools';
import EditDistrict from './pages/editDistrict';
import EditSchool from './pages/editSchool';
import AllFaculty from './pages/allFaculty';
import EditFaculty from './pages/editFaculty';
import AllStudents from './pages/allStudent';
import EditStudent from './pages/editStudent';
import AddVideo from './pages/addVideo';
import AllVideos from './pages/allVideos';

const App = () => {
  return (

    <>

      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/facultyloginforcourse" element={<FacultyLoginforCourse/>}/>
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/learninghomepage" element={<CoursePage />} />
          <Route path="/studentregister/:id" element={<StudentRegister />} />
          <Route path="/facultyregister/:id" element={<FacultyRegister />} />
          <Route path='/facultyhomepage/:id' element={<FacultyHomePage/>}/>
          <Route path='/addcourse' element={<AddCourse/>}/>
          <Route path="/districtlogin" element={<DistrictLogin />} />
          <Route path="/districtregister/:id" element={<DistrictRegister />} />
          <Route path="/alldistrict/:id" element={<AllDistrict />} />
          <Route path='/schoolregister/:id' element={<SchoolRegister/>}/>
          <Route path='/allschool/:id' element={<AllSchools/>}/>
          <Route path='/editdistrict/:id' element={<EditDistrict/>}/>
          <Route path='/editschool/:id' element={<EditSchool/>}/>
          <Route path='/allfaculty/:id' element={<AllFaculty/>}/>
          <Route path='/editfac/:id' element={<EditFaculty/>}/>
          <Route path='/allstudent/:id' element={<AllStudents/>}/>
          <Route path='/editstud/:id' element={<EditStudent/>}/>
          <Route path='/addvideo' element={<AddVideo/>}/>
          <Route path='/allvideo' element={<AllVideos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
