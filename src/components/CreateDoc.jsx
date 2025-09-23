import "./CreateDoc.css";
import api_url from "../url.js";
import { useState } from "react";

function CreateDoc() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        alert("Document was created!");

        fetch(`${api_url}/api/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content })
        });

        setTitle("");
        setContent("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="title">Create new document</h2>

            <div className="editor-form">
            <label htmlFor="title">Document Title</label><br/>
            <input
                id="title"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            /><br/>

            <label htmlFor="content">Document Text</label><br/>
            <textarea
                id="content"
                type="text"
                value={content}
                onChange={e => setContent(e.target.value)}
            /><br/>

            <button className="create-button" type="submit">Create Document</button>
            </div>
        </form>
        
    )
}

export default CreateDoc;