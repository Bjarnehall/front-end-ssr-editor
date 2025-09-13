import { useState, useEffect } from "react";
// Väljer jobba med med useState för lokal komponent state
// För att smidigt uppdatera värden
// useEfect för sid-effelter, hämta data från API efter render
// Det som händer efter värden uppdateras

function UpdateDoc() {
    const [docs, setDocs] = useState([]);
    const [id, setId] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
      fetch("http://localhost:8080/all")
        .then(res => res.json())
        .then(data => setDocs(data.data));
    }, []);

    //Funktion för att hantera ett submit
    function handleSubmit(e) {
        // Förhindra ladda om sidan och göra fetch
        e.preventDefault();

        fetch(`http://localhost:8080/api/update/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content })
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Välj dokument</label><br/>
            <select value={id} onChange={e => setId(e.target.value)}>
              <option value="">-- välj --</option>
              {docs.map(doc => (
                <option key={doc.id} value={doc.id}>{doc.title}</option>
              ))}
            </select><br/>

            <label>Ny text</label><br/>
            <input
              type="text"
              value={content}
              onChange={e => setContent(e.target.value)}
            /><br/>

            <button type="submit">Uppdatera</button>
            
        </form>
    )
}

export default UpdateDoc;