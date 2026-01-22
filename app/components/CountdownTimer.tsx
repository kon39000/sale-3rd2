
'use client';

import { useState, useEffect } from 'react';
import { SALE_END_ISO } from '@/app/config';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(SALE_END_ISO).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">セール終了まで</h3>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        <div className="bg-white/20 rounded-lg p-2 sm:p-3">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{timeLeft.days}</div>
          <div className="text-xs sm:text-sm text-white/80">日</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2 sm:p-3">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{timeLeft.hours}</div>
          <div className="text-xs sm:text-sm text-white/80">時間</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2 sm:p-3">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{timeLeft.minutes}</div>
          <div className="text-xs sm:text-sm text-white/80">分</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2 sm:p-3">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{timeLeft.seconds}</div>
          <div className="text-xs sm:text-sm text-white/80">秒</div>
        </div>
      </div>
    </div>
  );
}
