import styled from 'styled-components';

const Wrapper = styled.section`
    nav {
        display: flex;
        gap: 0.75rem;
        margin-bottom: 1rem;
        background: var(--color-one);
        padding: 0.5rem;
        border-bottom: 5px solid var(--color-three);
    }

    nav a {
        color: white;
        background: transparent;
        border: 1px solid limegreen;
        padding: 0.35rem 0.6rem;
        cursor: pointer;
        margin: var(--small-space);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 0.85em;
        text-decoration: none;
    }
    nav a:hover {
        background-color: var(--color-three);
        color: var(--color-two);
    }
/*     nav button {
    color: white;
    background: transparent;
    border: 1px solid white;
    padding: 0.35rem 0.6rem;
    cursor: pointer;
    margin: var(--small-space);
    }

    nav button:disabled {
    color: var(--color-three);
    border-color: var(--color-three);
    } */

    .user-info {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--color-three);
    }

    .logout-button {
        background-color: var(--color-two);
        color: var(--color-three);
        font-weight: bold;
        padding: var(--small-space);
        border: none;
        cursor: pointer;
    }
    
    .logout-button:hover {
        background-color: var(--color-three);
        color: var(--color-two);
}
`;

export default Wrapper;