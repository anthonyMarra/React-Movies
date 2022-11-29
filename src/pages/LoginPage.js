import { useState } from "react"

function LoginPage({ setProfile }) {
    const [input, setInput] = useState("")

    function handleChange(evt) {
        setInput(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        setProfile(input)
    }
    return (
        <>
            <h2>Enter Username Here:</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" onChange={handleChange} />
                <button type="submit" className="login-button">Sign In</button>
            </form>
        </>
    );
}

export default LoginPage;
