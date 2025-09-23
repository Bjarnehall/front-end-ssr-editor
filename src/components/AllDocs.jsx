import "./AllDocs.css";
import { useState, useEffect } from "react";

function AllDocs({ onEdit }) {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
      fetch("https://ssr-editor-backend-d6a3fxdzgce8h0dv.northeurope-01.azurewebsites.net/all")
        .then(res => res.json())
        .then(data => setDocs(data.data));
    }, []);

    return (
        <div>
            <h2 className="title">All documents</h2>
            <ul className="list">
                {docs.map(doc => (
                    <li key={doc.id}>
                        <strong>{doc.title}</strong>
                        {onEdit && (<button className="list-button" onClick={() => onEdit(doc)}>Edit</button>)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllDocs;