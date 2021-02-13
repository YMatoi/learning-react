import React, { useState } from 'react';
import Modal from './Modal'

function App() {
  return (
    <div>
      <Modal isOpen={true} text={"1"} count={0} />
      <Modal isOpen={true} text={"2"} count={0} />
    </div>
  );
}

export default App;
