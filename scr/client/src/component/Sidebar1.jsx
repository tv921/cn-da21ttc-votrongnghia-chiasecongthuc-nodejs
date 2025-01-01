import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Sidebar1 = () => {
  return (
<div className="flex flex-col bg-gradient-to-r from-cyan-900 to-cyan-950 text-gray-100 w-84 h-screen p-4" style={{ position: "sticky", top: "0" }}>
  <div className="flex justify-center mb-4">
    <img
      src="/img/logo.png"
      alt="Logo"
      className="w-48 h-32 rounded-lg shadow-lg"
    />
  </div>
  <ul className="flex flex-col flex-grow space-y-4">
    <Link to="/">
      <li className="flex items-center px-4 py-2 text-2xl font-semibold rounded-lg shadow-md hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
        <FaSearch className="h-5 w-5 mr-2" />
        Tìm kiếm công thức
      </li>
    </Link>
  </ul>
</div>

  );
};

export default Sidebar1;