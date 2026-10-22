export const siteConfig = {
 name: 'מרכז נשמה', language: 'he', direction: 'rtl',
 navigation: [{label:'שיעורים',href:'/lessons'},{label:'קורסים',href:'/courses'},{label:'התחברות',href:'/login'}],
} as const;
export function isValidInternalPath(path: string): boolean {
 return path.startsWith('/') && !path.startsWith('//') && !path.includes('\\');
}
