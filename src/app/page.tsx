import Link from 'next/link';
const features = [
 {title:'שיעורים מוקלטים',text:'ספריית לימוד מסודרת עם אפשרות להוסיף מעקב התקדמות.'},
 {title:'קורסים',text:'מסלולי לימוד חינמיים ובתשלום — חיבור לסליקה יתווסף לאחר בחירת ספק.'},
 {title:'שיעורים חיים ואירועים',text:'תשתית לתכנון לוח אירועים ותזכורות.'},
 {title:'קהילה ושאל את הרב',text:'מרחב מכבד עם פרטיות והרשאות מתוכננות.'}
];
export default function HomePage(){return <><section className="hero"><span className="eyebrow">לימוד · חיבור · קהילה</span><h1>ברוכים הבאים למרכז נשמה</h1><p className="lead">בית דיגיטלי שמרכז שיעורים, קורסים, אירועים ותוכן קהילתי — בעיצוב נקי ומותאם לעברית.</p><div className="actions"><Link className="button" href="/lessons">לצפייה בשיעורים</Link><Link className="button secondary" href="/courses">לכל הקורסים</Link></div></section><section><h2>כל מה שצריך במקום אחד</h2><div className="grid">{features.map(f=><article className="card" key={f.title}><span className="pill">בסיס ראשוני</span><h3>{f.title}</h3><p>{f.text}</p></article>)}</div></section><p className="notice">גרסת בסיס לפיתוח. תוכן, משתמשים, תשלומים והרשאות אמיתיים יחוברו בשלבים הבאים.</p></>}
