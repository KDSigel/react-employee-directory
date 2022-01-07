export default function EditProfile() {
    return (
        <div>
            <p>if no name, message stating they will need to create a profile</p>
            <p>or</p>
            <p>if name exists, message stating they will need to edit the profile</p>
            
            <p>name: string</p>
            <p>email: string (disabled; not editable, but still visible in the form)</p>
            <p>birthday: date (you can use input type="date")</p>
            <p>bio: text (you can use textarea)</p>
        </div>
    )
}
