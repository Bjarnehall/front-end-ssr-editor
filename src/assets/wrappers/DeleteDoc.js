import styled from 'styled-components';

const Wrapper = styled.section`
    .delete-button {
        padding: 0.25rem;
        width: 80%;
        margin-left: 10%;
        font-weight: bold;
        background-color: var(--color-two);
        color: rgb(205, 50, 50);
        border: solid 1px #ffffff55;
    }

    .delete-button:hover {
        border: solid 1px #ffffff2c;
    }
`;

export default Wrapper;