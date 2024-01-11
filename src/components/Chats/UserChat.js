// import React, { useEffect } from 'react';
// import '../Chats/UserChat.css';

// export default function UserChat() {
//   useEffect(() => {
//     let INDEX = 0;

//     const generateMessage = (msg, type) => {
//       INDEX++;
//       const str = `
//         <div id='cm-msg-${INDEX}' class="chat-msg ${type}">
//           <span class="msg-avatar">
//             <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745" alt="Avatar">
//           </span>
//           <div class="cm-msg-text">${msg}</div>
//         </div>`;

//       const chatLogs = document.querySelector('.chat-logs');
//       chatLogs.innerHTML += str;

//       const newMsg = document.getElementById(`cm-msg-${INDEX}`);
//       newMsg.style.display = 'none';
//       newMsg.style.animation = 'fadeIn 0.3s ease';

//       if (type === 'self') {
//         document.getElementById('chat-input').value = '';
//       }

//       chatLogs.scrollTop = chatLogs.scrollHeight;
//     };

//     const generateButtonMessage = (msg, buttons) => {
//       INDEX++;
//       const btnObj = buttons
//         .map(
//           (button) =>
//             `<li class="button"><a href="javascript:;" class="btn btn-primary chat-btn" chat-value="${button.value}">${button.name}</a></li>`
//         )
//         .join('');

//       const str = `
//         <div id='cm-msg-${INDEX}' class="chat-msg user">
//           <span class="msg-avatar">
//             <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745" alt="Avatar">
//           </span>
//           <div class="cm-msg-text">${msg}</div>
//           <div class="cm-msg-button">
//             <ul>${btnObj}</ul>
//           </div>
//         </div>`;

//       const chatLogs = document.querySelector('.chat-logs');
//       chatLogs.innerHTML += str;

//       const newMsg = document.getElementById(`cm-msg-${INDEX}`);
//       newMsg.style.display = 'none';
//       newMsg.style.animation = 'fadeIn 0.3s ease';

//       chatLogs.scrollTop = chatLogs.scrollHeight;
//       document.getElementById('chat-input').disabled = false;
//     };

//     document.addEventListener('click', (event) => {
//         const target = event.target;
//         if (target.classList.contains('chat-btn')) {
//           // eslint-disable-next-line
          
//           const name = target.innerHTML;
//           document.getElementById('chat-input').disabled = false;
//           generateMessage(name, 'self');
//         }
//       });
      

//     document.getElementById('chat-submit').addEventListener('click', (event) => {
//       event.preventDefault();
//       const msg = document.getElementById('chat-input').value;
//       if (msg.trim() === '') {
//         return false;
//       }
//       generateMessage(msg, 'self');
//       const buttons = [
//         {
//           name: 'Existing User',
//           value: 'existing',
//         },
//         {
//           name: 'New User',
//           value: 'new',
//         },
//       ];
//       setTimeout(() => {
//         generateButtonMessage(msg, buttons);
//       }, 1000);
//     });

//     document.getElementById('chat-circle').addEventListener('click', () => {
//       document.getElementById('chat-circle').style.display = 'none';
//       document.querySelector('.chat-box').style.display = 'block';
//     });

//     document.querySelector('.chat-box-toggle').addEventListener('click', () => {
//       document.getElementById('chat-circle').style.display = 'block';
//       document.querySelector('.chat-box').style.display = 'none';
//     });
//   }, []); // Empty dependency array means this effect will run once after the initial render

//   return (
//     <>
      
//       <div id="body">
//         <div id="chat-circle" className="btn btn-raised">
//           <div id="chat-overlay">
//           <i className="material-icons">
//           <div className="typing-dot"></div>
//           <div className="typing-dot"></div>
//           <div className="typing-dot"></div>

//             </i> 
          
//           </div>
//         </div>
//         <div className="chat-box">
//           <div className="chat-box-header">
//             ChatBot
//             <span className="chat-box-toggle">
//               <i className="material-icons">close</i>
//             </span>
//           </div>
//           <div className="chat-box-body">
//             <div className="chat-box-overlay"></div>
//             <div className="chat-logs"></div>
//           </div>
//           <div className="chat-input">
//             <form>
//               <input type="text" id="chat-input" placeholder="Send a message..." />
//               <button type="submit" className="chat-submit" id="chat-submit">
//                 <i className="material-icons">send</i>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import React, { useState, useEffect ,useCallback } from 'react';
import '../Chats/UserChat.css';
import chatBox from '../images/speech-bubble.png'

export default function UserChat() {
   
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const generateMessage = useCallback((msg, type) => {
      let INDEX = messages.length + 1;
      const newMessage = {
        id: INDEX,
        type: type,
        content: msg,
      };
  
      setMessages((prevMessages) => [...prevMessages, newMessage]);
  
      if (type === 'self') {
        setInputValue('');
      }
    }, [messages]);
  
    const handleButtonClick = useCallback((value) => {
      generateMessage(value, 'self');
    }, [generateMessage]);
  
    const generateButtonMessage = useCallback((msg, buttons) => {
      let INDEX = messages.length + 1;
      const newMessage = {
        id: INDEX,
        type: 'user',
        content: msg,
        buttons: buttons,
      };
  
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }, [messages]);
  
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
        }, 1000);
      });
  
      document.getElementById('chat-circle').addEventListener('click', handleChatCircleClick);
  
      document.querySelector('.chat-box-toggle').addEventListener('click', handleBoxToggleClick);
  
      // Cleanup event listeners when the component unmounts
      return () => {
        document.getElementById('chat-submit').removeEventListener('click', handleButtonClick);
        document.getElementById('chat-circle').removeEventListener('click', handleChatCircleClick);
        document.querySelector('.chat-box-toggle').removeEventListener('click', handleBoxToggleClick);
      };
  
    }, [inputValue, handleButtonClick, generateButtonMessage, generateMessage, handleChatCircleClick, handleBoxToggleClick]);
  
  

  return (
    <>
      <div id="body">
        <div id="chat-circle" className="btn btn-raised">
          <div id="chat-overlay">
            <div className="image-container"   style={{
                            background: `url(${chatBox})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '50px',
                            height: '50px'
                        }}>
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
              <i className="material-icons">close</i>
            </span>
          </div>
          <div className="chat-box-body">
            <div className="chat-box-overlay"></div>
            <div className="chat-logs">
              {messages.map((message) => (
                <div key={message.id} className={`chat-msg ${message.type}`}>
                  <span className="msg-avatar">
                    <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745" alt="Avatar" />
                  </span>
                  <div className="cm-msg-text">{message.content}</div>
                  {message.buttons && (
                    <div className="cm-msg-button">
                      <ul>
                        {message.buttons.map((button) => (
                          <li key={button.value} className="button">
                            <button
                              type="button"
                              className="btn btn-primary chat-btn"
                              onClick={() => handleButtonClick(button.value)}
                            >
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
              <input
                type="text"
                id="chat-input"
                placeholder="Send a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" className="chat-submit" id="chat-submit">
                <i className="material-icons"><img src={require('../images/send-message.png')} alt="sentMsg" /></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
