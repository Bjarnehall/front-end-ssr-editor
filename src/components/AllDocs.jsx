import { useState, useEffect } from "react";

function AllDocs({ onEdit }) {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8080/all")
        .then(res => res.json())
        .then(data => setDocs(data.data));
    }, []);

    return (
        <div>
            <h2>All documents</h2>
            <ul>
                {docs.map(doc => (
                    <li key={doc.id}>
                        <strong>{doc.title}</strong>:
                        {onEdit && (<button onClick={() => onEdit(doc)}>Redigera</button>)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllDocs;