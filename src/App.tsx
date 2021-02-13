import React, { useState } from 'react';
import Modal from './Modal'

function App() {
  return (
    <div>
    <Modal isOpen={true} text={"1"} />
    <Modal isOpen={true} text={"2"} />
    </div>
  );
}

export default App;
