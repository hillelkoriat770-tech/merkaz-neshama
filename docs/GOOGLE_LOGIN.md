# התחברות Google

הכפתור מתחיל OAuth דרך Supabase כאשר ההגדרות קיימות. אין בפרויקט Client ID או Client Secret.

1. צרו פרויקט Supabase.
2. פתחו Authentication → Providers והפעילו Google.
3. צרו OAuth Client מסוג Web ב-Google Cloud Console.
4. הגדירו redirect URLs בדיוק לפי הערכים המוצגים ב-Supabase וב-Google Cloud Console.
5. מלאו `.env.local` עם `NEXT_PUBLIC_SUPABASE_URL` ו-`NEXT_PUBLIC_SUPABASE_ANON_KEY`.
6. הגדירו את כתובות האתר המקומיות והכתובות בפרודקשן ברשימות המורשות.
7. בדקו הצלחה, ביטול, כשל, session ויציאה.

**חשוב:** `src/app/auth/callback/route.ts` הוא placeholder בלבד. יש להשלים טיפול session/cookies באמצעות Supabase SSR לפי התיעוד העדכני לפני שימוש אמיתי. אין להציג את החיבור כמוכן ל-Production עד שהמימוש והבדיקות הושלמו.

לעולם אל תשתפו Google Client Secret או מפתח Supabase service-role.
