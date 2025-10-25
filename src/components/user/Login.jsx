import api_url from "../../url.js";
import Wrapper from '../../assets/wrappers/UpdateCreateDoc.js';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/*
Component to handle login of user.
*/
function Login() {
    // Use navigate to redirect user if login successful.
    const navigate = useNavigate();
    // Use useState to handle form data.
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // Prevent submit default behavior and handles login of user.
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            // Call API to login a user by sending username and password.
            const response = await fetch(`${api_url}/api/users/login/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            // If API call is not successful let user know and return error from
            // API call.
            if (!response.ok) {
                const errorText = await response.text();
                alert("Login failed: " + errorText);
                return;
            }
            // Store returned data from API call
            const data = await response.json();
            // Set returned token and username in localstorage
            localStorage.setItem("token", data.accesstoken);
            localStorage.setItem("username", data.username);
            window.dispatchEvent(new Event("storage"));
            // Tell user of success and redirect user to its saved documents.
            alert("Login successful!");
            navigate("/docs");

        } catch (error) {
            console.error(error);
            alert("An error occurred during login");
        }
    }

    return (
        // Renders user form for login.
        <Wrapper>
        <div className="user-form">
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
        </div>
        </Wrapper>        
    )
}

export default Login;