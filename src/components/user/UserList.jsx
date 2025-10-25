import { useState, useEffect } from "react";
import Wrapper from '../../assets/wrappers/AllUsers.js';
import api_url from "../../url.js";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

/*
Component to handle user profile
*/
function UserList({ onUserNameUpdate }) {
    // Handle userdata with useState
    const [user, setUser] = useState([]);
    // Call API to get logged in userinfo send token to validate that user is logged in.
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
        /* 
        Present data of user as a userprofile the user can edit its profile by pressing
        edit which then renders edit component or user can delete its own account which
        renders delete component. Props is sent to components to handle the data correctly.
        */
        <Wrapper>
            <div className="user-form">
                <h2 className="title-user">User profile</h2>
                <div className="profile-user">
                <p><small>username:</small> {user.username}<br/><small>email: </small>{user.email}</p>
                </div>
                <div className="button-container">
                    <EditUser user={user} onUpdate={fetchUser} onUserNameUpdate={onUserNameUpdate} />
                    <DeleteUser id={user.id} onDelete={fetchUser} onUserNameUpdate={onUserNameUpdate}/>
                </div>
            </div>
        </Wrapper>
    )
}
export default UserList;