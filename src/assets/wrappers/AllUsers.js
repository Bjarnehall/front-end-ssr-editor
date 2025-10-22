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

    .user-form {
        max-width: 700px;
        margin: 0 auto;
        padding-top: 40px;
    }

    .user-button {
        margin-top: 1.35rem;
        padding: var(--small-space);
        font-weight: bold;
        background-color: var(--color-two);
        color: var(--color-three);
        border: solid 1px #ffffff55;
        border-radius: 10px;
        width: 100%;
    }

    .title-user {
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        color: #FFF;
        text-align: center;
    }
    .profile-user {
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        color: #FFF;
        margin-top: 1em;
        margin-bottom: -1.5em;
        font-weight: bold;
        font-size: 1.1em;
        text-align: center;
    }
    label {
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }
    h4 {
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        color: #FFF;
        margin-bottom: 0.35em;
    }

`;

export default Wrapper;
