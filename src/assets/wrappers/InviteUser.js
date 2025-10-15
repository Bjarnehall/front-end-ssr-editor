import styled from "styled-components";

const Wrapper = styled.section`
    .invite-box {
        width: 80%;
        background-color: #1a1a1a;
        border: 1px solid limegreen;
        border-radius: 8px;
        padding: 1rem;
        margin-top: 1.5rem;
        margin-left: 10%;
        text-align: center;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }

    label {
        color: limegreen;
        font-weight: bold;
    }

    input[type="email"] {
        margin-top: 0.5rem;
        padding: 0.4rem;
        width: 80%;
        background-color: #333;
        color: white;
        border: 1px solid limegreen;
        border-radius: 4px;
    }

    .create-button {
        margin-top: 0.8rem;
        color: white;
        background-color: var(--color-two);
        padding: var(--small-space)
    }
`;

export default Wrapper;
