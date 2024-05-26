import React from 'react';

const CustomNode = ({ data }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #777', borderRadius: '5px', backgroundColor: '#fff' }}>
      {data.label}
    </div>
  );
};

export default CustomNode;
