import React, { useState } from 'react';
import ReactModal from 'react-modal'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={()=>{setIsOpen(true)}}>Show Modal</button>
      <ReactModal isOpen={isOpen}>
        <button onClick={()=>{setIsOpen(false)}}>Hide Modal</button>
      </ReactModal>
    </div>
  );
}

export default App;
