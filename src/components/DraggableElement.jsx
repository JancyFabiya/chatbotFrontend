import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableElement = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'element',
    item: { type, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, padding: '10px', margin: '10px', border: '1px solid #777', borderRadius: '5px', backgroundColor: '#fff' }}>
      {label}
    </div>
  );
};

export default DraggableElement;
