'use client';
import { useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase-browser';
export default function LoginPage(){
 const [message,setMessage]=useState('');
 async function signInWithGoogle(){
  const supabase=getSupabaseBrowserClient();
  if(!supabase){setMessage('התחברות Google עדיין לא הוגדרה. מלאו את משתני Supabase בקובץ .env.local ועקבו אחר docs/GOOGLE_LOGIN.md.');return;}
  const redirectTo=window.location.origin + '/auth/callback';
  const {error}=await supabase.auth.signInWithOAuth({provider:'google',options:{redirectTo}});
  if(error)setMessage('לא ניתן להתחיל התחברות: ' + error.message);
 }
 return <section className="form"><span className="eyebrow">אזור אישי</span><h1>התחברות</h1><p>אפשר להתחבר באמצעות Google לאחר הגדרת הספק.</p><button className="button" type="button" onClick={signInWithGoogle}>המשך באמצעות Google</button>{message&&<p className="notice" role="status">{message}</p>}<p className="notice">אין להזין כאן סיסמאות Google. ההתחברות מתבצעת דרך OAuth.</p></section>;
}
