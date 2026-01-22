
'use client';

const reviewsData = [
  {
    id: 1,
    name: 'ココさん',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20japanese%20business%20person%20headshot%20portrait%20clean%20background%20modern%20corporate%20style&width=80&height=80&seq=review-avatar-001&orientation=squarish',
    rating: 5,
    course: 'ChatGPT×SEO プロンプト開発マスター講座',
    comment: '正直、AIの前に「SEOライティング」の講義だけでも、受講する価値は十分にありました。SNSやブログで見よう見まねで使っていたシステムプロンプトも、実は全然理解できていなかった ことに気づかされました。表面をなぞっていただけで、本質は見えていなかった と実感。特に、AI開発を本気でやるなら「ゼロからちゃんと学ぶ必要がある」と気づけたのは大きな収穫です。そのうえで提供される特典も非常に実用的で魅力に感じました。',
    date: '4日前'
  },
  {
    id: 2,
    name: 'Go U.さん',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20japanese%20business%20woman%20headshot%20portrait%20clean%20background%20modern%20corporate%20style&width=80&height=80&seq=review-avatar-002&orientation=squarish',
    rating: 5,
    course: 'Claude Codeで始めるAIプログラミング入門',
    comment: 'なんでも作れるというのは前評判で聞いていたが、実際の作り方を説明するようなソースはなかった為、大変役に立った。且つ面白い。',
    date: '3日前'
  },
  {
    id: 3,
    name: 'Ss Y.さん',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20japanese%20freelancer%20headshot%20portrait%20clean%20background%20modern%20creative%20style&width=80&height=80&seq=review-avatar-003&orientation=squarish',
    rating: 5,
    course: 'ChatGPT×SEO プロンプト開発マスター講座',
    comment: 'ライター初心者です。AIはこれから勉強したいと思って受講してみました が、私にとってはSEOライティングについてとても勉強になりました。動画の中でもおっしゃっていましたが、初心者の方にも本当におすすめです！',
    date: '3日前'
  }
];

export default function Reviews() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">受講生の声</h2>
          <p className="text-lg sm:text-xl text-gray-300">実際に学んだ方々の感想をご紹介します</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviewsData.map((review) => (
            <div key={review.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{review.name}</h3>
                  <div className="flex text-sm sm:text-base mt-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>

              <div className="text-xs sm:text-sm font-medium text-amber-300 bg-black border border-amber-400/40 px-2 py-1 sm:px-3 sm:py-1 rounded-full inline-block">
                {review.course}
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {review.comment}
              </p>

              <div className="text-xs sm:text-sm text-gray-400">
                {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
