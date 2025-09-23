import "./DeleteDoc.css";
import api_url from "../url.js";
function DeleteDoc({ preselectedDoc, onDelete }) {

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${api_url}/api/delete/${preselectedDoc.id}`, {
      method: "POST",
      });

      const data = await response.json();

      if (data.ok) {
        alert("Document was deleted!");
        onDelete();
      } else {
        alert("Document failed delete!");
      }
    } catch (err) {
      alert("Document failed delete!");
    }
  }

  return (
    <div className="delete-doc-form">
      <button className="delete-button" onClick={handleSubmit}>Delete document</button>
    </div>
  );
}

export default DeleteDoc;