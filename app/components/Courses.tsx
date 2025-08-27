'use client';

import CourseCard from './CourseCard';

const coursesData = [
  {
    id: 1,
    title: '初心者でもできる!ChatGPTでゼロからはじめるKindle出版:\nテーマ決め・文章作成・表紙デザイン完全攻略',
    instructor: {
      name: 'こん|AI Contents Labo',
      avatar: '/images/kon_icon.jpg'
    },
    image: '/images/kon_kindle.jpg',
    rating: 4.3,
    reviewCount: 14,
    duration: '合計3時間',
    lectures: '40本',
    level: '初級',
    originalPrice: '¥9,800',
    salePrice: '¥1,300',
    features: [
      'ChatGPTを使った効率的な執筆方法',
      '売れるテーマの見つけ方',
      'プロ並みの表紙デザイン作成術',
      'Kindle出版の申請から販売まで'
    ],
    badge: 'ベストセラー',
    url: 'https://www.udemy.com/course/chatgpt-kindle/?couponCode=20250901'
  },
  {
    id: 2,
    title: 'Claude Codeで始めるAIプログラミング入門:\nHTMLやPythonアプリをVibe Codingで自動生成',
    instructor: {
      name: 'けいすけ おおの',
      avatar: '/images/keisuke_icon.png'
    },
    image: '/images/course-claude-code.webp',
    rating: 4.4,
    reviewCount: 334,
    duration: '合計2時間',
    lectures: '26本',
    level: '中級',
    originalPrice: '¥4,800',
    salePrice: '¥1,300',
    features: [
      'Claude Codeで始めるVibe Coding入門',
      'コード生成・修正・デバッグの効率化',
      '自然言語からの自動コード生成',
      'AI協調開発のベストプラクティス'
    ],
    badge: 'ベストセラー',
    url: 'https://www.udemy.com/course/claude-code-vibe-cording/?couponCode=20250901'
  },
  {
    id: 3,
    title: '【新常識】ChatGPT×SEO プロンプト開発マスター講座|\n脱・AIに奪われるブロガー・WebライターになるAI活用',
    instructor: {
      name: 'なべけん 田邉健',
      avatar: '/images/nabeken.jpg'
    },
    image: '/images/nabeken.webp',
    rating: 4.5,
    reviewCount: 44,
    duration: '合計6時間',
    lectures: '66本',
    level: '初級',
    originalPrice: '¥27,800',
    salePrice: '¥1,300',
    features: [
      'SEOに強いコンテンツをChatGPTで量産する方法',
      '検索意図を的確に捉えるプロンプト設計',
      'AI時代に生き残るWebライティング戦略',
      '実践的なSEOツールとChatGPTの連携術'
    ],
    badge: 'ベストセラー',
    url: 'https://www.udemy.com/course/nabeken-chatgptseo/?couponCode=20250901'
  },
  {
    id: 4,
    title: 'WhisperとChatGPTでできる!\n音声入力×AIで記事作成入門講座',
    instructor: {
      name: 'こん',
      avatar: '/images/kon_icon.jpg'
    },
    image: '/images/kon_whisper.webp',
    rating: 4.0,
    reviewCount: 4,
    duration: '合計1時間',
    lectures: '15本',
    level: '初級',
    originalPrice: '¥2,600',
    salePrice: '¥1,300',
    features: [
      'Whisperを使った高精度音声認識技術',
      '音声入力からAIで自動記事作成',
      '効率的なコンテンツ制作ワークフロー',
      'ChatGPTとの連携による記事品質向上'
    ],
    badge: '新講座',
    url: 'https://www.udemy.com/course/whisper-chatgpt/?couponCode=20250901'
  },
  {
    id: 5,
    title: 'Claude Codeと音声入力を活用したDiscord Bot開発講座\n〜タスクを自動化するバイブコーディング〜',
    instructor: {
      name: 'けいすけ おおの',
      avatar: '/images/keisuke_icon.png'
    },
    image: '/images/discordbot.png',
    rating: 4.8,
    reviewCount: 20,
    duration: '合計3.5時間',
    lectures: '43本',
    level: '中級',
    originalPrice: '¥14,800',
    salePrice: '¥1,300',
    features: [
      'Claude Codeを使った効率的なBot開発',
      '音声入力によるコーディング手法',
      'Discord API との連携方法',
      'タスク自動化のためのBot設計'
    ],
    badge: 'ベストセラー',
    url: 'https://www.udemy.com/course/claude-code-discord-bot/?couponCode=20250901'
  },
  {
    id: 6,
    title: '文系のためのWindsurfバイブライティング入門:\nAIエージェントのバイブコーディング「じゃない」使い方解説講座',
    instructor: {
      name: 'ウミノ & フリーランスの学校',
      avatar: '/images/umino_icon.jpg'
    },
    image: '/images/windsurf_u.png',
    rating: 4.7,
    reviewCount: 161,
    duration: '合計2.5時間',
    lectures: '29本',
    level: '初級',
    originalPrice: '¥23,800',
    salePrice: '¥1,300',
    features: [
      'AIエージェント「Cascade」の自動化ライティング',
      'マルチカスケード機能で同時コンテンツ作成',
      'ChatGPTでは実現できない資産化とバックアップ',
      '4,000社以上の実績ある企業環境での活用法'
    ],
    badge: 'ベストセラー',
    url: 'https://www.udemy.com/course/vibe-writing/?couponCode=20250901'
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">セール対象コース</h2>
          <p className="text-lg sm:text-xl text-gray-600">すべての講座がクーポン使用で1,300円</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}