import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() !== '') {
      onSend(message);
      setMessage('');
      console.log('message',message);
    }
  };

  return (
    <div style={{ display: 'flex', padding: '10px' }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <button
        onClick={handleSend}
        style={{ marginLeft: '10px', padding: '10px 20px', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none' }}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;