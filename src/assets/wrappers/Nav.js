import styled from 'styled-components';

const Wrapper = styled.section`
    nav {
        display: flex;
        gap: 0.75rem;
        margin-bottom: 1rem;
        background: var(--color-one);
        padding: 0.5rem;
    }
    nav button {
    color: white;
    background: transparent;
    border: 1px solid white;
    padding: 0.3rem 0.6rem;
    cursor: pointer;
    margin: 0.25rem;
    }

    nav button:disabled {
    color: limegreen;
    border-color: limegreen;
    }
`;

export default Wrapper;