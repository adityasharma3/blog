import styled from 'styled-components';

export const NavBar = styled.nav `
    padding: 0 10%;
    display: flex;
    height: 10vh;
    background-color: black;
    color: white;
    justify-content: space-between;
    align-items: center;
    font-size: large;

    
    a {
        color: white;
        text-decoration: none;
    }
`;

export const LoginPage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;

    button {
        font-size: large;
        background-color: blue;
        color: white;
        font-weight: 700;
        padding: 1rem;
        border-radius: 0.5rem;
        outline: none;
        border: none;

        :hover{
            opacity: 1;
            color: black;
            transition: 1s ease;
            background-color: yellow;
        }

    }
`;

export const LogoutButton = styled.button `
    background-color: transparent;
    font-size: large;
    border: none;
    outline: none;
    color: white;
`;

export const CreatePostsContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form {
        width: 30%;
        justify-content:space-around ;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
`;

export const Button = styled.button `
    background-color: blue;
    color: whitesmoke;
    font-weight: 800;
`;

export const HomePage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PostsSection = styled.div `
    margin: 5rem;
`;

export const Post = styled.div `
    background-color: beige;
    margin: 3rem;
`;