import "./UpdateDoc.css";
import { useState } from "react";

function UpdateDoc( {preselectedDoc }) {
    const [title, setTitle] = useState(preselectedDoc.title);
    const [content, setContent] = useState(preselectedDoc.content);

    //Funktion för att hantera ett submit
    function handleSubmit(e) {
        // Förhindra ladda om sidan och göra fetch
        e.preventDefault();

        alert("Document was saved!");

        fetch(`http://localhost:8080/api/update/${preselectedDoc.id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content })
        });
    }

    return (
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
    );
}

export default UpdateDoc;