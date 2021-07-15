import React from 'react'
import styled from 'styled-components'
function Message({ message, user }) {
    return (
        <Container>
            <Photo>
                <img src={user.photo}></img>
            </Photo>

            <MsgContent>
                <Source>
                    <Username>{message.sender}</Username>
                    <Timestamp>{message.time.toDate().toUTCString().substr(4, 22)}</Timestamp>
                </Source>
                {message.text}
            </MsgContent>
        </Container>
    )
}

export default Message

const Container = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-start;
    margin:30px;
    margin-left:50px;
`
const Source = styled.div`
    margin-bottom:10px;
    display:flex;
    justify-content:center;

`
const MsgContent = styled.div`
    margin:5px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;

`
const Photo = styled.div`
    min-width:60px;
    max-width:60px;
    height:60px;
    img{
        width:100%;
        heigth:100%;
        border-radius:4px;

    }

`
const Username = styled.div`
font-weight: 900;
`
const Timestamp = styled.div`
color:gray;
margin-left:5px;
`