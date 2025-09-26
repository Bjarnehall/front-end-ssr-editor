import styled from 'styled-components';

const Wrapper = styled.section`
    .list {
        margin: 1rem 10%;
        list-style-type: none;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        color: #FFF;
    }

    .list li {
        margin-top: 0.5rem;
        background-color: var(--color-two);
        padding: var(--small-space);

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .list-button {
        padding: var(--small-space);
        width: 90px;
        font-weight: bold;
        background-color: var(--color-two);
        color: var(--color-three);
    }
`;

export default Wrapper;