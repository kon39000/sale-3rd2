'use client';

import type React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { withCoupon } from '@/app/config';

type TypeKey = 'A' | 'B' | 'C' | 'D' | 'E';

type QuestionOption = {
  value: TypeKey;
  label: string;
  description?: string;
};

type Question = {
  id: number;
  title: string;
  options: QuestionOption[];
};

type RecommendedCourse = {
  title: string;
  description: string;
  url: string;
};

type TypeConfig = {
  label: string;
  catchphrase: string;
  description: string;
  courses: RecommendedCourse[];
};

const questions: Question[] = [
  {
    id: 1,
    title: 'いちばん伸ばしたいアウトプットは？',
    options: [
      {
        value: 'A',
        label: 'ブログ・記事・文章',
        description: 'Webライターやブログ・メルマガなど文章で発信したい'
      },
      {
        value: 'B',
        label: '動画・音楽コンテンツ',
        description: 'YouTubeやショート動画、音楽で発信したい'
      },
      {
        value: 'C',
        label: '自動化・Bot・プログラミング',
        description: '面倒な作業をAIとコードで自動化したい'
      },
      {
        value: 'D',
        label: '電子書籍・コンテンツ販売',
        description: 'Kindle出版など、自分のコンテンツを資産にしたい'
      },
      {
        value: 'E',
        label: '画像・デザイン・素材づくり',
        description: 'サムネやバナーなど見た目を整えたい'
      }
    ]
  },
  {
    id: 2,
    title: '作業スタイルとして一番しっくりくるのは？',
    options: [
      {
        value: 'A',
        label: '文章をじっくり書く・編集するのが好き',
        description: 'ストーリーを考えたり、言葉を磨くのが楽しい'
      },
      {
        value: 'B',
        label: '映像や音をいじるのが好き',
        description: '動画編集やBGM選びなどがワクワクする'
      },
      {
        value: 'C',
        label: '効率化・仕組み化が気持ちいい',
        description: '作業を自動化していくのが快感'
      },
      {
        value: 'D',
        label: '企画を考えてコンテンツ化したい',
        description: '自分のコンテンツを形にして届けたい'
      },
      {
        value: 'E',
        label: '見た目やレイアウトを整えるのが好き',
        description: 'デザインや配色を考えるのが楽しい'
      }
    ]
  },
  {
    id: 3,
    title: '今いちばん惹かれるキーワードは？',
    options: [
      { value: 'A', label: 'ブログ・SEO・Webライター' },
      { value: 'B', label: 'YouTube・ショート動画・SNS' },
      { value: 'C', label: 'Bot・API・AIエージェント' },
      { value: 'D', label: 'Kindle・出版・ストック収入' },
      { value: 'E', label: 'サムネ・バナー・写真合成' }
    ]
  },
  {
    id: 4,
    title: '半年後、どんな状態になっていたい？',
    options: [
      {
        value: 'A',
        label: '文章×AIで副業・仕事につなげている',
        description: 'ブログや記事制作で安定して発信できている'
      },
      {
        value: 'B',
        label: '動画・音楽×AIで発信・集客できている',
        description: 'YouTubeやSNSでAI動画・音楽を発信している'
      },
      {
        value: 'C',
        label: '自動化×AIで単純作業を手放している',
        description: 'Botやスクリプトでタスクが自動化されている'
      },
      {
        value: 'D',
        label: '電子書籍×AIで自分の作品を出している',
        description: 'Kindle出版で自分の本を出している'
      },
      {
        value: 'E',
        label: 'デザイン×AIで成果物のクオリティが上がっている',
        description: 'サムネや資料の見た目が一段階アップしている'
      }
    ]
  },
  {
    id: 5,
    title: '今の自分に一番近いのは？',
    options: [
      {
        value: 'A',
        label: '文章の仕事・興味が強い',
        description: 'ライティング・構成・編集など言葉に関わることが多い'
      },
      {
        value: 'B',
        label: '昔から動画や音楽が好き',
        description: '撮影・編集や音楽制作などに興味がある'
      },
      {
        value: 'C',
        label: 'ガジェット・ツール・効率化が好き',
        description: '便利ツールやAIサービスを試すのが好き'
      },
      {
        value: 'D',
        label: '自分のコンテンツで稼ぎたい',
        description: '自分の経験や知識を講座や本にしたい'
      },
      {
        value: 'E',
        label: 'クリエイティブな見た目づくりが楽しい',
        description: '画像・デザイン・レイアウトをいじるのが好き'
      }
    ]
  }
];

