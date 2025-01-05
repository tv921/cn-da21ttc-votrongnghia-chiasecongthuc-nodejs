import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-300 rounded-lg  shadow-lg text-gray-800 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Foodie</h2>
          <p className="text-lg">
            Khám phá công thức nấu ăn thú vị để làm phong phú thêm bữa ăn hàng ngày của bạn.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold text-black mb-4">Liên Hệ</h3>
          <ul className="space-y-2">
            <li>
              <span className="block text-lg">Email: 110121273@st.tvu.edu.vn</span>
            </li>
            <li>
              <span className="block text-lg">Võ Trọng Nghĩa - DA21TTC</span>
            </li>
            <li>
              <span className="block text-lg">Địa chỉ: 126 Nguyễn Thiện Thành, Phường 5, Trà Vinh</span>
            </li>
          </ul>
        </div> 
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-lg text-black">
        &copy; {new Date().getFullYear()} Website chia sẻ công thức nấu ăn.
      </div>
    </footer>
  );
}

export default Footer;
