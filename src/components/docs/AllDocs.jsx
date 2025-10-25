import Wrapper from '../../assets/wrappers/AllDocs.js';
import api_url from "../../url.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/*
Component to render users stored codument.
*/
function AllDocs({ onEdit }) {
    // Use useState to handle documentlist
    const [docs, setDocs] = useState([]);
    // Use navigate to redirect user to single document
    const navigate = useNavigate();
    // Get user documents from API call, validate and indentify user by sending usertoken
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
        // Renders documents
        <Wrapper>
            <h2 className="title">All documents</h2>
            <ul className="list">
                {/*Present all documents and also add a edit button for each document,
                The edit button navigate to edit chosen document.*/}
                {docs.map(doc => (
                    <li key={doc._id}>
                        <strong>{doc.title}</strong>
                        {onEdit && (
                            <button className="list-button" 
                                onClick={() => {
                                    onEdit(doc);
                                    navigate("/edit");
                                }}
                            >Edit</button>
                        )}
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}
export default AllDocs;