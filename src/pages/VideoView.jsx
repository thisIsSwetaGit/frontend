import React from "react";
import { useParams } from "react-router-dom";

function VideoView() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Video {id}</h1>
      <video controls className="w-full rounded-xl mb-4">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <div className="bg-gray-100 p-4 rounded-xl">
        <h2 className="font-semibold mb-2">Live Chat</h2>
        <div className="h-40 overflow-y-scroll bg-white p-2 rounded mb-2">
          <p>User1: Hello!</p>
          <p>User2: Nice video 🔥</p>
        </div>
        <input
          className="border w-full p-2 rounded"
          type="text"
          placeholder="Type your message..."
        />
      </div>
    </div>
  );
}

export default VideoView;