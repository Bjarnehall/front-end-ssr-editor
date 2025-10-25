import Wrapper from '../../assets/wrappers/UpdateCreateDoc.js';
import api_url from "../../url.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CodeMode from "../docs/CodeMode";
/*
Component to create new document.
*/
function CreateDoc() {
    // Use navigate to navigate user to document list after creating a new doc.
    const navigate = useNavigate();
    // Use useState to handle document content and document type.
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isCodeMode, setIsCodeMode] = useState(false);
    // Prevent default behavior on submit, call API to create a new document,
    // token is sent to validate and identify user.
    function handleSubmit(e) {
        e.preventDefault();

        const is_code = isCodeMode;
        // Let user now document is created
        alert("Document was created!");
        // Call api to create document
        fetch(`${api_url}/api/doc/create`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}` 
            },
            body: JSON.stringify({ title, content, is_code })
        });
        // Clean up form fields and send user to document list.
        setTitle("");
        setContent("");
        navigate("/docs");
    }

    return (
        // Render form to create document, check if code-mode or text-mode
        // to provide the right editor.
        <Wrapper>
        <div className="editor-form">

           {/* Button for switching between code and text mode */}
            <button
                className="mode-button"
                type="button"
                onClick={() => setIsCodeMode(!isCodeMode)}
                style={{ margin: "10px 0" }}
            >
                {isCodeMode ? "Text mode": "Code mode"}
            </button>

        <form onSubmit={handleSubmit}>

            <label htmlFor="title">Document Title</label><br/>
            <input
                id="title"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            /><br/>

            <label htmlFor="content">Document Text</label><br/>

                    {/* Render text mode or code mode */}
                    {isCodeMode ? (
                        <CodeMode 
                        value={content} 
                        onChange={(value) => setContent(value)}
                        />
                    ) : (
                        <textarea
                            type="text"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        />
                    )}

            <button className="create-button" type="submit">Create Document</button>

        </form>
        </div>
        </Wrapper>        
    )
}

export default CreateDoc;