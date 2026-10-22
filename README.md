# מרכז נשמה — פרויקט קוד פתוח

שלד ראשוני לאתר בעברית ובכיווניות RTL, עם עמוד בית, שיעורים, קורסים ומסך התחברות Google דרך Supabase Auth.

**מצב הפרויקט:** בסיס לפיתוח בלבד — לא מוכן ל-Production. התחברות אמיתית דורשת הגדרות Supabase ו-Google OAuth. תשלומים, Zoom, אחסון וידאו ומסד הנתונים העסקי עדיין לא מומשו.

## דרישות
- Node.js 20+
- npm
- פרויקט Supabase (להתחברות אמיתית)

## התקנה
1. חלץ את קובץ הפרויקט.
2. פתח מסוף בתיקייה.
3. הרץ `npm install`.
4. העתק `.env.example` אל `.env.local`.
5. הרץ `npm run dev` ופתח `http://localhost:3000`.

## בדיקות
`npm run lint` · `npm run typecheck` · `npm test` · `npm run build`

## אבטחה
לעולם אל תכניס `service_role`, Google Client Secret או סודות אחרים לקוד לקוח או ל-Git. אין בחבילה credentials אמיתיים.

## מצב החיבורים
Google OAuth דורש הגדרה ב-Supabase וב-Google Cloud. הטיפול ב-callback הוא placeholder שצריך להשלים לפני שימוש אמיתי. תשלומים, Zoom, אחסון וידאו ומסד הנתונים העסקי עדיין לא מומשו.

## רישיון
MIT — ראו `LICENSE`.