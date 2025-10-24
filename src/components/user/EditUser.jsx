import { useState } from "react";
import api_url from "../../url.js";
import Wrapper from '../../assets/wrappers/UpdateCreateDoc.js';

function EditUser({ user, onUpdate}) {
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    async function handleSave() {
        try {
            //console.log("Updating user with data:", { username, email });
            const response = await fetch(`${api_url}/api/users/update/${user.id || user._id}`, {
                method: "PUT",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ username, email, password })
            });

            if (!response.ok) {
                const errorText = await response.text();
                alert("Failed to update user: " + errorText);
                return;
            }

            alert("User updated successfully!");
            setIsEditing(false);
            localStorage.setItem("username", username);
            window.location.reload();
            onUpdate();
        } catch (error) {
            console.error("Error updating user:", error);
        }
    }

    return (
        <Wrapper>
        <div className="user-form">
            {isEditing ? (
                <>
                <h4>Enter new records</h4>
                    <label>username: </label>
                    <br/>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br/>
                    <label>email: </label>
                    <br/>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br/>
                    <label>password: </label>
                    <br/>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br/>
                    <button className="user-button" onClick={handleSave}>Save</button><br/>
                    <button className="user-button" onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <button className="user-button" onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </div>
        </Wrapper>
    );
}

export default EditUser