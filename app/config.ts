// セール共通設定（冬の学び大セール）
export const SALE_NAME = '寒さに負けるな！冬の学び大セール';
// 開始: 2026-01-26 12:00（ローカル）
export const SALE_START_ISO = '2026-01-26T12:00:00';
// 終了: 2026-01-30 23:59:59（ローカル・金）
export const SALE_END_ISO = '2026-01-30T23:59:59';

// クーポンコード（未確定の場合は空文字のまま）
// 例: '20251114' / 'BF2025' など
export const COUPON_CODE = '202601F';

// 表示上の価格表記
export const SALE_PRICE_DISPLAY = '¥1,300';

// クーポン適用URLを組み立て
export function withCoupon(url: string): string {
  if (!COUPON_CODE) return url;
  // 既にクエリがある場合に対応
  const hasQuery = url.includes('?');
  return url + (hasQuery ? '&' : '?') + `couponCode=${COUPON_CODE}`;
}
