import Wrapper from '../../assets/wrappers/DeleteDoc.js';
import api_url from "../../url.js";
import { useNavigate } from "react-router-dom";

function DeleteDoc({ preselectedDoc, onDelete }) {
    if (!preselectedDoc) {
      return null;
    }
    const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${api_url}/api/delete/${preselectedDoc.id}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
      });

      const data = await response.json();

      if (data.ok) {
        alert("Document was deleted!");
        onDelete();
        navigate("/docs");
      } else {
        alert("Document failed delete!");
      }
    } catch (err) {
      alert("Document failed delete!");
    }
  }

  return (
    <Wrapper>
      <div className="delete-doc-form">
        <button className="delete-button" onClick={handleSubmit}>Delete document</button>
      </div>
    </Wrapper>
  );
}

export default DeleteDoc;