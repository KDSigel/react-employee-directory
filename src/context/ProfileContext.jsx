import { createContext, useContext, useState } from 'react';
import { getProfile } from '../services/profiles';
import { getUser } from '../services/users';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const currentProfile = getProfile();
  const [profile, setProfile] = useState(
    currentProfile
      ? {
          name: currentProfile?.name,
          email: currentProfile.email,
          bio: currentUser?.bio,
          birthday: currentUser?.birthday,
        }
      : null
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

export { ProfileContext, useProfile };
