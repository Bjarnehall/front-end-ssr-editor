import { useState, useEffect } from "react";
import Wrapper from '../assets/wrappers/AllUsers.js';
import api_url from "../url.js";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";


function UserList() {
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        try {
            const response = await fetch(`${api_url}/api/users/`);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Wrapper>
            <h2 className="title">All Users</h2>
            <ul className="list">
                {users
                    .filter(user => user.username && user.email)
                    .map(user => (
                    <li key={user.id}>
                        <strong>{user.username}</strong> – {user.email}
                        {" "}
                        <EditUser user={user} onUpdate={fetchUsers} />
                        <DeleteUser id={user.id} onDelete={fetchUsers} />
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}
export default UserList;