import React from 'react'
import male from '../images/male.png'
import styled from 'styled-components'
function UserPart({ user }) {
    return (
        <Container>
            <p>{user.name}</p>
            <SearchIcon>
                <img src={user.photo} alt={"avatar"}></img>
            </SearchIcon>
        </Container>
    )
}

export default UserPart

const Container = styled.div`
display:flex;
margin-right:30px;
align-items:center;
position:absolute;
right:0px;
`
const SearchIcon = styled.div`
    width:40px;
    height:40px;

    img{
        width:100%;
        border-radius:20px;
        margin-left:10px;
    }
`
