import styled from 'styled-components';

const Wrapper = styled.section`
    .editor-form {
        margin: 1rem 10%;
        list-style-type: none;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
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
    }
    textarea {
        background-color: var(--color-two);
        border: none;
        color: #FFF;
        height: 200px;
        width: 100%;
        padding: var(--small-space);
        margin-top: var(--small-space);
    }
    .update-button {
        margin-top: 1.35rem;
        padding: var(--small-space);
        width: 100%;
        font-weight: bold;
        background-color: var(--color-two);
        color: var(--color-three);
        border: solid 1px #ffffff55;
    }
    .create-button {
        margin-top: 1.35rem;
        padding: var(--small-space);
        width: 100%;
        font-weight: bold;
        background-color: var(--color-two);
        color: var(--color-three);
        border: solid 1px #ffffff55;
    }
`;

export default Wrapper;