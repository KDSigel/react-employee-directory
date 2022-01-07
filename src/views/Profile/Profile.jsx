import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getProfile } from "../../services/profiles"

export default function Profile() {

    const [currentProfile, setCurrentProfile] = useState({})

    const history = useHistory()

    useEffect(() => {

        async function setExistingProfile () { 
          const existingProfile = await getProfile()
            setCurrentProfile(existingProfile)
        }
        setExistingProfile()
        }, [])

    return (
        <div>
            {/* <button onClick={history.push('/editprofile')}>edit profile</button> */}
            <p>name: {currentProfile.name}</p>
            <p>email: {currentProfile.email} </p>
            <p>birthday: {currentProfile.birthday} </p>
            <p>bio: {currentProfile.bio} </p>
        </div>
    )
}
