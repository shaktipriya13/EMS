import React from 'react';
// A file named AuthContext typically refers to a context in React that is used to manage authentication state and logic across the application.

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null);
  return (
    <div>
      <AuthContext.Provider value={"shakti"}>
        {children}
        </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
{children}