const typeConfigs: Record<TypeKey, TypeConfig> = {
  A: {
    label: 'タイプA：ライティング×AIクリエイター',
    catchphrase: '文章で価値を届けたい、言葉のクリエイタータイプ',
    description:
      'ブログ・SEO・Webライティングなど、文章を武器にしてAIを活用したいタイプです。音声入力やプロンプト設計を身につけると、記事制作のスピードと質が一気に上がります。',
    courses: [
      {
        title: 'WhisperとChatGPTでできる！音声入力×AIで記事作成入門講座',
        description: '話すだけで記事が形になる、音声入力×ChatGPTによる記事制作のはじめの一歩。',
        url: withCoupon('https://www.udemy.com/course/whisper-chatgpt/')
      },
      {
        title: '【新常識】ChatGPT×SEO プロンプト開発マスター講座',
        description: '検索に強い記事を量産するためのSEOライティング×プロンプト設計を体系的に学べます。',
        url: withCoupon('https://www.udemy.com/course/nabeken-chatgptseo/')
      },
      {
        title: '文系のためのWindsurfバイブライティング入門',
        description: 'AIエージェントを活用して、同時に複数コンテンツを資産化していくワークフローを学ぶ講座です。',
        url: withCoupon('https://www.udemy.com/course/vibe-writing/')
      }
    ]
  },
  B: {
    label: 'タイプB：動画・音楽クリエイター',
    catchphrase: '映像や音で世界観を届けたい、マルチメディアタイプ',
    description:
      'YouTubeやショート動画、音楽配信など、視覚・聴覚コンテンツで発信していきたいタイプです。AI動画生成や自動配信の仕組みを組み合わせることで、少ない負担で継続的に発信できます。',
    courses: [
      {
        title: 'Sora2入門｜話題のAI動画生成を体験！無料で試す次世代SNS時代の第一歩',
        description: '話題のSora2でAI動画を生成し、SNS向けのショート動画を作っていく入門講座です。',
        url: withCoupon('https://www.udemy.com/course/sora2aisns/')
      },
      {
        title: 'Suno × Railway × YouTube で音楽を24時間自動配信するシステム構築',
        description: 'AIで作った音楽を24時間自動配信するYouTubeライブの仕組みづくりを学べます。',
        url: withCoupon('https://www.udemy.com/course/snow-railway-youtube-24/')
      }
    ]
  },
  C: {
    label: 'タイプC：AI自動化エンジニア',
    catchphrase: '面倒な作業を仕組みで解決する、自動化エンジニアタイプ',
    description:
      'Bot開発やプログラミングを通じて、タスクの自動化やワークフロー構築に興味があるタイプです。Claude Codeを活用すると、コードを書くハードルを下げながら、実用的な仕組みづくりに挑戦できます。',
    courses: [
      {
        title: 'Claude Codeで始めるAIプログラミング入門：HTMLやPythonアプリをVibe Codingで自動生成',
        description: 'Claude Codeと対話しながら、Webアプリやスクリプトを作る「Vibe Coding」の基本を身につけます。',
        url: withCoupon('https://www.udemy.com/course/claude-code-vibe-cording/')
      },
      {
        title: 'Claude Codeと音声入力を活用したDiscord Bot開発講座',
        description: '音声入力×Claude CodeでDiscord Botを作り、通知や作業を自動化する実践講座です。',
        url: withCoupon('https://www.udemy.com/course/claude-code-discord-bot/')
      }
    ]
  },
  D: {
    label: 'タイプD：出版・コンテンツオーナー',
    catchphrase: '自分のコンテンツを形にして資産にしたい、オーナータイプ',
    description:
      'Kindle出版や自分のノウハウをコンテンツとして残していきたいタイプです。テーマ設計から執筆、表紙デザインまでAIを組み合わせることで、1人でも出版に挑戦しやすくなります。',
    courses: [
      {
        title: '初心者でもできる！ChatGPTでゼロからはじめるKindle出版',
        description: 'テーマ決めから構成作り、原稿執筆、表紙デザインまで、出版プロセスをトータルで学べます。',
        url: withCoupon('https://www.udemy.com/course/chatgpt-kindle/')
      },
      {
        title: '【新常識】ChatGPT×SEO プロンプト開発マスター講座',
        description: '出版した本やコンテンツを届けるためのSEO・集客の土台づくりにも役立つ講座です。',
        url: withCoupon('https://www.udemy.com/course/nabeken-chatgptseo/')
      }
    ]
  },
  E: {
    label: 'タイプE：デザイン・素材クリエイター',
    catchphrase: '見た目のクオリティを一気に底上げしたい、デザインタイプ',
    description:
      'サムネイルやバナー、資料の画像など「見た目」を整えるのが好きなタイプです。AI画像ツールを使いこなせると、Photoshopなしでもスピーディに素材を作れるようになります。',
    courses: [
      {
        title: '【Nano Banana Pro対応】AIクリエイティブ実践講座｜Nano Bananaで0→1の素材・デザインづくり',
        description: 'ブラウザツール「nano-banana」で写真合成や素材づくりを行う実践講座です。',
        url: withCoupon('https://www.udemy.com/course/nano-banana/')
      }
    ]
  }
};

