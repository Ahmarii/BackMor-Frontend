'use client';
import Link from 'next/link';
import { useState , useEffect } from 'react';

export default function Nav() {
  const [inviteCode, setInviteCode] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
    window.inviteCode = inviteCode;
    }
}, [inviteCode]);

  const handleJoin = () => {
    console.log(window.inviteCode)
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Left side: Input field and Join button */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
          placeholder="Enter invite code"
          className="p-2 rounded-md"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleJoin}>
          Join
        </button>
      </div>

      {/* Center: Search bar */}
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-md"
        />
      </div>
      {/* Right side: Profile icon */}
      <div className="flex items-center">
        <Link href="/profile">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer object-cover object-center"
          />
        </Link>
      </div>
    </nav>
  );
}