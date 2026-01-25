'use client';

import CourseCard from './CourseCard';
import { withCoupon, SALE_PRICE_DISPLAY } from '@/app/config';

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
    reviewCount: 17,
    duration: '合計3時間',
    lectures: '40本',
    level: '初級',
    originalPrice: '¥9,800',
    salePrice: SALE_PRICE_DISPLAY,
    features: [
      'ChatGPTを使った効率的な執筆方法',
      '売れるテーマの見つけ方',
      'プロ並みの表紙デザイン作成術',
      'Kindle出版の申請から販売まで'
    ],
    badge: '',
    url: withCoupon('https://www.udemy.com/course/chatgpt-kindle/')
  },
  {
    id: 2,
    title: 'Claude Codeで始めるAIプログラミング入門:\nHTMLやPythonアプリをVibe Codingで自動生成',
    instructor: {
      name: 'けいすけ おおの',
      avatar: '/images/keisuke_icon.png'
    },
    image: '/images/course-claude-code.webp',
    rating: 4.3,
    reviewCount: 546,
    duration: '合計2時間',
    lectures: '26本',
    level: '中級',
    originalPrice: '¥4,800',
    salePrice: SALE_PRICE_DISPLAY,
    features: [
      'Claude Codeで始めるVibe Coding入門',
      'コード生成・修正・デバッグの効率化',
      '自然言語からの自動コード生成',
      'AI協調開発のベストプラクティス'
    ],
    badge: 'ベストセラー',
    url: withCoupon('https://www.udemy.com/course/claude-code-vibe-cording/')
  },
  {
    id: 9,
    title: 'AntigravityではじめるChrome拡張開発入門！\nAI連携・自動操作もやさしく解説',
    instructor: {
      name: 'けいすけ おおの, フリーランスの学校（代表：村上周平）',
      avatar: '/images/keisuke_icon.png'
    },
    image: '/images/antigravity-chrome-extensions.jpg',
    rating: 4.8,
    reviewCount: 60,
    duration: '合計2.5時間',
    lectures: '60本',
    level: 'すべてのレベル',
    originalPrice: '¥19,800',
    salePrice: SALE_PRICE_DISPLAY,
    features: [
      'AntigravityのAIエージェントと協働する拡張開発',
      'UI操作・自動クリック・要素非表示の自動化',
      'OpenRouter等のAPI連携で画像生成機能を実装',
      'ストレージや設定UI、APIキー管理まで学ぶ'
    ],
    badge: '最高評価',
    url: withCoupon('https://www.udemy.com/course/antigravity-chrome-extensions/')
  },
  {
    id: 3,
    title: '【新常識】ChatGPT×SEO プロンプト開発マスター講座|\n脱・AIに奪われるブロガー・WebライターになるAI活用',
    instructor: {
      name: 'なべけん 田邉健',
      avatar: '/images/nabeken.jpg'
    },
    image: '/images/nabeken.webp',
    rating: 4.6,
    reviewCount: 51,
    duration: '合計6時間',
    lectures: '66本',
    level: '初級',
    originalPrice: '¥27,800',
    salePrice: SALE_PRICE_DISPLAY,
    features: [
      'SEOに強いコンテンツをChatGPTで量産する方法',
      '検索意図を的確に捉えるプロンプト設計',
      'AI時代に生き残るWebライティング戦略',
      '実践的なSEOツールとChatGPTの連携術'
    ],
    badge: '',
    url: withCoupon('https://www.udemy.com/course/nabeken-chatgptseo/')
  },
  {
    id: 4,
    title: 'WhisperとChatGPTでできる!\n音声入力×AIで記事作成入門講座',
    instructor: {
      name: 'こん',
      avatar: '/images/kon_icon.jpg'
    },
    image: '/images/kon_whisper.webp',
    rating: 4.9,
    reviewCount: 4,
    duration: '合計1時間',
    lectures: '15本',
    level: '初級',
    originalPrice: '¥2,600',
    salePrice: SALE_PRICE_DISPLAY,
    features: [
      'Whisperを使った高精度音声認識技術',
      '音声入力からAIで自動記事作成',
      '効率的なコンテンツ制作ワークフロー',
      'ChatGPTとの連携による記事品質向上'
    ],
    badge: '',
    url: withCoupon('https://www.udemy.com/course/whisper-chatgpt/')
  },
  {
    id: 5,
    title: 'Claude Codeと音声入力を活用したDiscord Bot開発講座\n〜タスクを自動化するバイブコーディング〜',
    instructor: {
      name: 'けいすけ おおの',
      avatar: '/images/keisuke_icon.png'
    },
    image: '/images/discordbot.png',
    rating: 4.6,
    reviewCount: 24,
    duration: '合計3.5時間',
    lectures: '43本',
    level: '中級',
    originalPrice: '¥14,800',
    salePrice: SALE_PRICE_DISPLAY,
    features: [
      'Claude Codeを使った効率的なBot開発',
      '音声入力によるコーディング手法',
      'Discord API との連携方法',
      'タスク自動化のためのBot設計'
    ],
    badge: '最高評価',
    url: withCoupon('https://www.udemy.com/course/claude-code-discord-bot/')
  },
  {
    id: 6,
    title: '文系のためのWindsurfバイブライティング入門:\nAIエージェントのバイブコーディング「じゃない」使い方解説講座',
    instructor: {
      name: 'ウミノ & フリーランスの学校',
      avatar: '/images/umino_icon.jpg'
    },
    image: '/images/windsurf_u.png',
    rating: 4.5,
    reviewCount: 194,
    duration: '合計2.5時間',
    lectures: '29本',
    level: '初級',
    originalPrice: '¥23,800',
    salePrice: SALE_PRICE_DISPLAY,
    features: [
      'AIエージェント「Cascade」の自動化ライティング',
      'マルチカスケード機能で同時コンテンツ作成',
      'ChatGPTでは実現できない資産化とバックアップ',
      '4,000社以上の実績ある企業環境での活用法'
    ],
    badge: '最高評価',
    url: withCoupon('https://www.udemy.com/course/vibe-writing/')
  },
  {
    id: 7,
    title: 'Photoshopいらず！nano-bananaで写真合成&デザイン素材を作ろう',
    instructor: {
      name: 'こん｜AI Contents Labo, フリーランスの学校',
      avatar: '/images/kon_icon.jpg'
    },
    image: '/images/photoshop-nanobanana.png',
    rating: 3.8,
    reviewCount: 7,
    duration: '合計1時間',
    lectures: '7本',
    level: '初級',
    originalPrice: '¥15,800',
    salePrice: SALE_PRICE_DISPLAY,
    features: [
      '初心者でもスマホでできる！AI画像編集',
      'nano-bananaで写真を合成・着せ替え',
      'デザイン素材の作成テクニック',
      'Photoshop不要の画像加工術'
    ],
    badge: '',
    url: withCoupon('https://www.udemy.com/course/nano-banana/')
  },
  {
    id: 8,
    title: 'Sora2入門｜話題のAI動画生成を体験！\n無料で試す次世代SNS時代の第一歩',
    instructor: {
      name: 'こん（勝沼知世）｜AI Contents Labo, フリーランスの学校（代表：村上周平）',
      avatar: '/images/kon_icon.jpg'
    },
    image: '/images/sora2.png',
    rating: 4.3,
    reviewCount: 42,
    duration: '合計2時間',
    lectures: '17本',
    level: 'すべてのレベル',
    originalPrice: '¥2,600',
    salePrice: SALE_PRICE_DISPLAY,
    features: [
      'Sora2でAI動画生成を体験',
      '無料トライアルの始め方',
      'SNS向けの動画出力と活用',
      '基礎プロンプトとコツ'
    ],
    badge: '',
    url: withCoupon('https://www.udemy.com/course/sora2aisns/')
  },
  {
    id: 10,
    title: 'Suno × Railway × YouTube で音楽を24時間自動配信するシステム構築',
    instructor: {
      name: 'けいすけ おおの, フリーランスの学校（代表：村上周平）',
      avatar: '/images/keisuke_icon.png'
    },
    image: '/images/suno24.png',
    rating: 4.7,
    reviewCount: 15,
    duration: '合計1時間',
    lectures: '23本',
    level: '初級',
    originalPrice: '¥4,800',
    salePrice: SALE_PRICE_DISPLAY,
    features: [
      'Sunoで楽曲生成と管理',
      'Railwayで常時稼働の配信環境',
      'YouTubeライブ配信の自動化',
      '24時間ストリーミング構成の実践'
    ],
    badge: 'ベストセラー',
    url: withCoupon('https://www.udemy.com/course/snow-railway-youtube-24/')
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">セール対象コース</h2>
          <p className="text-lg sm:text-xl text-cyan-300">すべての講座がセール特価 {SALE_PRICE_DISPLAY}</p>
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
