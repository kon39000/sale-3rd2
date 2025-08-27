'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-purple-600 font-['Pacifico']">フリ校Udemy</h1>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#courses" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
                コース一覧
              </Link>
              <Link href="#reviews" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
                受講生の声
              </Link>
              <Link href="#faq" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
                FAQ
              </Link>
              <Link href="#apply" className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer">
                今すぐ申し込む
              </Link>
            </div>
          </nav>

          <button
            className="md:hidden w-6 h-6 flex flex-col justify-center items-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="#courses" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                コース一覧
              </Link>
              <Link href="#reviews" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                受講生の声
              </Link>
              <Link href="#faq" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                FAQ
              </Link>
              <Link href="#apply" className="bg-purple-600 text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-purple-700 transition-colors">
                今すぐ申し込む
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}