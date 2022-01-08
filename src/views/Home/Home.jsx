import { useUser } from '../../context/UserContext';

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <p>Welcome to the Karl Inc. Employee Directory!</p>
      <p>
        As an employee of Karl Inc., you're required (under penalty of death) to create a profile on our intranet in order for your overlords to gain access to your personal info so we can fire you for any reason we want.
      </p>
      <p>Create an account right now! Fill out the all of the details truthfully, or else.</p>
      <p>Thank you for your mandatory participation.</p>
      {!user.email ? (
        <p>
          <a href="/register">Create Account</a>
          <span> or </span> 
          <a href="/login">Sign In</a>
        </p>
      ) : (
        <p>
          <a href="/profile">View your profile</a>
        </p>
      )}
    </div>
  );
}
