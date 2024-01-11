
import React, { useState, useEffect, useCallback } from 'react';
import '../Chats/UserChat.css';
import chatBox from '../images/speech-bubble.png';
// import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';


// const socket = io('http://localhost:9200'); // Connect to the WebSocket server

export default function UserChat() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const generateMessage = useCallback((msg, type) => {
        const newMessage = {
            id: uuidv4(),
            type: type,
            content: msg,
        };

        setMessages((prevMessages) => [newMessage, ...prevMessages]);

        if (type === 'self') {
            setInputValue('');
        }
    }, []);



    const handleButtonClick = useCallback((value) => {
        generateMessage(value, 'self');
    }, [generateMessage]);

    const generateButtonMessage = useCallback((msg, buttons) => {
        const newMessage = {
            id: uuidv4(), // Generate a unique ID
            type: 'user',
            content: msg,
            buttons: buttons,
        };

        setMessages((prevMessages) => [newMessage, ...prevMessages]);
    }, []);

    const handleChatCircleClick = useCallback(() => {
        document.getElementById('chat-circle').style.display = 'none';
        document.querySelector('.chat-box').style.display = 'block';
    }, []);

    const handleBoxToggleClick = useCallback(() => {
        document.getElementById('chat-circle').style.display = 'block';
        document.querySelector('.chat-box').style.display = 'none';
    }, []);

    useEffect(() => {
        document.getElementById('chat-submit').addEventListener('click', (event) => {
            event.preventDefault();
            const msg = inputValue.trim();
            if (msg === '') {
                return false;
            }
            generateMessage(msg, 'self');
            const buttons = [
                {
                    name: 'Existing User',
                    value: 'existing',
                },
                {
                    name: 'New User',
                    value: 'new',
                },
            ];
            setTimeout(() => {
                generateButtonMessage(msg, buttons);
                // Send the message to the WebSocket server
                // socket.emit('user-message', msg);
            }, 1000);
        });

        document.getElementById('chat-circle').addEventListener('click', handleChatCircleClick);

        document.querySelector('.chat-box-toggle').addEventListener('click', handleBoxToggleClick);

        // Listen for messages from the WebSocket server
        // socket.on('admin-message', (message) => {
        //   generateMessage(message, 'admin');
        // });

        // Cleanup event listeners and socket connection when the component unmounts
        return () => {
            document.getElementById('chat-submit').removeEventListener('click', handleButtonClick);
            document.getElementById('chat-circle').removeEventListener('click', handleChatCircleClick);
            document.querySelector('.chat-box-toggle').removeEventListener('click', handleBoxToggleClick);
            //   socket.disconnect();
        };
    }, [inputValue, handleButtonClick, generateButtonMessage, generateMessage, handleChatCircleClick, handleBoxToggleClick]);

    return (
        <>
            <div id="body">
                <div id="chat-circle" className="btn btn-raised">
                    <div id="chat-overlay">
                        <div className="image-container" style={{ background: `url(${chatBox})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '50px', height: '50px' }}>
                            <i className="material-icons">
                                <div className="typing-dot"></div>
                                <div className="typing-dot"></div>
                                <div className="typing-dot"></div>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="chat-box-header">
                        ChatBot
                        <span className="chat-box-toggle">
                            <i className="material-icons"><img src={require('../images/cross.png')} alt="close" /></i>
                        </span>
                    </div>
                    <div className="chat-box-body">
                        <div className="chat-box-overlay"></div>
                        <div className="chat-logs">
                            {messages.map((message) => (
                                <div key={message.id} className={`chat-msg ${message.type}`}>
                                    <span className="msg-avatar">
                                        <img src={require('../images/user.png')} alt="Avatar" />
                                    </span>
                                    <div className="cm-msg-text">{message.content}</div>
                                    {message.buttons && (
                                        <div className="cm-msg-button">
                                            <ul>
                                                {message.buttons.map((button) => (
                                                    <li key={button.value} className="button">
                                                        <button type="button" className="btn btn-primary chat-btn" onClick={() => handleButtonClick(button.value)}>
                                                            {button.name}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="chat-input">
                        <form>
                            <input type="text" id="chat-input" placeholder="Send a message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                            <button type="submit" style={{ display: 'flex', alignItems: 'center' }} className="chat-submit" id="chat-submit">
                                <i className="material-icons"><img src={require('../images/send-message.png')} style={{ width: '25px', height: '25px' }} alt="sentMsg" /></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
