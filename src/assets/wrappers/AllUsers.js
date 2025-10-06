import styled from 'styled-components';

const Wrapper = styled.section`
    .list {
        margin: 1rem 10%;
        list-style-type: none;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #FFF;
    }

    .list li {
        margin-top: 0.5rem;
        background-color: var(--color-two);
        padding: var(--small-space);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .list-button {
        padding: var(--small-space);
        width: 90px;
        font-weight: bold;
        background-color: var(--color-two);
        color: var(--color-three);
        margin-left: 0.5rem;
    }
`;

export default Wrapper;
