import "./DeleteDoc.css";
function DeleteDoc({ preselectedDoc }) {

  return (
    <div className="delete-doc-form">
      <form method="POST" action="https://ssr-editor-backend-d6a3fxdzgce8h0dv.northeurope-01.azurewebsites.net/delete">
        <input className="delete-button" type="submit" value="Delete document" />
        <input type="hidden" name="dokument" value={preselectedDoc ? preselectedDoc.id : ''} />
      </form>
    </div>
  );
}

export default DeleteDoc;