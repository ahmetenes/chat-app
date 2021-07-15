import React from 'react'
import styled from 'styled-components';
import femaleAvatar from "../images/female.png"
import { auth, provider } from "../firebase"
function Login(props) {
    const googleAuth = () => {
        auth.signInWithPopup(provider).then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            };
            props.setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
        }).catch(
            (error) => { console.log(error) }
        );
        console.log("Google")
    };
    return (
        <Container>
            <FormContainer>
                <AppImage>
                    <img src={femaleAvatar} alt="App Logo" />
                </AppImage>
                <h1>Sign In</h1>
                <GoogleSignButton onClick={() => { googleAuth() }}>Sign In with Google</GoogleSignButton>
            </FormContainer>
        </Container>
    );

}

export default Login

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#FFFFFF;
`

const FormContainer = styled.div`
    padding:100px;
    background:white;
    border-radius:5px;
    box-shadow: 2px 3px 6px #988A99;
`
const AppImage = styled.div`
    img{
        width:80%;
        height:80%;
    }
`
const GoogleSignButton = styled.button`
    font-size:14px;
    background-color:darkorange;
    color:white;
    border:none;
    height:35px;
    border-radius:3px;
`