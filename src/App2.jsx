import React, { use, useContext, useEffect, useState } from 'react';
import Login from './component/Auth/Login';
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard';
import AdminDashboard from './component/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext);
  // console.log(authData.employees);
  // console.log(authData);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser');
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  // handle login will chk whether the email and password are correct or not
  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === '123') {
      setUser({ role: 'admin' });
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee= authData.employees.find((e) => email == e.email && e.password == password);
      if (employee) {
          setUser({ role: 'employee' });
      }
      setUser('employee');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));

    } else {
      alert('Invalid Credentials');
    }
  };



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {/* if user is not logged in, show login page  */}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* if user is admin, show admin dashboard */}
    </>
  );
};

export default App;
