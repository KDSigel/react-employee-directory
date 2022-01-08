import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children, mockUser }) => {

  const [user, setUser] = useState(
    mockUser ? { id: mockUser.id, email: mockUser.email } : {}
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
    const userCtx = useContext(UserContext)
    if (userCtx === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return userCtx;
};

export { UserProvider, useUser };
