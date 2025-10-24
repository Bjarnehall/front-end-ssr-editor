import styled from 'styled-components';

const Wrapper = styled.section`
    .editor-form {
        margin: 1rem 10%;
        list-style-type: none;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        margin-top: 0.25rem;
        color: #FFF;
    }
    label {
        color: #FFF;
        font-weight: bold;
    }
    input {
        background-color: var(--color-two);
        border: none;
        color: #FFF;
        width: 100%;
        padding: var(--small-space);
        margin-top: var(--small-space);
        margin-bottom: var(--small-space);
        border-radius: 10px;
    }
    textarea {
        background-color: var(--color-two);
        border: none;
        color: #FFF;
        height: 210px;
        width: 100%;
        padding: var(--small-space);
        margin-top: var(--small-space);
    }
    .create-button {
        margin-top: 1.35rem;
        padding: var(--small-space);
        width: 100%;
        font-weight: bold;
        background-color: var(--color-two);
        color: var(--color-three);
        border: solid 1px #ffffff55;
        border-radius: 10px;
    }
    .create-button:hover {
        cursor: pointer;
        border: solid 1px var(--color-five);
    }

    .codemode {
        color: blue;
    }
    .mode-button {
        padding: 0.25rem;
        width:100%;
        font-weight: bold;
        background-color: var(--color-two);
        color: var(--color-three);
        border: solid 1px #ffffff55;
        border-radius: 10px;
    }
    .mode-button:hover {
        cursor: pointer;
        border: solid 1px var(--color-five);
    }
    .button-container {
        display: flex;
        justify-content: space-between;
    }
    .update-button {
        margin-top: 1.35rem;
        padding: var(--small-space);
        width: 50%;
        font-weight: bold;
        background-color: var(--color-two);
        color: var(--color-three);
        border: solid 1px #ffffff55;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .update-button:hover {
        cursor: pointer;
        border: solid 1px var(--color-five);
    }
    .back-button {
        padding: 0.25rem;
        width: 50%;
        margin-top: 1.35rem;
        font-weight: bold;
        background-color: var(--color-two);
        color: var(--color-three);     
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border: solid 1px #ffffff55;
    }
    .back-button:hover {
        cursor: pointer;
        border: solid 1px var(--color-five);
    }
    input[type="checkbox"] {
        width: auto;
        margin-right: 8px;
        accent-color: var(--color-three); /* gör den grön som resten av temat */
        transform: scale(1.3); /* gör rutan lite större och tydligare */
        cursor: pointer;
    }
    label[for="code-mode"] {
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .output-container {
        display: flex;
        background-color: var(--color-four);
        justify-content: space-between;
        align-items: center;
        
    }
    .output-box {
        background-color: var(--color-four);
        color: var(--color-three);
        border: none;
        padding: 10px;
        margin-top: 10px;
        font-family: monospace;
        min-height: 60px;
        max-height: 250px;
        overflow-y: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        width: 90%;
    }
    .exe-button {
        background-color: var(--color-three);
        background-color: var(--color-two);
        color: white;
        height: 50px;
        width: 50px;
        margin-right: 10px;
        font-weight: bold;
        font-size: 0.8em;
        text-transform: capitalize;
        border-radius: 50%;
    }
    .exe-button:hover {
        cursor: pointer;
        border: solid 3px var(--color-five);
    }
    .user-form {
        max-width: 700px;
        margin: 0 auto;
        padding-top: 40px;
    }
`;

export default Wrapper;