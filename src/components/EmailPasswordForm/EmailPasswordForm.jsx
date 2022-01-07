export default function EmailPasswordForm({handleSubmit, email, setEmail, password, setPassword, label}) {

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} 
                />
            </label>
            <label>
                Password
                <input type='password'
                       onChange={(e) => setPassword(e.target.value)}
                       value={password} 
                />
            </label>
            <button type='submit'>{label}</button>
        </form>
    )
}
