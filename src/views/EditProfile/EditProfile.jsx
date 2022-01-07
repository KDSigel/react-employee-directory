import { useProfile } from '../../context/ProfileContext';
import { useUser } from '../../context/UserContext';

export default function EditProfile() {
  const { user } = useUser();
  const { profile, setProfile } = useProfile();

  const handleSubmit = () => {
      
  }

  const handleChange = () => {
      
  }

  return (
    <div>
      {!profile ? 
        <h3>You will need to create a profile</h3>
       : 
        <h3> edit your profile</h3>
      }
        <form onSubmit={handleSubmit}>
      <section>
        <label>name: <input type='text' value={profile ? profile.name :''} onChange={handleChange}/>
        </label>
      </section>
      <section>email: {user.email}</section>
      <section>
        <label>
        birthday: <input type="date" value={profile ? profile.date :''} onChange={handleChange}/>
        </label>
      </section>
      <section>
      <label>
        bio: <textarea rows="4" value={profile ? profile.bio :''} onChange={handleChange}/>
        </label>
      </section>
      <button>save profile</button>
      </form>
    </div>
  );
}
