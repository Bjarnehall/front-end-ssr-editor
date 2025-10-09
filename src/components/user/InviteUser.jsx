import { useState } from "react";
import api_url from "../../url.js";
import Wrapper from "../../assets/wrappers/InviteUser.js";

function InviteUser({ docId }) {
    const [email, setEmail] = useState("");

    async function handleInvite(e) {
        e.preventDefault();

        alert("Invitation was sent!");

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
                >
                    Send Invitation
                </button>
            </div>
        </Wrapper>
    );
}

export default InviteUser;
