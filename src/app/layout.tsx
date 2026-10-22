import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: { default: 'מרכז נשמה', template: '%s | מרכז נשמה' }, description: 'בית דיגיטלי לשיעורים, קורסים, אירועים וקהילה.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="he" dir="rtl"><body>
  <header className="site-header"><a className="brand" href="/"><span className="brand-mark" aria-hidden="true">מ</span>מרכז נשמה</a>
   <nav aria-label="ניווט ראשי"><a href="/lessons">שיעורים</a><a href="/courses">קורסים</a><a href="/login">התחברות</a></nav>
  </header><main>{children}</main><footer className="site-footer">מרכז נשמה · בית דיגיטלי ללימוד ולקהילה</footer>
 </body></html>;
}
