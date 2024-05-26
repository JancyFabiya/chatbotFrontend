import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { addUserMessage, sendMessage } from '../redux/slices/chatSlice';

const ChatPage = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  const handleSend = (message) => {
    // Dispatch user message to update UI optimistically
    dispatch(addUserMessage({ role: 'user', content: message }));

    // Send message to backend
    dispatch(sendMessage(message));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <MessageList />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatPage;