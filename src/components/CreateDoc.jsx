import "./CreateDoc.css";
import { useState } from "react";

function CreateDoc() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        alert("Document was created!");

        fetch(`http://localhost:8080/api/create`, {
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

            <button className="create-button" type="submit">Skapa</button>
            </div>
        </form>
        
    )
}

export default CreateDoc;