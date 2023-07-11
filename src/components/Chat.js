import React, {useState} from 'react';
import {getAuth, signInAnonymously} from 'firebase/auth';

const Chat = () => {
    const [userId, setUserId] = useState('');


    const signInAnonymously = async () => {
        try {
            const auth = getAuth();
        }
    }

};

export default Chat;