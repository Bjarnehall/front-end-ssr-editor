import { useState } from "react";

function UpdateDoc( {preselectedDoc }) {
    const [title, setTitle] = useState(preselectedDoc.title);
    const [content, setContent] = useState(preselectedDoc.content);

    //Funktion för att hantera ett submit
    function handleSubmit(e) {
        // Förhindra ladda om sidan och göra fetch
        e.preventDefault();

        fetch(`http://localhost:8080/api/update/${preselectedDoc.id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content })
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Titel</label><br/>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            /><br/>

            <label>Ny text</label><br/>
            <input
              type="text"
              value={content}
              onChange={e => setContent(e.target.value)}
            /><br/>
            
            <button type="submit">Uppdatera</button>
        </form>
    );
}

export default UpdateDoc;