import { useState, useEffect } from "react";
import Wrapper from '../assets/wrappers/AllDocs.js';
import api_url from "../url.js";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      async function fetchUsers() {
          try {
            const response = await fetch(`${api_url}/api/users/`);
            const data = await response.json();
            setUsers(data);

        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }
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
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}
export default UserList;