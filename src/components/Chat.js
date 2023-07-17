import React, {useState, useEffect} from 'react';
import {getDatabase, ref, push, onValue, off} from 'firebase/database';
import {userId} from './SignIn';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
      const db = getDatabase();
      const messagesRef = ref(db, "messages");

      //listener for fetching from firebase
      onValue(messagesRef, (snapshot) => {
        if (snapshot.exists()) {
          //convert the snapshot to an array of messages
          const data = snapshot.val();
          const messagesArray = Object.values(data);
          setMessages(messagesArray);
        } else {
          //if no messages, set to an empty array
          setMessages([]);
        }
      });

      // Cleanup the listener when the component unmounts
      return () => {
        // Detach the listener to prevent memory leaks
        off(messagesRef);
      };
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const db = getDatabase();

        
         // Create a new message object
        const newMessage = {
            content: message,
            timestamp: Date.now(),
        }

        try {
             // Push the message object to the "messages" node in the database
            await push(ref(db, 'messages'), newMessage);

            //Clear the message input after successful push
            setMessage('');
        } catch (error) {
            console.error('error sending mesage', error);
        }
    };

    return (
        <div>
            <h1>Chat</h1>

            <ul>
                {/* display messages */}
                {messages.map((message) => (
                    <li key={message.timestamp}>{message.content}</li>
                ))}
            </ul>

            {/* form to send messages */}
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Enter message'/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};


export default Chat;