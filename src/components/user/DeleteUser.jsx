import api_url from "../../url.js";
import { useNavigate } from "react-router-dom";
/*
Component to handle deletion of user.
*/
function DeleteUser({ id, onDelete, onUserNameUpdate }) {
    // Use navigate to redirect user after user gets deleted.
    const navigate = useNavigate();

    async function handleDelete() {
        // Promt user if sure to delete userprofile.
        if (!confirm("Are you sure you want to delete this user?")) return;

        try {
            // Call API to delete user send token to validate user.
            const response = await fetch(`${api_url}/api/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            // Let user know if user could not be deleted send response from api
            if (!response.ok) {
                const errorText = await response.text();
                alert("Failed to delete user: " + errorText);
                return;
            }
            // Let user know deletion was successful, remove token and username
            // stored in localstorage. Also handle so username is updated to nothing.
            alert("User deleted successfully!");
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            if (onUserNameUpdate) onUserNameUpdate("");
            onDelete();
            // Navigate user to register.
            navigate("/register");
        } catch (error) {
            console.error("Error deleting user:", error)
        }
    }

    return (
        // Render delete button.
        <button type="button" className="user-button" onClick={handleDelete}>Delete</button>
    )
}

export default DeleteUser;