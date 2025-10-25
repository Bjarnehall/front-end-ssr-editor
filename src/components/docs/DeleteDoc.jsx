import Wrapper from '../../assets/wrappers/DeleteDoc.js';
import api_url from "../../url.js";
import { useNavigate } from "react-router-dom";
/*
Component to handle deletion of document.
*/
function DeleteDoc({ preselectedDoc, onDelete }) {
  const docId = preselectedDoc.id || preselectedDoc._id;
  // Use navigate to redirect user.
  const navigate = useNavigate();
    // Check if document selected.
    if (!preselectedDoc) {
      return null;
    }
  // Prevent default behavior on submit.
  async function handleSubmit(e) {
    e.preventDefault();
    // Call api to delete document of given id, send token to validate user.
    try {
      const response = await fetch(`${api_url}/api/doc/delete/${docId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
      });

      const data = await response.json();
      // If respone ok from api let user know document was deleted and navigate user to
      // document list.
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
    // Render delete form/button
    <Wrapper>
      <div className="delete-doc-form">
        <button className="delete-button" onClick={handleSubmit}>Delete document</button>
      </div>
    </Wrapper>
  );
}

export default DeleteDoc;