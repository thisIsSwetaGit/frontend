import React, { useState } from 'react';

const ChatPanel = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="border-l p-2 h-full w-80 bg-white flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className="p-1 bg-gray-200 mb-1 rounded">{msg}</div>
        ))}
      </div>
      <div className="flex mt-2">
        <input className="border flex-1 p-1 rounded-l" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="bg-blue-500 text-white px-3 rounded-r" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPanel;

