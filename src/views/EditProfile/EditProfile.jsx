import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { createProfile, getProfile, updateProfile } from '../../services/profiles';

export default function EditProfile({isEdit=true}) {
  const { user } = useUser();

  const [formState, setFormState] = useState({name:'', birthday: '', bio: ''})

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    isEdit
     ? updateProfile({...formState, email: user.email}) : createProfile({...formState, email: user.email}) 
     isEdit=false
    history.push('/profile')
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormState((previousState) => ({...previousState, [name]: value}));
  };

  useEffect(() => {
    async function setExistingUser () { 
      const existingProfile = await getProfile()
      if (isEdit) {
      setFormState(existingProfile)
      }
    }
    setExistingUser()
    }, [])

  return (
    <div>
      {!formState.name ? (
        <h3>You will need to create a profile</h3>
      ) : (
        <h3> edit your profile</h3>
      )}
      <form onSubmit={handleSubmit}>
        <section>
          <label>
            name:{' '}
            <input
              name='name'
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
          </label>
        </section>
        <section>email: {user.email}</section>
        <section>
          <label>
            birthday:{' '}
            <input
              name='birthday'
              type="date"
              value={formState.birthday}
              onChange={handleChange}
            />
          </label>
        </section>
        <section>
          <label>
            bio:{' '}
            <textarea
              rows="4"
              name='bio'
              value={formState.bio}
              onChange={handleChange}
            />
          </label>
        </section>
        <button>save profile</button>
      </form>
    </div>
  );
}
