import { createContext, useContext, useState } from 'react';
import { getProfile } from '../services/profiles';
import { useUser } from './UserContext';


const ProfileContext = createContext();


const ProfileProvider = ({ children }) => {
  const {user} = useUser();
  const currentProfile = getProfile();
  const [profile, setProfile] = useState(
    currentProfile.name
      ? {
          name: currentProfile.name,
          email: user.email,
          bio: currentProfile.bio,
          birthday: currentProfile.birthday,
        }
      : {}
  );

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfile = () => {
    const profileCtx = useContext(ProfileContext)
    if (profileCtx === undefined) {
        throw new Error('useProfile must be used within a ProfileProvider');
    }
    return profileCtx
};

export { ProfileProvider, useProfile };
