import React, { useState } from 'react';
import Modal from './Modal'
import Board from './Board'

function App() {
  return (
    <div>
      <Modal isOpen={false} text={"1"} count={0} />
      <Modal isOpen={false} text={"2"} count={0} />
      <Board num={3}/>
    </div>
  );
}

export default App;
