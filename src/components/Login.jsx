import api_url from "../url.js";
import Wrapper from '../assets/wrappers/UpdateCreateDoc.js';
import { useState } from "react";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch(`${api_url}/api/users/login/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                const errorText = await response.text();
                alert("Login failed: " + errorText);
                return;
            }

            const data = await response.json();
            alert("Login successfull! Token: " + data.accesstoken);

            localStorage.setItem("token", data.accesstoken);

        } catch (error) {
            console.error(error);
            alert("An error occurred during login");

        }

    }

    return (
        <Wrapper>
        <form onSubmit={handleSubmit}>
             <h2 className="title">Login</h2>

            <div className="editor-form">
            <label htmlFor="username">Username</label><br/>
            <input
                id="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            /><br/>

            <label htmlFor="password">Password</label><br/>
            <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            /><br/>

            <button className="create-button" type="submit">Login</button>
            </div>
        </form>
        </Wrapper>        
    )
}

export default Login;