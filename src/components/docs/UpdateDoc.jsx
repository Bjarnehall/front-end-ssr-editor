import Wrapper from '../../assets/wrappers/UpdateCreateDoc.js';
import api_url from "../../url.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InviteUser from "../user/InviteUser";

function UpdateDoc({ preselectedDoc }) {
    const navigate = useNavigate();

    const docId = preselectedDoc.id || preselectedDoc._id;
    const [title, setTitle] = useState(preselectedDoc.title);
    const [content, setContent] = useState(preselectedDoc.content);

    if (!preselectedDoc) {
        return <p style={{ color: "limegreen" }}>Select a document to edit.</p>;
    }

    function handleSubmit(e) {
        e.preventDefault();

        alert("Document was saved!");

        console.log("Updating:", `${api_url}/api/doc/update/${docId}`);
        fetch(`${api_url}/api/doc/update/${docId}`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ title, content })
        }).then(() => navigate("/docs"));
    }

    return (
        <Wrapper>
            <button 
                className="back-button" 
                type="button" 
                onClick={() => navigate("/docs")}
            >
                Back to documents
            </button>

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
            </div>
        </Wrapper>
    );
}

export default UpdateDoc;
