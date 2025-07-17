import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((id) => (
          <Link
            to={`/video/${id}`}
            key={id}
            className="border rounded-xl shadow hover:shadow-lg p-4"
          >
            <img
              src={`https://placehold.co/400x200?text=Video+${id}`}
              alt={`Video ${id}`}
              className="mb-2 rounded"
            />
            <h2 className="text-lg font-semibold">Video Title {id}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;