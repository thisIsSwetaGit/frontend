import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-xl rounded-2xl w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input className="border p-2 mb-3 w-full" type="text" placeholder="Email" />
        <input className="border p-2 mb-3 w-full" type="password" placeholder="Password" />
        <button className="w-full bg-blue-600 text-white py-2 rounded-xl">Login</button>
      </div>
    </div>
  );
}

export default Login;