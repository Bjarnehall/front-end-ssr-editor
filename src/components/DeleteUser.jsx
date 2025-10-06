import api_url from "../url.js";

function DeleteUser({ id, onDelete }) {
    async function handleDelete() {
        if (!confirm("Are you sure you want to delete this user?")) return;

        try {
            const response = await fetch(`${api_url}/api/users/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                const errorText = await response.text();
                alert("Failed to delete user: " + errorText);
                return;
            }

            alert("User deleted successfully!");
            onDelete();
        } catch (error) {
            console.error("Error deleting user:", error)
        }
    }

    return (
        <button className="list-button" onClick={handleDelete}>Delete</button>
    )
}

export default DeleteUser;