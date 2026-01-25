
'use client';

import { useState } from 'react';
import { COUPON_CODE } from '@/app/config';

export default function CouponCode() {
  const [copied, setCopied] = useState(false);
  const couponCode = COUPON_CODE;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-950 border border-cyan-400/40 rounded-2xl p-4 sm:p-6 text-center">
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-cyan-300">クーポンコード</h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <div className="bg-slate-900 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-mono font-bold text-lg sm:text-xl border-2 border-dashed border-cyan-400 text-cyan-300">
          {couponCode}
        </div>
        <button
          onClick={copyToClipboard}
          className="bg-cyan-400 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-cyan-500 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
        >
          <i className="ri-clipboard-line w-4 h-4 flex items-center justify-center"></i>
          {copied ? 'コピーしました!' : 'コピー'}
        </button>
      </div>
      <p className="text-xs sm:text-sm mt-2 sm:mt-3 text-gray-300">
        ※ Udemyの決済画面でこのコードを入力してください
      </p>
    </div>
  );
}
