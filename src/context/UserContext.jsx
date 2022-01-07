import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
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
