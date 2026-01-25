'use client';

import { withCoupon, SALE_NAME, SALE_PRICE_DISPLAY } from '@/app/config';

const ctaButtons = [
  {
    title: 'ChatGPT×Kindle出版講座',
    originalPrice: '¥9,800',
    salePrice: SALE_PRICE_DISPLAY,
    url: withCoupon('https://www.udemy.com/course/chatgpt-kindle/')
  },
  {
    title: 'Claude Code AIプログラミング入門',
    originalPrice: '¥4,800',
    salePrice: SALE_PRICE_DISPLAY,
    url: withCoupon('https://www.udemy.com/course/claude-code-vibe-cording/')
  },
  {
    title: 'AntigravityではじめるChrome拡張開発入門',
    originalPrice: '¥19,800',
    salePrice: SALE_PRICE_DISPLAY,
    url: withCoupon('https://www.udemy.com/course/antigravity-chrome-extensions/')
  },
  {
    title: 'ChatGPT×SEOマスター講座',
    originalPrice: '¥27,800',
    salePrice: SALE_PRICE_DISPLAY,
    url: withCoupon('https://www.udemy.com/course/nabeken-chatgptseo/')
  },
  {
    title: 'WhisperとChatGPTで音声記事作成',
    originalPrice: '¥2,600',
    salePrice: SALE_PRICE_DISPLAY,
    url: withCoupon('https://www.udemy.com/course/whisper-chatgpt/')
  },
  {
    title: 'Claude Code Discord Bot開発講座',
    originalPrice: '¥14,800',
    salePrice: SALE_PRICE_DISPLAY,
    url: withCoupon('https://www.udemy.com/course/claude-code-discord-bot/')
  },
  {
    title: '文系のためのWindsurfバイブライティング入門',
    originalPrice: '¥23,800',
    salePrice: SALE_PRICE_DISPLAY,
    url: withCoupon('https://www.udemy.com/course/vibe-writing/')
  },
  {
    title: 'Photoshop代替！nano-bananaで写真合成&デザイン',
    originalPrice: '¥15,800',
    salePrice: SALE_PRICE_DISPLAY,
    url: withCoupon('https://www.udemy.com/course/nano-banana/')
  },
  {
    title: 'Sora2入門｜AI動画生成を体験',
    originalPrice: '¥2,600',
    salePrice: SALE_PRICE_DISPLAY,
    url: withCoupon('https://www.udemy.com/course/sora2aisns/')
  },
  {
    title: 'Suno×Railway×YouTube 自動音楽配信システム',
    originalPrice: '¥4,800',
    salePrice: SALE_PRICE_DISPLAY,
    url: withCoupon('https://www.udemy.com/course/snow-railway-youtube-24/')
  }
];

export default function Apply() {
  return (
    <section id="apply" className="py-12 sm:py-16 lg:py-20 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">今すぐコースを選んで申し込む</h2>
          <p className="text-lg sm:text-xl">{SALE_NAME}特別価格！全コースが <span className="text-cyan-300 font-bold">{SALE_PRICE_DISPLAY}</span></p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {ctaButtons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 border border-zinc-800 text-white rounded-xl p-4 sm:p-6 hover:bg-zinc-800 transition-colors cursor-pointer space-y-2 sm:space-y-3"
              >
                <h3 className="text-base sm:text-lg font-bold leading-tight">{button.title}</h3>
                <p className="text-xs sm:text-sm">
                  通常価格 {button.originalPrice} → <span className="text-cyan-300 font-bold">{button.salePrice}</span>
                </p>
                <div className="bg-cyan-400 text-black px-3 py-2 sm:px-4 rounded-lg text-sm font-medium text-center whitespace-nowrap">
                  セール価格で申し込む
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-xs sm:text-sm space-y-2">
            <p className="text-gray-300">※ Udemyのセール価格が自動適用されます（クーポン不要）。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
