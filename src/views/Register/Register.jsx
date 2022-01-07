import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import EmailPasswordForm from '../../components/EmailPasswordForm/EmailPasswordForm';
import { useUser } from '../../context/UserContext';
import { signUpUser } from '../../services/users';

export default function Register() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useUser();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const user = await signUpUser(email, password);
    setUser(user);
    history.replace('/editprofile');
  };

  return (
    <div>
      <p>Welcome!</p>
      <fieldset>
        <legend>Sign Up</legend>
        <EmailPasswordForm
          label="Register"
          handleSubmit={handleSignUp}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </fieldset>
      <p>
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
}
