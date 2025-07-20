function VideoView() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
        Welcome to SmartHireAI Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((id) => (
          <div key={id} className="bg-white p-4 rounded-lg shadow-md">
            <video controls className="w-full h-48 rounded mb-2">
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h2 className="text-lg font-semibold mb-1">Candidate {id}</h2>
            <p className="text-sm text-gray-600">
              Interview Simulation Result: <span className="italic">Pending</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoView;
