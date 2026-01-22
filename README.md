## フリ校 Udemy セール LP（ブラックフライデー版）

Next.js(App Router)で構築したセールLPです。セール名・期間・クーポンコードは `app/config.ts` で一括管理します。

### 設定
- `app/config.ts`
  - `SALE_NAME`: セール名（例: ブラックフライデーセール）
  - `SALE_START_ISO`: 開始日時（ローカル時間）
  - `SALE_END_ISO`: 終了日時（ローカル時間）
  - `COUPON_CODE`: Udemyクーポン（未使用なら空文字）
  - `SALE_PRICE_DISPLAY`: 表示価格（例: ¥1,300）

`COUPON_CODE` を空にすると、クーポンUIが非表示になり、リンクもクーポンなしで遷移します。

### 開発サーバー

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認できます。

### コースリンクの更新
参考用に `courses_with_links.txt` にタイトルとURLを列挙しています。実際のリンクは `app/components/Courses.tsx` と `app/components/Apply.tsx` 内の配列を更新してください（クーポンは `config.ts` から自動付与）。
