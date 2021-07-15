import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import '../styles/Chat.css'
import { InfoOutlined, SendRounded } from '@material-ui/icons'
import Message from './Message'
import { useParams } from 'react-router-dom'
import database from '../firebase'
import firebase from 'firebase'
function Chat(props) {
    const user = props.user;
    let { channelId } = useParams();
    const [channel, setChannel] = useState();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const getChannel = () => {
        database.collection('channels')
            .doc(channelId)
            .onSnapshot((snapshot) => {

                setChannel(snapshot.data())
            })
    }
    const getMessages = () => {
        database.collection('channels')
            .doc(channelId)
            .collection('messages').orderBy('time', 'asc').onSnapshot((snapshot) => {
                let messageArray = snapshot.docs.map((message) => { return { ...message.data(), id: message.id } });
                setMessages(messageArray);
            })


    }
    const sendMessage = (event) => {
        event.preventDefault();
        let newMessage = {
            text: input,
            sender: props.user.name,
            time: firebase.firestore.Timestamp.now(),
            photo: props.user.photo,
        }
        console.log('newMessage :>> ', newMessage);
        database.collection('channels')
            .doc(channelId)
            .collection('messages').add(newMessage).then(setInput(""));

    }
    useEffect(() => {
        getChannel();
        getMessages();
    }, [channelId])
    return (
        <div className={'chat-container'}>
            <ChannelHeader>
                <ChannelContainer>
                    <ChannelName>
                        # {channel != null && channel.name}
                    </ChannelName>
                    <ChannelDescription>
                        A good description.
                    </ChannelDescription>
                </ChannelContainer>
                <Details>
                    Details
                    <InfoIcon></InfoIcon>
                </Details>
            </ChannelHeader>

            <MessageArea>
                {messages.length > 0 && messages.map((message) => <Message user={user} message={message} key={message.id}></Message>)}
            </MessageArea>
            <NewMessage>
                <EditPart>
                    <form onSubmit={sendMessage} method="post">
                        <input type="text" placeholder="Message here..." name="message" value={input} onChange={(e) => { setInput(e.target.value) }}></input>
                        <SendButtonIcon>
                            <SendRounded />
                        </SendButtonIcon>
                    </form>
                </EditPart>
            </NewMessage>

        </div >
    )
}

export default Chat

const ChannelHeader = styled.div`
            display:flex;
            justify-content:space-between;
            `

const ChannelContainer = styled.div`
    padding-left:20px;
    padding-top:20px;
    padding-bottom:20px;

`
const Details = styled.div`
    display:flex;
    align-items:center;
    padding-right:20px;

`
const InfoIcon = styled(InfoOutlined)`
    margin-left: 8px;
`
const SendButtonIcon = styled.div`

    display:flex;
    background:#007a5a;
    width: 32px;
    height: 32px;
    margin-right:6px;
    align-items:center;
    justify-content:center;

`

const MessageArea = styled.div``

const NewMessage = styled.div`
            display:flex;
            align-items: center;
            padding: 25px 50px 25px 50px;
            form{
                flex:1;
                display:flex;
                align-items: center;
                height:42px;
                border:1px solid lightgray;
                input{
                    flex:1;
                    border:none;
                    padding: 5px 10px 5px 10px;
                    :focus{
                        outline:none;
                    }
                }
            }
            `
const ChannelName = styled.div`
            font-size:30px;
            `
const ChannelDescription = styled.div`
            color:#616161
            `
const EditPart = styled.div`
            flex:1;
            display:flex;
            width:auto;
            color:black;
    `

