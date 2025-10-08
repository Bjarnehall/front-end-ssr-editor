import Wrapper from '../../assets/wrappers/AllDocs.js';
import api_url from "../../url.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AllDocs({ onEdit }) {
    const [docs, setDocs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      fetch(`${api_url}/api/doc/getdocs/`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(res => res.json())
        .then(data => setDocs(data.documents || []))
        .catch(err => {
            console.error("Error fetching documents:", err);
            setDocs([]);
        });
    }, []);

    return (
        <Wrapper>
            <h2 className="title">All documents</h2>
            <ul className="list">
                {docs.map(doc => (
                    <li key={doc._id}>
                        <strong>{doc.title}</strong>
                        {onEdit && (
                            <button 
                                className="list-button" 
                                onClick={() => {
                                    onEdit(doc);
                                    navigate("/edit");
                                }}
                            >
                                Edit
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}
export default AllDocs;