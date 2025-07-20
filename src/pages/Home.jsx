import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Welcome to VideoHub 🎥</h1>
      <p className="text-lg mb-8">Your AI-powered YouTube clone with chat integration.</p>
      <div className="flex gap-6">
        <Link to="/login">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700">Login</button>
        </Link>
        <Link to="/register">
          <button className="px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700">Register</button>
        </Link>
      </div>
    </div>
  );
}
