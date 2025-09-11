
function DeleteDoc() {

  fetch("http://localhost:8080/all")
        .then(res => res.json())
        .then(data => {
            const select = document.getElementById("dokument");

            for (let i = 0; i < data.data.length; i++) {
                console.log(data.data[i].title + "ID: " + data.data[i].id);
                const option = document.createElement("option");
                option.value = data.data[i].id;
                option.text = data.data[i].title;
                select.appendChild(option);

            }
        });

  return (

    <>
    <div className="delete-doc-form">

    
    <form method="POST" action="http://localhost:8080/delete">
    <h4>Här kan du kasta befintliga dokument</h4>
        <label htmlFor="dokument">Välj ett dokument</label><br/>
        <select name="dokument" id="dokument">
        </select>

        <input type="submit" value="Kasta dokument" />
    </form>
    </div>
    </>
  )
}
export default DeleteDoc
