import api_url from "../../url.js";
import { useNavigate } from "react-router-dom";
import Wrapper from '../../assets/wrappers/AllUsers.js';

function DeleteUser({ id, onDelete }) {
    const navigate = useNavigate();

    async function handleDelete() {
        if (!confirm("Are you sure you want to delete this user?")) return;

        try {
            const response = await fetch(`${api_url}/api/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            if (!response.ok) {
                const errorText = await response.text();
                alert("Failed to delete user: " + errorText);
                return;
            }

            alert("User deleted successfully!");
            localStorage.clear();
            onDelete();
            navigate("/register");
            window.location.reload();
        } catch (error) {
            console.error("Error deleting user:", error)
        }
    }

    return (
        <button className="user-button" onClick={handleDelete}>Delete</button>
    )
}

export default DeleteUser;