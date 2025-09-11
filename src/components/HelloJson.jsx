
function HelloJson() {

    let message = "";

    fetch("http://localhost:8080/hellojson")
        .then(res => res.json())
        .then(data => {
            document.getElementById("message").innerText = data.data.msg;
        });

  return (
    <div id="message">{message}</div>
  )
}
export default HelloJson
