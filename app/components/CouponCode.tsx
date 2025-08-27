
'use client';

import { useState } from 'react';

export default function CouponCode() {
  const [copied, setCopied] = useState(false);
  const couponCode = '20250901';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-yellow-400 text-black rounded-2xl p-4 sm:p-6 text-center">
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">クーポンコード</h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <div className="bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-mono font-bold text-lg sm:text-xl border-2 border-dashed border-gray-400">
          {couponCode}
        </div>
        <button
          onClick={copyToClipboard}
          className="bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
        >
          <i className="ri-clipboard-line w-4 h-4 flex items-center justify-center"></i>
          {copied ? 'コピーしました!' : 'コピー'}
        </button>
      </div>
      <p className="text-xs sm:text-sm mt-2 sm:mt-3 text-gray-700">
        ※ Udemyの決済画面でこのコードを入力してください
      </p>
    </div>
  );
}
