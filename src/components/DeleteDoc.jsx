function DeleteDoc() {
  return (
    <div className="delete-doc-form">

    <form method="POST" action="http://localhost:8080/delete/2">

        <input type="submit" value="Kasta dokument" />
    </form>
    </div>
  )
}
export default DeleteDoc