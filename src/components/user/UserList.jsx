import { useState, useEffect } from "react";
import Wrapper from '../../assets/wrappers/AllUsers.js';
import api_url from "../../url.js";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";


function UserList() {
    const [user, setUser] = useState([]);

    async function fetchUser() {
        try {
            const response = await fetch(`${api_url}/api/users/me`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            const data = await response.json();
            setUser(data);

        } catch (error) {
            console.error("Error fetching users:", error);
            setUser(null);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <Wrapper>
            
            <div className="user-form">
                <h2 className="title-user">User profile</h2>
                <div className="profile-user">
                <p><small>username:</small> {user.username}<br/><small>email: </small>{user.email}</p>
                </div>
                <div className="button-container">
                    <EditUser user={user} onUpdate={fetchUser} />
                    <DeleteUser id={user.id} onDelete={fetchUser} />
                </div>

            </div>
        </Wrapper>
    )
}
export default UserList;