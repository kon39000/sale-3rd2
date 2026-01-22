
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">フリーランスの学校</h3>
            <p className="text-sm sm:text-base text-black/80 mb-2">
              運営会社：株式会社むらかみかいぞく
            </p>
            <p className="text-sm sm:text-base text-black/80">
              代表者：村上 周平
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">リンク</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="https://murakami-kaizoku.jp/" target="_blank" className="text-black/80 hover:text-black transition-colors">会社情報</a></li>
              <li><a href="https://murakami-kaizoku.jp/お問い合わせ/" target="_blank" className="text-black/80 hover:text-black transition-colors">お問い合わせ</a></li>
              <li><a href="https://freelance-gakkou.com/lp/how-to-freelance-2/" target="_blank" className="text-black/80 hover:text-black transition-colors">無料メルマガ登録</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">SNS</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/furikoubot" target="_blank" aria-label="X(Twitter)" className="text-black/80 hover:text-black transition-colors">
                <i className="ri-twitter-x-fill text-xl sm:text-2xl w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="https://www.instagram.com/furikou_official/" target="_blank" aria-label="Instagram" className="text-black/80 hover:text-black transition-colors">
                <i className="ri-instagram-fill text-xl sm:text-2xl w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="https://voicy.jp/channel/2006" target="_blank" aria-label="Voicy" className="text-black/80 hover:text-black transition-colors">
                <i className="ri-mic-fill text-xl sm:text-2xl w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="https://discord.gg/DyF3RV9pDN" target="_blank" aria-label="Discord" className="text-black/80 hover:text-black transition-colors">
                <i className="ri-discord-fill text-xl sm:text-2xl w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-black/20 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-black/80">
            © 2026 フリーランスの学校. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
