import React from "react";

function Register() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-xl rounded-2xl w-80">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input className="border p-2 mb-3 w-full" type="text" placeholder="Name" />
        <input className="border p-2 mb-3 w-full" type="email" placeholder="Email" />
        <input className="border p-2 mb-3 w-full" type="password" placeholder="Password" />
        <button className="w-full bg-green-600 text-white py-2 rounded-xl">Register</button>
      </div>
    </div>
  );
}

export default Register;