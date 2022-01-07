import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import EmailPasswordForm from '../../components/EmailPasswordForm/EmailPasswordForm';
import { useProfile } from '../../context/ProfileContext';
import { useUser } from '../../context/UserContext';
import { signInUser } from '../../services/users';

export default function LogIn() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useUser();
  const {profile} = useProfile();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const user = await signInUser(email, password);
    setUser(user);
    { profile ?
    history.replace('/profile')
    : history.replace('/editprofile')
    }
  };

  return (
    <div>
      <p>Welcome back!</p>
      <fieldset>
        <legend>Sign In</legend>
        <EmailPasswordForm
          label="Sign In"
          handleSubmit={handleSignIn}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </fieldset>
      <p>
        Need an account? <a href="/register">Sign Up</a>
      </p>
    </div>
  );
}
