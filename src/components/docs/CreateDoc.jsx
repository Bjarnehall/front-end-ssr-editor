import Wrapper from '../../assets/wrappers/UpdateCreateDoc.js';
import api_url from "../../url.js";
import { useState } from "react";

function CreateDoc() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [isCode, setIsCode] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();

        alert("Document was created!");

        fetch(`${api_url}/api/doc/create`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}` 
            },
            body: JSON.stringify({ title, content, is_code: isCode })
        });

        setTitle("");
        setContent("");
    }

    return (
        <Wrapper>
        <form onSubmit={handleSubmit}>
            <h2 className="title">Create new document</h2>

            <div className="editor-form">
            <label htmlFor="title">Document Title</label><br/>
            <input
                id="title"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            /><br/>

            <label htmlFor="content">Document Text</label><br/>
            <label>
            <input
                type="checkbox"
                checked={isCode}
                onChange={() => setIsCode(!isCode)}
            />
            Code mode
            </label>
            <br/>
            <textarea
                id="content"
                type="text"
                value={content}
                onChange={e => setContent(e.target.value)}
            /><br/>

            <button className="create-button" type="submit">Create Document</button>
            </div>
        </form>
        </Wrapper>        
    )
}

export default CreateDoc;