import api_url from "../../url.js";
import Wrapper from '../../assets/wrappers/UpdateCreateDoc.js';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/*
Component to handle registration of new user.
*/
function Register() {
    // Navigate is used to redirect user to loginpage after
    // Succsesful registration.
    const navigate = useNavigate();
    // Usestate is used to handle the data user provides in form.
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // Prevent default behavior of submit button and handle the registration
    // with provided data.
    async function handleSubmit(e) {
        e.preventDefault();
        // Check that users password is what intended.
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            // Call API to create a new user by sending username, email and
            // password. The API will check if data is valid and user is not
            // already registered.
            const response = await fetch(`${api_url}/api/users/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password })
            });
            // If API call fails tell user and include error from API.
            if (!response.ok) {
                const errorText = await response.text();
                alert("Registration failed: " + errorText);
                return;
            }
            // If APU call success tell user and redirect to login page.
            alert("User registered successfully!");
            navigate("/login");

        } catch (error) {
            console.error(error);
            alert("An error occurred during registration");
        }
    }

    return (
        // Renders the registration form.
        <Wrapper>
        <div className="user-form">
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
        </div>
        </Wrapper>        
    )
}

export default Register;