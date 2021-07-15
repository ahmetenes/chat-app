import './App.css';
import { useState, useEffect } from 'react'
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import database from './firebase';
import { useHistory } from 'react-router-dom'

function App() {
  const [rooms, setrooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const getChannels = () => {
    database.collection("channels").onSnapshot(
      (snapshot) => {
        setrooms(snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        }))
      }
    );
  };

  useEffect(() => {
    getChannels();
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        {!user ?
          <Login setUser={setUser}></Login>
          :
          <Container>
            <Header user={user}>
            </Header>
            <Main >
              <SideBar rooms={rooms}></SideBar>
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user}>
                  </Chat>
                </Route>
              </Switch>
            </Main>
          </Container>

        }

      </BrowserRouter>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%; 
  height: 100vh; 
  background-color: orange;
  display:grid;
  grid-template-rows: 60px auto;
`
const Main = styled.div`
  width: 100%; 
  background-color: blue;
  display:grid;
  grid-template-columns: min-content auto;
 `