import React, { useState, useEffect } from 'react';
import { FormControl, Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]
    );
  const [username, setUsername] = useState('');
  
  useEffect(() => {
    db.collection('message')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, input: doc.data()})))
    });
  },[])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []); //condition

  const sendMessage = (event) => {
    //all the logical to send a message
    event.preventDefault();


    db.collection('message').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');

  }

  return (
    <div className="App">
      <img src="https://raw.githubusercontent.com/raselldev/raselldev.github.io/master/assets/logo.png" width='100' alt='img icon'></img>
      <h1>Hello</h1>
      <h2>Welcome {username}</h2>

      <form className='app_form'>
        <FormControl className='app_formControl'>
          <Input className='app_input' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className='app_iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
            <SendIcon>Send Message</SendIcon>
          </IconButton>
          
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, input}) => (
            <Message key={id} username={username} messages={input}/>
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;