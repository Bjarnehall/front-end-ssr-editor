import styled from "styled-components";

const Wrapper = styled.section`
    .invite-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        min-height: 90px;
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
        padding: 0.4rem;
        width: 65%;
        background-color: #333;
        color: white;
        border: 1px solid limegreen;
        border-radius: 4px;
    }

    .create-button {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        color: white;
        background-color: var(--color-two);
        padding: var(--small-space)
    }
    .create-button:hover {
        cursor: pointer;
        border: solid 3px var(--color-five);
    }
`;

export default Wrapper;
