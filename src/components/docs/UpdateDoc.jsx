import Wrapper from '../../assets/wrappers/UpdateCreateDoc.js';
import api_url from "../../url.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateDoc( {preselectedDoc }) {
        if (!preselectedDoc) {
            return <p style={{ color: "limegreen" }}>Select a document to edit.</p>;
        }
    
    const navigate = useNavigate();
    const [title, setTitle] = useState(preselectedDoc.title);
    const [content, setContent] = useState(preselectedDoc.content);
    const [email, setEmail] = useState("");

    //Funktion för att hantera ett submit
    function handleSubmit(e) {
        // Förhindra ladda om sidan och göra fetch
        e.preventDefault();

        alert("Document was saved!");

        fetch(`${api_url}/api/update/${preselectedDoc.id}`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
             },
            body: JSON.stringify({ title, content })
        }).then(() => navigate("/docs"));
    }

    function handleInvite(e) {
        e.preventDefault();

        alert("Invitation was sent!");

        fetch(`${api_url}/api/invite`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
             },
            body: JSON.stringify({
                email: email,
                doc_id: preselectedDoc.id
            })
        });

        setEmail("");
    }

    return (
        <Wrapper>
            <div className="editor-form">
                <form onSubmit={handleSubmit}>
                    <label>Document Title</label><br/>
                    <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    /><br/>

                    <label>Document Text</label><br/>
                    <textarea
                    type="text"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    /><br/>
                    
                    <button className="update-button" type="submit">Save document</button>
                </form>

                <div style={{ marginTop: "1rem" }}>
                    <label>Invite collaborator (email)</label><br/>
                    <input 
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    /><br/>
                    <button className="create-button" type="submit">Send Invitation</button>
                </div>
            </div>
        </Wrapper>
    );
}

export default UpdateDoc;