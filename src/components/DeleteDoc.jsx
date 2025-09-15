
function DeleteDoc({ preselectedDoc }) {

  return (
    <div className="delete-doc-form">
      <form method="POST" action="http://localhost:8080/delete">
        <input type="submit" value="Kasta dokument" />
        <input type="hidden" name="dokument" value={preselectedDoc ? preselectedDoc.id : selectedId} />
      </form>
    </div>
  );
}

export default DeleteDoc;