const typeOrder: TypeKey[] = ['A', 'B', 'C', 'D', 'E'];

export default function DiagnosisPage() {
  const [answers, setAnswers] = useState<Record<number, TypeKey | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
  });
  const [resultType, setResultType] = useState<TypeKey | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnswerChange = (questionId: number, value: TypeKey) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value
    }));
    setError(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const unanswered = questions.filter((q) => !answers[q.id]);
    if (unanswered.length > 0) {
      setError('すべての質問にお答えください。');
      setResultType(null);
      return;
    }

    const scores: Record<TypeKey, number> = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0
    };

    Object.values(answers).forEach((value) => {
      if (!value) return;
      scores[value] += 1;
    });

    let bestType: TypeKey = 'A';
    let bestScore = -1;

    typeOrder.forEach((type) => {
      const score = scores[type];
      if (score > bestScore) {
        bestScore = score;
        bestType = type;
      }
    });

    setResultType(bestType);
    setError(null);

    const resultSection = document.getElementById('diagnosis-result');
    if (resultSection) {
      resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleReset = () => {
    setAnswers({
      1: null,
      2: null,
      3: null,
      4: null,
      5: null
    });
    setResultType(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="text-cyan-400 font-['Pacifico'] text-xl">フリ校Udemy</span>
            <span className="text-xs sm:text-sm text-gray-300">AI講座ぴったり診断</span>
          </div>
          <Link
            href="/"
            className="text-xs sm:text-sm text-gray-300 hover:text-cyan-400 border border-slate-700 hover:border-cyan-400 rounded-full px-3 py-1 transition-colors self-start sm:self-auto"
          >
            セールLPを見る
          </Link>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <section className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            5つの質問でわかる、
            <span className="text-cyan-300"> あなたにぴったりなAI講座診断</span>
          </h1>
          <div className="mb-5 sm:mb-6">
            <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl border border-slate-800 bg-white">
              <Image
                src="/images/ai-course-diagnosis.png"
                alt="AI Course Diagnosis のイメージイラスト"
                width={1370}
                height={768}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            「どの講座を選べばいいかわからない…」という方のために、今回のセール対象講座の中から
            <span className="text-cyan-300 font-semibold"> あなたの目的に合った講座</span>
            をタイプ別におすすめします。5つの質問に直感で答えるだけで、ぴったりなコースがわかります。
          </p>
        </section>

        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 mb-10 sm:mb-12">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {questions.map((question) => (
              <div key={question.id} className="border border-slate-800 rounded-xl p-4 sm:p-5 bg-slate-950/40">
                <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Q{question.id}. {question.title}
                </h2>
                <div className="space-y-2 sm:space-y-3">
                  {question.options.map((option) => {
                    const inputId = `q${question.id}-${option.value}`;
                    const checked = answers[question.id] === option.value;
                    return (
                      <label
                        key={option.value}
                        htmlFor={inputId}
                        className={`flex items-start space-x-3 rounded-lg border px-3 py-2 sm:px-4 sm:py-3 cursor-pointer transition-colors ${checked
                          ? 'border-cyan-400 bg-cyan-400/10'
                          : 'border-zinc-700 bg-black/40 hover:border-cyan-300/70 hover:bg-zinc-900/60'
                          }`}
                      >
                        <div className="pt-1">
                          <input
                            type="radio"
                            id={inputId}
                            name={`question-${question.id}`}
                            value={option.value}
                            checked={checked}
                            onChange={() => handleAnswerChange(question.id, option.value)}
                            className="w-4 h-4 text-cyan-400 border-slate-600 bg-slate-950 focus:ring-cyan-400"
                          />
                        </div>
                        <div>
                          <p className="text-sm sm:text-base font-medium">{option.label}</p>
                          {option.description && (
                            <p className="text-xs sm:text-sm text-gray-400 mt-1">{option.description}</p>
                          )}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}

            {error && <p className="text-sm text-red-400">{error}</p>}

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-cyan-400 text-black font-semibold text-sm sm:text-base hover:bg-cyan-500 transition-colors w-full sm:w-auto"
              >
                診断結果を表示する
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-slate-700 text-xs sm:text-sm text-gray-300 hover:border-slate-500 hover:text-white transition-colors w-full sm:w-auto"
              >
                回答をリセットする
              </button>
            </div>
          </form>
        </section>

        <section id="diagnosis-result" className="mb-12 sm:mb-16">
          {resultType ? (
            <div className="bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-950 border border-cyan-400/60 rounded-2xl p-5 sm:p-7">
              <p className="text-xs sm:text-sm text-cyan-200 mb-2 font-semibold tracking-wide">診断結果</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-2">
                {typeConfigs[resultType].label}
              </h2>
              <p className="text-sm sm:text-base text-cyan-100 mb-4 sm:mb-5">
                {typeConfigs[resultType].catchphrase}
              </p>
              <p className="text-sm sm:text-base text-gray-100 mb-6 sm:mb-8 leading-relaxed">
                {typeConfigs[resultType].description}
              </p>

              <div className="space-y-4 sm:space-y-5">
                <h3 className="text-lg sm:text-xl font-semibold">あなたへのおすすめ講座</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {typeConfigs[resultType].courses.map((course) => (
                    <a
                      key={course.title}
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-slate-700 bg-slate-950/60 hover:border-cyan-400/80 hover:bg-slate-900/80 transition-colors p-4 sm:p-5"
                    >
                      <h4 className="text-sm sm:text-base font-semibold mb-2 text-white">{course.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-300 mb-3">{course.description}</p>
                      <div className="inline-flex items-center text-xs sm:text-sm font-medium text-black bg-cyan-400 px-3 py-1.5 rounded-full">
                        クーポン適用で講座ページを見る
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 sm:mt-10 border-t border-slate-800 pt-5 sm:pt-6">
                <p className="text-xs sm:text-sm text-gray-300 mb-3">
                  「他の講座も比較して選びたい」「別のジャンルも気になる」という方は、セールLPで全講座をチェックできます。
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-cyan-100 transition-colors w-full sm:w-auto"
                  >
                    すべてのセール講座を一覧で見る
                  </Link>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-slate-700 text-xs sm:text-sm text-gray-300 hover:border-slate-500 hover:text-white transition-colors w-full sm:w-auto"
                  >
                    もう一度診断する
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-sm sm:text-base text-gray-400">
              質問に回答して「診断結果を表示する」を押すと、ここにあなたのタイプとおすすめ講座が表示されます。
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
