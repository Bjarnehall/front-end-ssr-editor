import Wrapper from '../../assets/wrappers/UpdateCreateDoc.js';
import api_url from "../../url.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import CodeMode from "../docs/CodeMode";
/*
Component to handle edit of document.
*/
let socket;

// Send selected document as props in function.
function UpdateDoc({ preselectedDoc }) {
    // Use navigate to redirect user back to document list if user saves document.
    const navigate = useNavigate();
    const docId = preselectedDoc.id || preselectedDoc._id;
    // Use useState to handle title, content, mode and code output
    const [title, setTitle] = useState(preselectedDoc.title);
    const [content, setContent] = useState(preselectedDoc.content);
    const [isCodeMode, setisCodeMode] = useState(preselectedDoc.is_code || false);
    const [output, setOutput] = useState("");
    // Check if document is selected.
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
    // Prevent default behavior on submit
    function handleSubmit(e) {
        e.preventDefault();
        // Let user know document is saved
        alert("Document was saved!");
        // Call API so update content of document in database. Send
        // document id to identify document, token to identify and validate
        // user. Send content of document in body.
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
    // Function to execute user written code.
    function executeCode(content) {
        // Save data in format API expects.
        const data= {
            code: btoa(content)
        };
        // Call API to execute code, send content.
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
                // Decode response to present data in human readable way.
                let decodedOutput = atob(result.data);
                setOutput(decodedOutput);
            } else if (result.error) {
                setOutput("Error: " + result.error);
            } else {
                setOutput("No output received.");
            }
        });
    }

    return (
        // Render edit form in the right way depending on if code mode or not.
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
