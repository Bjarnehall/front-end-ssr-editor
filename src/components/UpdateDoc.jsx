
function UpdateDoc({ id }) {
    //Funktion för att hantera ett submit
    function handleSubmit(e) {
        // Förhindra ladda om sidan och göra fetch
        e.preventDefault();

        const newContent = e.target.content.value;

        fetch(`http://localhost:8080/api/update/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: newContent })
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="content">Ny text</label><br />
            <input type="text" name="content" id="content" />
            <br />

            <input type="submit" value={`Uppdatera ${id}`} />
            
        </form>
    )
}

export default UpdateDoc;