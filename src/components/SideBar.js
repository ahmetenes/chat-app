import React from 'react'
import styled from 'styled-components'
import '../styles/SideBar.css'
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import database from '../firebase';
import { useHistory } from 'react-router-dom'
function SideBar(props) {
    const history = useHistory();
    const roomItems = props.rooms.map(
        (room) => {
            return <Room key={room.id} onClick={() => { history.push(`/room/${room.id}`) }}><Name>{room.name}</Name></Room>
        }
    );

    const addChannel = () => {
        const name = prompt("Enter channel name");
        if (name) {
            database.collection("channels").add({ name: name, type: 'public' })
        }
    };

    return (
        <div id={'sidebar-container'}>

            <Starred>
                <Title><StarRoundedIcon style={{ height: '15px', width: '15px' }} />STARRED</Title>

            </Starred>

            <Channels>
                <Title>CHANNELS<ControlPointIcon onClick={addChannel} style={{ position: 'absolute', right: 15 }} /></Title>
                {roomItems}
            </Channels>
            <DMs>
                <Title>DIRECT MESSAGES<ControlPointIcon style={{ position: 'absolute', right: 15 }} /></Title>

                <Room>
                    <Name>#First Room</Name>

                </Room>
                <Room>
                    <Name>#Second Room</Name>
                </Room>
            </DMs>

        </div  >
    )
}

export default SideBar

const Starred = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom: 20px;
`

const Channels = styled.div`
    display:flex;
    flex-direction:column;
    border-bottom: 1px solid #532753;
    position:relative;
    margin-bottom: 20px;
    cursor: pointer;
    
`
const Room = styled.div`
    display:flex;
    justify-content:space-between;
    padding:5px 35px 5px 35px;
    height:15px;
    :hover{
        background:#4b1b4b
    }
`
const Name = styled.div``
const Title = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding:5px 35px 5px 35px;
    
`
const DMs = styled.div`
    display:flex;
    flex-direction:column;
    border-bottom: 1px solid #532753;
    position:relative;
    margin-bottom: 20px;
`
