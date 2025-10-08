import api_url from "../../url.js";
import Wrapper from '../../assets/wrappers/UpdateCreateDoc.js';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch(`${api_url}/api/users/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password })
            });

            if (!response.ok) {
                const errorText = await response.text();
                alert("Registration failed: " + errorText);
                return;
            }

            const data = await response.json();
            alert("User registered successfully!");

            if (data.accesstoken && data.username) {
                localStorage.setItem("token", data.accesstoken);
                localStorage.setItem("username", data.username);
                window.dispatchEvent(new Event("storage"));
                navigate("/docs");
            } else {
                ("/login");
            }

            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

        } catch (error) {
            console.error(error);
            alert("An error occurred during registration");
        }
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