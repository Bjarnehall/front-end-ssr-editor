import Wrapper from '../../assets/wrappers/UpdateCreateDoc.js';
import api_url from "../../url.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CodeMode from "../docs/CodeMode";

function CreateDoc() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isCodeMode, setIsCodeMode] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();

        const is_code = isCodeMode;

        alert("Document was created!");

        fetch(`${api_url}/api/doc/create`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}` 
            },
            body: JSON.stringify({ title, content, is_code })
        });

        setTitle("");
        setContent("");
        navigate("/docs");
    }

    return (
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