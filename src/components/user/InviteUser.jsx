import { useState } from "react";
import api_url from "../../url.js";
import Wrapper from "../../assets/wrappers/InviteUser.js";
/*
Component to handle document sharing between users. If a document
is shared to a non registered user the API will save that document
as a pending document. If a user with given email is later registered
those documents that are pending to users email will be added to
the users documents.
*/
function InviteUser({ docId }) {
    // Use useState to handle email data from form
    const [email, setEmail] = useState("");
    // Prevents default behavior of submit and calls api.
    async function handleInvite(e) {
        e.preventDefault();
        // Tell user that invite has been sent.
        alert("Invitation was sent!");
        // Calls API to invite a user to document provides token to
        // identify and validate that user is logged in.
        await fetch(`${api_url}/api/doc/invite`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                email: email,
                doc_id: docId
            })
        });
        setEmail("");
    }

    return (
        // Renders invite form.
        <Wrapper>
            <div className="invite-box">
                <label>Invite collaborator (email)</label><br/>
                <input 
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                /><br/>
                <button 
                    onClick={handleInvite} 
                    className="create-button"
                >Send</button>
            </div>
        </Wrapper>
    );
}

export default InviteUser;
