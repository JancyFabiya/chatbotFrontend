// import React from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import Toolbox from './components/Toolbox';
// import DroppableCanvas from './components/DroppableCanvas';

// const App = () => {
//   return (
//     <>
//   <DndProvider backend={HTML5Backend}>
//       <div style={{ display: 'flex', height: '100vh' }}>
//         <Toolbox />
//         <DroppableCanvas />
//       </div>
//     </DndProvider>

//     </>
  
//   );
// };

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
import ChatDesigner from './components/ChatDesigner';
import ChatPage from './components/ChatPage';
import './App.css'
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatDesigner />} />
        <Route path="/chat" element={<ChatPage />} />
        {/* <Route 
            path="/chat" 
            element={
              <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <MessageList />
                <MessageInput />
              </div>
            } 
          /> */}
      </Routes>
    </Router>
  );
};

export default App;