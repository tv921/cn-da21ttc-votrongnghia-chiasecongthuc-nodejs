import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
          />
        </svg>
        Tìm kiếm công thức
      </li>
    </Link>
    <Link to="/manage-recipes">
      <li className="flex items-center px-4 py-2 text-2xl font-semibold rounded-lg shadow-md hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM2 18.992C2 16.512 5.268 15 8 15h8c2.732 0 6 .512 6 3.992V21H2v-2.008z"
          />
        </svg>
        Quản lí công thức
      </li>
    </Link>

    <Link to="/manage-users">
      <li className="flex items-center px-4 py-2 text-2xl font-semibold rounded-lg shadow-md hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM2 18.992C2 16.512 5.268 15 8 15h8c2.732 0 6 .512 6 3.992V21H2v-2.008z"
          />
        </svg>
        Quản lí tài khoản người dùng
      </li>
    </Link>

    <Link to="/manage-comments">
      <li className="flex items-center px-4 py-2 text-2xl font-semibold rounded-lg shadow-md hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM2 18.992C2 16.512 5.268 15 8 15h8c2.732 0 6 .512 6 3.992V21H2v-2.008z"
          />
        </svg>
        Quản lí bình luận
      </li>
    </Link>
    <Link to="/add-recipe">
      <li className="flex items-center px-4 py-2 text-2xl font-semibold rounded-lg shadow-md hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Tạo công thức
      </li>
    </Link>
     <Link to="/statistics">
      <li className="flex items-center px-4 py-2 text-2xl font-semibold rounded-lg shadow-md hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Thống kê
      </li>
    </Link>
  </ul>
</div>

  );
};

export default Sidebar;
