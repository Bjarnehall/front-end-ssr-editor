import Wrapper from '../../assets/wrappers/UpdateCreateDoc.js';
import api_url from "../../url.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InviteUser from "../user/InviteUser";
import { io } from "socket.io-client";

let socket;

function UpdateDoc({ preselectedDoc }) {
    const navigate = useNavigate();

    const docId = preselectedDoc.id || preselectedDoc._id;
    const [title, setTitle] = useState(preselectedDoc.title);
    const [content, setContent] = useState(preselectedDoc.content);

    if (!preselectedDoc) {
        return <p style={{ color: "limegreen" }}>Select a document to edit.</p>;
    }

    /*
    Connect to sockets create new room with docId
    */
    useEffect(() => {
        socket = io(api_url);
        socket.emit("create", docId);
        socket.on("doc", (updateDoc) => {
            setTitle(updateDoc.title);
            setContent(updateDoc.content);
        });

        return () => {
            socket.disconnect();
        };
    }, [docId]);
    /*
    Check for content change and submit new content
    */
    const handleContentChange = (e) => {
        const newContent = e.target.value;
        setContent(newContent);
        socket.emit("doc", { _id: docId, title: title, content: newContent });
    };
    /*
    Check for title change and submit new title
    */
    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        socket.emit("doc", { _id: docId, title: newTitle, content: content });
    };

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
                        onChange={handleTitleChange}
                    /><br/>

                    <label>Document Text</label><br/>
                    <textarea
                        type="text"
                        value={content}
                        onChange={handleContentChange}
                    /><br/>
                    
                    <button className="update-button" type="submit">Save document</button>
                </form>
            </div>
        </Wrapper>
    );
}

export default UpdateDoc;
