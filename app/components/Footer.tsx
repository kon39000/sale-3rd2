
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-['Pacifico']">フリ校Udemy</h3>
            <p className="text-sm sm:text-base text-gray-400">
              AI時代に必要なスキルを<br className="hidden sm:block" />
              手軽に学べる講座を提供
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">人気講座</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li>ChatGPT×Kindle出版</li>
              <li>Claude Code入門</li>
              <li>SEOマスター講座</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">サポート</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li>よくある質問</li>
              <li>お問い合わせ</li>
              <li>利用規約</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">SNS</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-twitter-fill text-xl sm:text-2xl w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-youtube-fill text-xl sm:text-2xl w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © 2024 フリ校Udemy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
