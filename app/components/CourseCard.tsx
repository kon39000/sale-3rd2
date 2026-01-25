'use client';

interface Course {
  id: number;
  title: string;
  instructor: {
    name: string;
    avatar: string;
  };
  image: string;
  rating: number;
  reviewCount: number;
  duration: string;
  lectures: string;
  level: string;
  originalPrice: string;
  salePrice: string;
  features: string[];
  badge: string;
  url: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-cyan-400">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-cyan-400">☆</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>);
    }

    return stars;
  };

  return (
    <article className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 sm:h-48 object-cover object-top"
        />
        {course.badge && (
          <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium ${(course.badge === 'ベストセラー' || course.badge === '最高評価') ? 'bg-cyan-400 text-black' : 'bg-emerald-500 text-black'
            }`}>
            {course.badge}
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-white leading-tight line-clamp-3">
          {course.title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < course.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h3>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
          />
          <span className="text-xs sm:text-sm text-gray-300 truncate">{course.instructor.name}</span>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="flex text-sm sm:text-base">
            {renderStars(course.rating)}
          </div>
          <span className="text-xs sm:text-sm font-medium text-white">{course.rating}</span>
          <span className="text-xs sm:text-sm text-gray-400">({course.reviewCount}件)</span>
        </div>

        <div className="grid grid-cols-3 gap-1 sm:gap-2 text-xs sm:text-sm">
          <div>
            <span className="text-gray-400 block">学習時間</span>
            <div className="font-medium text-white">{course.duration}</div>
          </div>
          <div>
            <span className="text-gray-400 block">レクチャー数</span>
            <div className="font-medium text-white">{course.lectures}</div>
          </div>
          <div>
            <span className="text-gray-400 block">レベル</span>
            <div className="font-medium text-white">{course.level}</div>
          </div>
        </div>

        <ul className="space-y-1 text-xs sm:text-sm text-gray-300">
          {course.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <i className="ri-check-line text-emerald-400 mt-0.5 flex-shrink-0 w-3 h-3 flex items-center justify-center"></i>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t">
          <div className="space-x-1 sm:space-x-2">
            <span className="text-base sm:text-lg text-gray-400 line-through">{course.originalPrice}</span>
            <span className="text-xl sm:text-2xl font-bold text-cyan-300">{course.salePrice}</span>
          </div>
        </div>

        {course.salePrice === '準備中' ? (
          <div className="block w-full bg-gray-400 text-white text-center py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium cursor-not-allowed whitespace-nowrap">
            クーポン準備中
          </div>
        ) : (
          <a
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-cyan-400 text-black text-center py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-cyan-500 transition-colors cursor-pointer whitespace-nowrap"
          >
            セール価格で申し込む
          </a>
        )}
      </div>
    </article>
  );
}
