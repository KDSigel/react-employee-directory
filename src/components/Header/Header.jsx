import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';

export default function Header() {
  const { user, setUser } = useUser();

  const history = useHistory();
  
  const handleLogout = async () => {
    await signOutUser();
    setUser(null)
    history.push('/login');
  }

  return (
    <div>
      <span>Karl Inc</span>
      <span>____________</span>
      <span>
        {user ? (
          <>
            You are signed in as {user.email}
            <button onClick={handleLogout}>Sign Out</button>
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
