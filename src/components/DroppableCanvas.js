import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import CustomNode from './CustomNode';

const DroppableCanvas = () => {
  const [nodes, setNodes] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'element',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const position = {
        left: offset.x,
        top: offset.y,
      };
      setNodes((nodes) => [...nodes, { ...item, position }]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} style={{ flex: 1, padding: '10px', position: 'relative', border: '1px solid #777', height: '100vh', backgroundColor: isOver ? '#f0f0f0' : '#fff' }}>
      {nodes.map((node, index) => (
        <div key={index} style={{ position: 'absolute', left: node.position.left, top: node.position.top }}>
          <CustomNode data={node} />
        </div>
      ))}
    </div>
  );
};

export default DroppableCanvas;
