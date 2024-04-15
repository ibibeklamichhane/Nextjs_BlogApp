// components/TopBar.tsx
import React from 'react';
import Link from 'next/link';
import BellIcon from '@/Icons/NotificationIcon';

const TopBar:React.FC = () => {
  return (
    <div className=" bg-gray-200 text-white py-4 px-6 flex justify-between items-center border border-sky-500">
     {/*} <div className="logo">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold"></a>
        </Link>
      </div>
  */}
        <div className="">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-center px-4 text-black  ">Dev Blogs</a>
        </Link>
      </div>
      <div className="mb-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-10" 
        />
      </div>
      <div className="profile-and-notification flex items-center">
        <div className="notification mr-4">
        <BellIcon/>
        </div>
        <div className="profile">
          <button className="flex items-center">
            <img
              src="https://via.placeholder.com/40x40"
              alt="Profile"
              className="rounded-full mr-2"
            />
            <span>John Doe</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;