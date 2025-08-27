
'use client';

import { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import CouponCode from './CouponCode';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=modern%20digital%20learning%20environment%20with%20floating%20AI%20elements%20holographic%20displays%20and%20coding%20interfaces%20in%20purple%20and%20blue%20gradient%20background%20futuristic%20education%20technology%20abstract%20geometric%20patterns%20high-tech%20atmosphere&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium">
                新学期、新しいスキルで一歩先へ！
              </div>
              
              <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-bold">
                新学期スタートダッシュキャンペーン
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                フリ校Udemy講座<br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  新学期スタートダッシュキャンペーン
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
                ChatGPTを活用したKindle出版・SEO対策・Discord Bot開発まで<br className="hidden sm:block" />
                AI時代に必要なスキルが全て1,300円で学べる！
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <span className="bg-red-500 text-white px-3 py-2 sm:px-4 rounded-full text-sm sm:text-lg font-bold whitespace-nowrap">
                    全講座セール中！
                  </span>
                  <span className="bg-yellow-400 text-black px-3 py-2 sm:px-4 rounded-full text-sm sm:text-lg font-bold whitespace-nowrap">
                    最大95%オフ
                  </span>
                </div>
              </div>
            </div>

            <CountdownTimer />
            <CouponCode />

            <a 
              href="#courses" 
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-lg sm:text-xl font-bold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              今すぐコースを見る
            </a>
          </div>

          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
              <img 
                src="https://furikousale3.vercel.app/images/discordbot.png" 
                alt="Claude Code Discord Bot開発講座" 
                className="w-full object-contain"
              />
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <i className="ri-star-fill text-orange-500 text-lg sm:text-2xl"></i>
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-blue-400 rounded-full flex items-center justify-center">
                <i className="ri-chat-3-fill text-white text-xl sm:text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
