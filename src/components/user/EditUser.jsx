import { useState } from "react";
import api_url from "../../url.js";

function EditUser({ user, onUpdate}) {
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [isEditing, setIsEditing] = useState(false);

    async function handleSave() {
        try {
            console.log("Updating user with data:", { username, email });
            const response = await fetch(`${api_url}/api/users/update/${user.id || user._id}`, {
                method: "PUT",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ username, email })
            });

            if (!response.ok) {
                const errorText = await response.text();
                alert("Failed to update user: " + errorText);
                return;
            }

            alert("User updated successfully!");
            setIsEditing(false);
            onUpdate();
        } catch (error) {
            console.error("Error updating user:", error);
        }
    }

    return (
        <div>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="list-button" onClick={handleSave}>Save</button>
                    <button className="list-button" onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <button className="list-button" onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </div>
    );
}

export default EditUser