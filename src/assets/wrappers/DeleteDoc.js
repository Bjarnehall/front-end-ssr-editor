import styled from 'styled-components';

const Wrapper = styled.section`
    .delete-button {
        padding: var(--small-space);
        width: 80%;
        margin-left: 10%;
        font-weight: bold;
        background-color: var(--color-two);
        color: rgb(205, 50, 50);
        border: solid 1px #ffffff55;
        border-radius: 10px;
    }

    .delete-button:hover {
        cursor: pointer;
        border: solid 1px var(--color-five);
        
    }
`;

export default Wrapper;