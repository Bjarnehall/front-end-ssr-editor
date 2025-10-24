import Wrapper from '../../assets/wrappers/UpdateCreateDoc.js';
import api_url from "../../url.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

import CodeMode from "../docs/CodeMode";

let socket;

function UpdateDoc({ preselectedDoc }) {
    const navigate = useNavigate();

    const docId = preselectedDoc.id || preselectedDoc._id;
    const [title, setTitle] = useState(preselectedDoc.title);
    const [content, setContent] = useState(preselectedDoc.content);
    const [isCodeMode, setisCodeMode] = useState(preselectedDoc.is_code || false);
    const [output, setOutput] = useState("");

    if (!preselectedDoc) {
        return <p style={{ color: "limegreen" }}>Select a document to edit.</p>;
    }

    //Connect to sockets create new room with docId
    useEffect(() => {
        socket = io(api_url);
        socket.emit("create", docId);
        socket.on("doc", (updateDoc) => {
            setTitle(updateDoc.title);
            setContent(updateDoc.content);
        });

        return () => {
            socket.disconnect();
        };
    }, [docId]);

    //Check for content change and submit new content
    const handleContentChange = (e) => {
        const newContent = e.target.value;
        setContent(newContent);
        socket.emit("doc", { _id: docId, title: title, content: newContent });
    };
    
    //Check for title change and submit new title
    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        socket.emit("doc", { _id: docId, title: newTitle, content: content });
    };

    function handleSubmit(e) {
        e.preventDefault();

        alert("Document was saved!");

        console.log("Updating:", `${api_url}/api/doc/update/${docId}`);
        fetch(`${api_url}/api/doc/update/${docId}`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ title, content, is_code: isCodeMode })
        }).then(() => navigate("/docs"));
    }

    function executeCode(content) {

        const data= {
            code: btoa(content)
        };
        console.log("data:", data);

        fetch("https://execjs.emilfolino.se/code", {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        .then(function (response) {
            return response.json();
        })
        .then(function(result) {
            if (result.data) {
                let decodedOutput = atob(result.data);
                console.log("Decoded output:", decodedOutput);
                setOutput(decodedOutput);
            } else if (result.error) {
                setOutput("Error: " + result.error);
            } else {
                setOutput("No output received.");
            }
        });
    }

    return (
        <Wrapper>
            <br/>
            <div className="editor-form">

                <form onSubmit={handleSubmit}>
                    <label>Document Title</label><br/>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <label>Document Text</label><br/>

                    {isCodeMode ? (
                        <CodeMode 
                            value={content} 
                            onChange={(newValue) => {
                                setContent(newValue);
                                socket.emit("doc", { _id: docId, title, content: newValue });
                            }}
                        />
                    ) : (
                        <textarea
                            type="text"
                            value={content}
                            onChange={handleContentChange}
                        />
                    )}
                    {isCodeMode ? (
                        <>
                        <button
                            className="mode-button"
                            type="button"
                            onClick={() => setisCodeMode(!isCodeMode)}
                            style={{ margin: "10px 0" }}
                        >
                            {isCodeMode ? "Text mode" : "Code mode"}
                        </button>
                        <div className="output-container">
                        <div className="output-box">
                            <h4>Output:</h4>
                            <pre>{output}</pre>
                        </div>
                        <button
                            className="exe-button"
                            type="button"
                            onClick={() => executeCode(content)}
                        >run <br/>code</button>
                        </div>
                        </>
                    ) : (
                        <button
                            className="mode-button"
                            type="button"
                            onClick={() => setisCodeMode(!isCodeMode)}
                        >{isCodeMode ? "Text mode" : "Code mode"}</button>
                    )}
                    <div className="button-container">
                        <button 
                            className="back-button" 
                            type="button" 
                            onClick={() => navigate("/docs")}
                        >Back to documents</button>
                        <button className="update-button" type="submit">Save document</button>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
}

export default UpdateDoc;
