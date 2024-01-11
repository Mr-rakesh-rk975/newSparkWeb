// Import necessary dependencies
import React from 'react';

const AdminChat = () => {
   

  return (
    <div className='admin-chat-outer'>
      <h2>Admin Chat</h2>
      <div className="admin-chat-logs">
        
      </div>
      
      <input type="text" name="message" id="messageByAdmin" />
     <span> Send message</span>
      
    </div>
  );
};

export default AdminChat;
