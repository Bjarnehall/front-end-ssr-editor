import { useState, useEffect } from "react";

function AllDocs() {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8080/all")
        .then(res => res.json())
        .then(data => setDocs(data.data));
    }, []);

    return (
        <div>
            <h2>Alla dokument</h2>
            <ul>
                {docs.map(doc => (
                    <li key={doc.id}>
                        <strong>{doc.title}</strong>: {doc.content}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllDocs;