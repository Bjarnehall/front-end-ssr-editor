import styled from 'styled-components';

const Wrapper = styled.section`
    .list {
        margin: 1rem 10%;
        list-style-type: none;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        color: var(--color-six);
    }

    .list li {
        margin-top: 0.5rem;
        background-color: var(--color-two);
        padding: var(--small-space);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.65em;
        border-radius: 10px;
    }

    .list-button {
        padding: var(--small-space);
        width: 90px;
        font-weight: bold;
        background-color: var(--color-three);
        color: var(--color-two);
        border-radius: 10px;
    }
    .list-button:hover {
        cursor: pointer;
        border: solid 2px var(--color-five);
    }
`;

export default Wrapper;