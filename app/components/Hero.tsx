
'use client';

import { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import CouponCode from './CouponCode';
import { SALE_NAME, SALE_PRICE_DISPLAY, COUPON_CODE } from '@/app/config';

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,255,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 snow-overlay"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <div className="inline-block bg-gradient-to-r from-cyan-300 to-blue-500 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-bold">
                {SALE_NAME}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                働き方を広げる<br />
                <span className="bg-gradient-to-r from-cyan-200 via-sky-400 to-blue-500 bg-clip-text text-transparent mt-2 block">
                  10講座まとめセール
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                ── スキルを掛け合わせて「自分の仕事力」を手に入れる
              </p>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
                ChatGPT・SEO・AI開発など実践講座が今だけ最安 <span className="text-cyan-300 font-bold">{SALE_PRICE_DISPLAY}</span>。<br />
                未経験からでもフリーランスの選択肢をつくる力を育てる、特別セール開催中！
              </p>

              <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-4 sm:p-6 mb-6">
                <p className="text-sm sm:text-base text-gray-300 mb-3">
                  スキルを掛け合わせて収益と効率化を実現する10講座。<br />
                  いま学んでいる講座と組み合わせることで、
                </p>
                <div className="bg-slate-950/50 rounded-lg p-3 sm:p-4 mb-3 border border-slate-800">
                  <ul className="space-y-2 text-sm sm:text-lg font-bold text-cyan-200">
                    <li className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-fill text-cyan-400"></i> 収益に直結する力
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-fill text-cyan-400"></i> 仕事の効率化
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-fill text-cyan-400"></i> 未経験からのスタート
                    </li>
                  </ul>
                </div>
                <p className="text-sm sm:text-base text-white font-bold">
                  を一気に加速させます。
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-lg sm:text-xl font-bold text-cyan-300">
                  今だけ全講座 {SALE_PRICE_DISPLAY}！
                </p>
                <p className="text-base sm:text-lg text-gray-200">
                  あなたの未来を変える学びを手に入れるラストチャンス
                </p>
              </div>
            </div>

            <CountdownTimer />
            {COUPON_CODE && <CouponCode />}

            <a
              href="#courses"
              className="inline-block bg-gradient-to-r from-cyan-300 to-blue-500 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-lg sm:text-xl font-bold hover:from-cyan-200 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              今すぐコースを見る
            </a>
          </div>

          <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
              <img
                src="/images/antigravity-chrome-extensions.jpg"
                alt="AntigravityではじめるChrome拡張開発入門！AI連携・自動操作もやさしく解説"
                className="w-full h-auto object-contain rounded-3xl shadow-2xl ring-1 ring-cyan-400/30"
              />
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-cyan-400 rounded-full flex items-center justify-center">
                <i className="ri-star-fill text-black text-lg sm:text-2xl lg:text-3xl"></i>
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-black border border-cyan-400 rounded-full flex items-center justify-center">
                <i className="ri-chat-3-fill text-cyan-300 text-xl sm:text-3xl lg:text-4xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
