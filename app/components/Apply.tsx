'use client';

const ctaButtons = [
  {
    title: 'ChatGPT×Kindle出版講座',
    originalPrice: '¥9,800',
    salePrice: '¥1,300',
    url: 'https://www.udemy.com/course/chatgpt-kindle/?couponCode=20250901'
  },
  {
    title: 'Claude Code AIプログラミング入門',
    originalPrice: '¥4,800',
    salePrice: '¥1,300',
    url: 'https://www.udemy.com/course/claude-code-vibe-cording/?couponCode=20250901'
  },
  {
    title: 'ChatGPT×SEOマスター講座',
    originalPrice: '¥27,800',
    salePrice: '¥1,300',
    url: 'https://www.udemy.com/course/nabeken-chatgptseo/?couponCode=20250901'
  },
  {
    title: 'WhisperとChatGPTで音声記事作成',
    originalPrice: '¥2,600',
    salePrice: '¥1,300',
    url: 'https://www.udemy.com/course/whisper-chatgpt/?couponCode=20250901'
  },
  {
    title: 'Claude Code Discord Bot開発講座',
    originalPrice: '¥14,800',
    salePrice: '¥1,300',
    url: 'https://www.udemy.com/course/claude-code-discord-bot/?couponCode=20250901'
  },
  {
    title: '文系のためのWindsurfバイブライティング入門',
    originalPrice: '¥23,800',
    salePrice: '¥1,300',
    url: 'https://www.udemy.com/course/vibe-writing/?couponCode=20250901'
  }
];

export default function Apply() {
  return (
    <section id="apply" className="py-12 sm:py-16 lg:py-20 bg-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">今すぐコースを選んで申し込む</h2>
          <p className="text-lg sm:text-xl">新学期スタートダッシュキャンペーン！全コースがクーポン使用で1,300円</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {ctaButtons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"  
                className="bg-white text-gray-900 rounded-xl p-4 sm:p-6 hover:bg-gray-50 transition-colors cursor-pointer space-y-2 sm:space-y-3"
              >
                <h3 className="text-base sm:text-lg font-bold leading-tight">{button.title}</h3>
                <p className="text-xs sm:text-sm">
                  通常価格 {button.originalPrice} → <span className="text-red-600 font-bold">{button.salePrice}</span>
                </p>
                <div className="bg-purple-600 text-white px-3 py-2 sm:px-4 rounded-lg text-sm font-medium text-center whitespace-nowrap">
                  クーポンを使って申し込む
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-xs sm:text-sm space-y-2">
            <p>※ 各ボタンをクリックすると、クーポンが適用されたUdemyのページが開きます</p>
            <p>※ リンクが正常に動作しない場合は、クーポンコード「<strong>20250901</strong>」を手動で入力してください</p>
          </div>
        </div>
      </div>
    </section>
  );
}