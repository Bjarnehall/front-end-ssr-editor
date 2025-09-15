import { useState, useEffect } from "react";

function CreateDoc() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

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
            <h2>Skapa nytt dokument</h2>

            <label>Titel</label><br/>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            /><br/>


            <label>Innehåll</label><br/>
            <input
              type="text"
              value={content}
              onChange={e => setContent(e.target.value)}
            /><br/>

            <button type="submit">Skapa</button>
            
        </form>
    )
}

export default CreateDoc;