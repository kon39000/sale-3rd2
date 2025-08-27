
'use client';

const reviewsData = [
  {
    id: 1,
    name: '田中さん',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20japanese%20business%20person%20headshot%20portrait%20clean%20background%20modern%20corporate%20style&width=80&height=80&seq=review-avatar-001&orientation=squarish',
    rating: 5,
    course: 'ChatGPT×Kindle出版講座',
    comment: 'ChatGPTを使ってKindle本を出版することができました。初心者でも分かりやすい内容で、実際に収益も得られています。',
    date: '2024年8月'
  },
  {
    id: 2,
    name: '佐藤さん',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20japanese%20business%20woman%20headshot%20portrait%20clean%20background%20modern%20corporate%20style&width=80&height=80&seq=review-avatar-002&orientation=squarish',
    rating: 5,
    course: 'Claude Code AIプログラミング入門',
    comment: 'プログラミング未経験でしたが、Claude Codeのおかげで簡単なアプリを作ることができました。AI時代の新しいスキルが身につきました。',
    date: '2024年8月'
  },
  {
    id: 3,
    name: '山田さん',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20japanese%20freelancer%20headshot%20portrait%20clean%20background%20modern%20creative%20style&width=80&height=80&seq=review-avatar-003&orientation=squarish',
    rating: 5,
    course: 'ChatGPT×SEOマスター講座',
    comment: 'SEOライティングの効率が3倍になりました。ChatGPTを使った記事作成のテクニックが非常に実践的でした。',
    date: '2024年7月'
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
    <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">受講生の声</h2>
          <p className="text-lg sm:text-xl text-gray-600">実際に学んだ方々の感想をご紹介します</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviewsData.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">{review.name}</h3>
                  <div className="flex text-sm sm:text-base">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>

              <div className="text-xs sm:text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 sm:px-3 sm:py-1 rounded-full inline-block">
                {review.course}
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {review.comment}
              </p>

              <div className="text-xs sm:text-sm text-gray-500">
                {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
