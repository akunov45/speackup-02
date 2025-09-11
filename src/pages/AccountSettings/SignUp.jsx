

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(''); // Avatar input
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // POST - create user
      const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          avatar: avatar || 'https://i.imgur.com/LDOO4Qs.jpg',
        }),
      });

      if (!response.ok) throw new Error('Sign up failed');

      const data = await response.json();
      console.log('User created:', data);

      // GET - fetch user profile by ID
      const profileRes = await fetch(`https://api.escuelajs.co/api/v1/users/${data.id}`);
      const profileData = await profileRes.json();
      console.log('Fetched user profile:', profileData);

      alert('Account created successfully!');
      navigate('/');
    } catch (error) {
      console.error('Sign up error:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-[1016px] h-[795px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side */}
        <div
          className="w-1/2 bg-cover bg-center p-8"
          style={{
            backgroundImage: "url('/img/bg.png')",
          }}
        >
          <div className="text-black h-full flex text-sm bg-opacity-40 rounded w-[496px] h-[795px]">
            <h2 className="text-sm font-medium text-black">
              Welcome, We are <br /> glad to see you <br /> again!
            </h2>
          </div>
        </div>

        {/* Right side */}
        <div className="w-[520px] p-10 bg-[#E9EFFD]  h-[795px]   ">


          <div className=' mt-[90px]  '>

          <h2 className="text-2xl font-bold mb-6 text-black text-[40px] font-bold ">Sign Up</h2>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Re enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Avatar URL</label>
              <input
                type="text"
                placeholder="https://i.imgur.com/your-avatar.jpg"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Already have an account?{' '}
            <span
              onClick={() => navigate('/settings')}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Log in
            </span>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
