import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';

export default function Header() {
  const { user } = useUser();

  return (
    <div>
      <span>Acme Inc</span>
      <span>____________</span>
      <span>
        {user ? (
          <>
            You are signed in as {user.email}
            <button onClick={() => signOutUser()}>Sign Out</button>
          </>
        ) : (
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        )}
      </span>
    </div>
  );
}
