
import React, { useState, useEffect, useCallback } from 'react';
import '../Chat/AdminChat.css';
import chatBoxImg from '../images/speech-bubble.png';
import socket from '../../scocketIoCo'


export default function UserChat() {


    const [isChatting, setChatting] = useState(false)
    const [messageList, setMessageList] = useState([])
    const [inputFields, setInputFields] = useState({
        name: '',
        room: '',
        message: ''
    })


    const inputHandler = (e) => {
        setInputFields({
            ...inputFields,
            [e.target.name]: e.target.value
        })
    }


    const enterChatRoom = () => {
        socket.emit('join_room', inputFields.room)
        setChatting(true)
        console.log(inputFields)
    }

    useEffect(()=>{
        socket.on('receive_message',(data)=>{
            setMessageList([...messageList, data])
        })
    })

    const sendMessage = async () => {
      try {
          const userMessage = { ...inputFields, sentByAdmin: true };
          await socket.emit('send_message', userMessage);
          setMessageList([...messageList, userMessage]);
      } catch (error) {
          console.error('Error sending message:', error);
      }
  };
    

    const generateMessage = useCallback(() => {

    }, []);

    const handleButtonClick = useCallback((value) => {
        generateMessage(value, 'self');
    }, [generateMessage]);

    const generateButtonMessage = useCallback(() => {

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

            setTimeout(() => {
                generateButtonMessage('hello');
            }, 1000);
        });

        document.getElementById('chat-circle').addEventListener('click', handleChatCircleClick);

        document.querySelector('.chat-box-toggle').addEventListener('click', handleBoxToggleClick);

        return () => {
            document.getElementById('chat-submit').removeEventListener('click', handleButtonClick);
            document.getElementById('chat-circle').removeEventListener('click', handleChatCircleClick);
            document.querySelector('.chat-box-toggle').removeEventListener('click', handleBoxToggleClick);
        };
    }, [handleButtonClick, generateButtonMessage, generateMessage, handleChatCircleClick, handleBoxToggleClick]);

    return (
        <>
            <div id="body">
                <div id="chat-circle" className="btn btn-raised">
                    <div id="chat-overlay">
                        <div className="image-container" style={{ background: `url(${chatBoxImg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '50px', height: '50px' }}>
                            <i className="material-icons">
                                <div className="typing-dot1"></div>
                                <div className="typing-dot2"></div>
                                <div className="typing-dot3"></div>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="chat-box-header">
                        ChatBot
                        <span className="chat-box-toggle">
                            <i className="material-icons"><img src={require('../images/cross.png')} style={{ width: '50px', height: '50px' }} alt="close" /></i>
                        </span>
                    </div>
                    <div className="chat-box-body">
                        <div className="chat-box-overlay"></div>
                        <div className="chat-logs">

                            <div className='chat-msg'>
                                <span className="msg-avatar">
                                    {/* <img src={require('../images/user.png')} alt="Avatar" /> */}
                                </span>
                                <div className="Chats-here">
                                    {
                                       !isChatting ? (
                                            <>
                                                <input type="text" placeholder="Enter name" name="name" onChange={inputHandler} />
                                                <input type="text" placeholder="Enter room" name="room" onChange={inputHandler} />
                                                <br />
                                                <button onClick={enterChatRoom}>Enter chat room</button>
                                            </>
                                        ) : (
                                           <>
                                          <p>Start Chat</p>
                                                <br />
                                                {
      messageList.map((item, index) => {
        return (
            <div className={`chat-i-outer ${item.sentByAdmin ? 'user-sent' : 'admin-received'}`} key={index}>
                <div className="user-icon">
                    <i className="material-icons"><img src={require('../images/user.png')} style={{ width: '40px', height: '40px' }} alt="close" /></i>
                </div>
                <div className="cm-msg-text" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <small><strong>{item.name}: </strong></small> <p>{item.message}</p>
                    {index < messageList.length - 1 && <br />}
                </div>
            </div>
        );
    })
}


                                              
                                              </>
                                        )
                                    }

                                </div>
                                <div className="cm-msg-button">
                                    <ul>
                                        <li className="button">
                                            <button type="button" className="btn btn-primary chat-btn" onClick={() => handleButtonClick()}>

                                            </button>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="chat-input">
                        <form>
                            <input type="text" id="chat-input" placeholder="Send a message..." name='message' onChange={inputHandler}/>
                            <button type="submit" style={{ display: 'flex', alignItems: 'center' }} className="chat-submit" id="chat-submit" onClick={sendMessage}>
                                <i className="material-icons"><img src={require('../images/send-message.png')} style={{ width: '25px', height: '25px' }} alt="sentMsg" /></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
