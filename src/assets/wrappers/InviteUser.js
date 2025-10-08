import styled from "styled-components";

const Wrapper = styled.section`
    .invite-box {
        background-color: #1a1a1a;
        border: 1px solid limegreen;
        border-radius: 8px;
        padding: 1rem;
        margin-top: 1.5rem;
        text-align: center;
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
    }
`;

export default Wrapper;
