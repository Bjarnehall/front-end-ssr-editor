import Wrapper from '../assets/wrappers/UpdateCreateDoc.js';
import { useState } from "react";

function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert(`Register attempt with username: ${username}, email: ${email}`);

        // fetch(`${api_url}/api/create`, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ title, content })
        // });
    }

    return (
        <Wrapper>
        <form onSubmit={handleSubmit}>
             <h2 className="title">Register</h2>

            <div className="editor-form">
            <label htmlFor="username">Username</label><br/>
            <input
                id="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            /><br/>
        
            <label htmlFor="email">Email</label><br/>
            <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            /><br/>

            <label htmlFor="password">Password</label><br/>
            <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            /><br/>

            <label htmlFor="confirmPassword">Confirm Password</label><br/>
            <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
            /><br/>

            <button className="create-button" type="submit">Register</button>
            </div>
        </form>
        </Wrapper>        
    )
}

export default Register;