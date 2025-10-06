import Wrapper from '../../assets/wrappers/AllDocs.js';
import api_url from "../../url.js";
import { useState, useEffect } from "react";

function AllDocs({ onEdit }) {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
      fetch(`${api_url}/all`)
        .then(res => res.json())
        .then(data => setDocs(data.data));
    }, []);

    return (
        <Wrapper>
            <h2 className="title">All documents</h2>
            <ul className="list">
                {docs.map(doc => (
                    <li key={doc.id}>
                        <strong>{doc.title}</strong>
                        {onEdit && (<button className="list-button" onClick={() => onEdit(doc)}>Edit</button>)}
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}
export default AllDocs;