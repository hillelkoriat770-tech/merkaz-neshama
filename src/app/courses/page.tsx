export const metadata = {title:'קורסים'};
const items=[{title:'מסלול היכרות',access:'חינם'},{title:'מסלול לימוד מתקדם',access:'גישה לפי הרשאה'}];
export default function CoursesPage(){return <section className="hero"><span className="eyebrow">מסלולי לימוד</span><h1>קורסים</h1><p className="lead">מצאו מסלול לימוד מתאים והמשיכו בקצב שלכם.</p><div className="grid">{items.map(x=><article className="card" key={x.title}><span className="pill">{x.access}</span><h2>{x.title}</h2><p>דוגמה בלבד; רכישה וגישה מאובטחת טרם מומשו.</p></article>)}</div></section>}
