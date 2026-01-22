
'use client';

import { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import CouponCode from './CouponCode';
import { SALE_NAME, SALE_PRICE_DISPLAY, COUPON_CODE } from '@/app/config';

export default function Hero() {
  return (
    <section className="min-h-screen bg-black pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 sparkle-overlay opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <div className="inline-block bg-amber-400/10 border border-amber-400/40 px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium text-amber-300">
                今年最大の特別割引！
              </div>
              
              <div className="inline-block bg-gradient-to-r from-amber-300 to-yellow-500 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-bold">
                {SALE_NAME}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                フリ校Udemy講座<br />
                <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  {SALE_NAME}
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
                ChatGPT・SEO・Discord Bot開発まで<br className="hidden sm:block" />
                いまだけ全講座 <span className="text-amber-300 font-bold">{SALE_PRICE_DISPLAY}</span>（Udemyセール価格）
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <span className="bg-amber-400 text-black px-3 py-2 sm:px-4 rounded-full text-sm sm:text-lg font-bold whitespace-nowrap">
                    全講座セール中！
                  </span>
                  <span className="bg-black border border-amber-400 text-amber-300 px-3 py-2 sm:px-4 rounded-full text-sm sm:text-lg font-bold whitespace-nowrap">
                    最大95%オフ
                  </span>
                </div>
              </div>
            </div>

            <CountdownTimer />
            {COUPON_CODE && <CouponCode />}

            <a 
              href="#courses" 
              className="inline-block bg-gradient-to-r from-amber-300 to-yellow-500 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-lg sm:text-xl font-bold hover:from-amber-200 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              今すぐコースを見る
            </a>
          </div>

          <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
              <img 
                src="/images/sora2.png" 
                alt="セール対象コースのサムネイルイメージ" 
                className="w-full h-auto object-contain rounded-3xl shadow-2xl ring-1 ring-amber-400/30"
              />
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-amber-400 rounded-full flex items-center justify-center">
                <i className="ri-star-fill text-black text-lg sm:text-2xl lg:text-3xl"></i>
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-black border border-amber-400 rounded-full flex items-center justify-center">
                <i className="ri-chat-3-fill text-amber-300 text-xl sm:text-3xl lg:text-4xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
