import React, { useState, useCallback } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'react-flow-renderer';
import CustomNode from './CustomNode';

const nodeTypes = {
  customNode: CustomNode,
};

const initialElements = [];

const Canvas = () => {
  const [elements, setElements] = useState(initialElements);

  const onConnect = useCallback((params) => setElements((els) => addEdge(params, els)), []);

  const onDrop = (event) => {
    event.preventDefault();

    const type = event.dataTransfer.getData('application/reactflow');
    const reactFlowBounds = event.target.getBoundingClientRect();
    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    };
    const newNode = {
      id: `${type}-${+new Date()}`,
      type: 'customNode',
      position,
      data: { label: `${type} node` },
    };

    setElements((es) => es.concat(newNode));
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  return (
    <div style={{ height: '100vh', flexGrow: 1 }} onDrop={onDrop} onDragOver={onDragOver}>
      <ReactFlow elements={elements} nodeTypes={nodeTypes} onConnect={onConnect}>
        <MiniMap nodeColor={(node) => (node.type === 'input' ? 'blue' : '#FFCC00')} />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default Canvas;
