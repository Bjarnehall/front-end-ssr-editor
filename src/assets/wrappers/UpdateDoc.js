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
        padding: 0.35rem;
        margin-top: 0.35rem;
        margin-bottom: 0.35rem;
    }
    textarea {
        background-color: var(--color-two);
        border: none;
        color: #FFF;
        height: 200px;
        width: 100%;
        padding: 0.35rem;
        margin-top: .35rem;
    }
    .update-button {
        margin-top: 1.35rem;
        padding: 0.25rem;
        width: 100%;
        font-weight: bold;
        background-color: var(--color-two);
        color: limegreen;
        border: solid 1px #ffffff55;
    }
`;

export default Wrapper;