import React from 'react';
import DraggableElement from './DraggableElement';
import { useNavigate } from 'react-router-dom';

const Toolbox = () => {
  const navigate = useNavigate();

  const chatBoat = () => {
    navigate('/chat');
  };
  return (
    <div style={{ width: '200px', padding: '10px', borderRight: '1px solid #777' }}>
      <h3>Toolbox</h3>
      <DraggableElement type="message" label="Message" />
      <DraggableElement type="userInput" label="User Input" />
      <button onClick={chatBoat}>Click to Continue Chat</button>

    </div>
  );
};

export default Toolbox;
