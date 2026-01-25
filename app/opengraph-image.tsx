import { ImageResponse } from 'next/og';
import { SALE_NAME, SALE_PRICE_DISPLAY, SALE_START_ISO, SALE_END_ISO } from './config';

export const runtime = 'edge';
export const alt = 'フリ校 Udemy セール OGP';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

function fmtRange(startIso: string, endIso: string): string {
  try {
    const youbi = ['日', '月', '火', '水', '木', '金', '土'];
    const s = new Date(startIso);
    const e = new Date(endIso);
    const sStr = `${s.getMonth() + 1}/${s.getDate()}(${youbi[s.getDay()]}) ${String(s.getHours()).padStart(2, '0')}:${String(s.getMinutes()).padStart(2, '0')}`;
    const eStr = `${e.getMonth() + 1}/${e.getDate()}(${youbi[e.getDay()]}) ${String(e.getHours()).padStart(2, '0')}:${String(e.getMinutes()).padStart(2, '0')}`;
    return `${sStr} 〜 ${eStr}`;
  } catch {
    return '';
  }
}

export default function Image() {
  const range = fmtRange(SALE_START_ISO, SALE_END_ISO);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)',
          padding: 60,
          color: '#fff',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: '#22d3ee',
              border: '2px solid #22d3ee',
              padding: '10px 18px',
              borderRadius: 9999,
            }}
          >
            {SALE_NAME}
          </div>
          <div style={{ fontSize: 28, color: '#93c5fd' }}>フリーランスの学校</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.2 }}>Udemy講座セール開催中</div>
          <div style={{ fontSize: 36, color: '#22d3ee', fontWeight: 700 }}>全講座 {SALE_PRICE_DISPLAY}</div>
          {range && (
            <div style={{ fontSize: 28, color: '#e5e7eb' }}>開催期間: {range}</div>
          )}
        </div>

        <div style={{ display: 'flex', gap: 18, color: '#cbd5e1', fontSize: 26 }}>
          <div>ChatGPT・AI活用</div>
          <div>|</div>
          <div>AIプログラミング</div>
          <div>|</div>
          <div>Discord Bot</div>
          <div>|</div>
          <div>デザイン・動画</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
