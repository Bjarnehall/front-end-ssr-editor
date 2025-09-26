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
    nav button {
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
    }
`;

export default Wrapper;