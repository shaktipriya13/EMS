import React, { useContext, useEffect, useState } from 'react';
import Login from './component/Auth/Login';
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard';
import AdminDashboard from './component/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);

  // handle login will chk whether the email and password are correct or not
  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === '123') {
      setUser('admin');
    } else if (email === 'user@gmail.com' && password === '123') {
      setUser('employee');
    } else {
      alert('Invalid Credentials');
    }
  };

  const data=useContext(AuthContext);
  console.log(data);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {/* if user is not logged in, show login page  */}
      {user === 'admin' ? <AdminDashboard /> : user === 'employee' ? <EmployeeDashboard /> : ''}
      {/* if user is admin, show admin dashboard */}
    </>
  );
};

export default App;
