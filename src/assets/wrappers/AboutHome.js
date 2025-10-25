import styled from 'styled-components';

const Wrapper = styled.section`
    .about {
        margin: 0 10%;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        color: var(--color-six);
    }
    .presentation {
        margin: 1.35rem 10%;
        line-height: 1.5;
    }
    .authors {
        margin-top: 1.5rem;
        font-size: 0.75rem;
    }

    .repo-links {
        width: 80%;
        margin-left: 10%;
        display: flex;
    }

    a {
        color: var(--color-three);
        text-decoration: none;
        font-size: 1.25em;
        margin-left: 20%;
        margin-top: 1em;
    }

    h2 {
        padding-top: 10%;
    }

    p{
        margin-top: 0.35em;
    }
`;

export default Wrapper;