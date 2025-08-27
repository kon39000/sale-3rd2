
'use client';

import { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: 'クーポンコードはいつまで使えますか？',
    answer: 'クーポンコード「20250901」は2025年9月30日まで有効です。期間限定のため、お早めにご利用ください。'
  },
  {
    id: 2,
    question: '講座の内容について質問がある場合はどうすればよいですか？',
    answer: '各講座のUdemyページにあるQ&Aセクションで質問していただけます。講師が直接回答いたします。'
  },
  {
    id: 3,
    question: '返金保証はありますか？',
    answer: 'Udemyの30日間返金保証が適用されます。講座内容にご満足いただけない場合は、購入から30日以内であれば返金が可能です。'
  },
  {
    id: 4,
    question: '講座の視聴期限はありますか？',
    answer: '購入した講座は永続的にアクセス可能です。一度購入すれば、いつでも何度でも復習していただけます。'
  },
  {
    id: 5,
    question: 'スマートフォンでも受講できますか？',
    answer: 'はい、UdemyのアプリをダウンロードすることでiPhoneやAndroidでも受講可能です。通勤中や外出先でも学習できます。'
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">よくある質問</h2>
          <p className="text-lg sm:text-xl text-gray-600">受講前の疑問にお答えします</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqData.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-4 py-4 sm:px-6 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="text-base sm:text-lg font-bold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <i className={`ri-arrow-down-s-line text-xl sm:text-2xl text-gray-400 transition-transform duration-200 flex-shrink-0 w-6 h-6 flex items-center justify-center ${
                  openItems.includes(item.id) ? 'rotate-180' : ''
                }`}></i>
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
