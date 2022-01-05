import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Employee from './Employee';
import EmployeeAdd from './EmployeeAdd';
import EmployeeByID from './EmployeeByID';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Settings from './Settings';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/:employeeid" element={<EmployeeByID />}/>
          <Route path="/settings" element={<Settings />} />

          <Route path="/employeeadd" element={<EmployeeAdd />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
