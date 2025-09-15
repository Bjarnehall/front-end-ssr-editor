import "./DeleteDoc.css";
function DeleteDoc({ preselectedDoc }) {

  return (
    <div className="delete-doc-form">
      <form method="POST" action="http://localhost:8080/delete">
        <input className="delete-button" type="submit" value="Delete document" />
        <input type="hidden" name="dokument" value={preselectedDoc ? preselectedDoc.id : selectedId} />
      </form>
    </div>
  );
}

export default DeleteDoc;