import React from 'react';
import { useSelector } from 'react-redux';

const MessageList = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div className="message-list" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
      {messages.map((message, index) => (
        <div
          key={index}
          style={{
            textAlign: message.role === 'user' ? 'left' : 'right',
            padding: '10px',
            margin: '10px 0',
            backgroundColor: message.role === 'user' ? '#f1f1f1' : '#d1e7ff',
            borderRadius: '10px',
            maxWidth: '60%',
            alignSelf: message.role === 'user' ? 'flex-start' : 'flex-end'
          }}
        >
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
