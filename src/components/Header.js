import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import UserPart from './UserPart'
import '../styles/Header.css'

function Header(props) {
    return (
        <Container>
            <Main>
                <SearchBar>

                </SearchBar>
            </Main>
            <UserPart user={props.user}>

            </UserPart>
        </Container>
    )
}

export default Header

const Container = styled.div`
display:flex;
flex-flow:column wrap;
justify-content:center;
background-color:#4B154B;
color:#A38BA5;
`
const Main = styled.div`
width:100%;
display:flex;
justify-content:center;
`