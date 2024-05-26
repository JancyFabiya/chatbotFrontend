// src/components/ChatDesigner.js
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Toolbox from './Toolbox';
import DroppableCanvas from './DroppableCanvas';

const ChatDesigner = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Toolbox />
        <DroppableCanvas />
      </div>
    </DndProvider>
  );
};

export default ChatDesigner;
