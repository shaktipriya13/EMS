import React from 'react';

// AuthContext is a React context component that provides authentication-related data and functions to its children components.
const AuthContext = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default AuthContext;
