import React, { useEffect } from 'react';
import Login from './component/Auth/Login';
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard';
import AdminDashboard from './component/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

const App = () => {
    const [user, setUser] = useState(null);
    
  return (
    <>
      {!user ? <Login/> : ''}
      {/* if user is not logged in, show login page  */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
