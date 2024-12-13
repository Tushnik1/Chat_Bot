import React, { useState } from 'react';
import Chatbox from './Chatbox';

function App() {
  return (
    <div className="App">
      <header>
        <h1>AI Chatbot</h1>
      </header>
      <main>
        <Chatbox />
      </main>
    </div>
  );
}

export default App;
