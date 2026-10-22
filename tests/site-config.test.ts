import { describe, expect, it } from 'vitest';
import { isValidInternalPath, siteConfig } from '../src/lib/site-config';
describe('site configuration',()=>{
 it('uses Hebrew RTL defaults',()=>{expect(siteConfig.language).toBe('he');expect(siteConfig.direction).toBe('rtl');});
 it('accepts internal paths',()=>{expect(isValidInternalPath('/courses')).toBe(true);});
 it('rejects protocol-relative paths',()=>{expect(isValidInternalPath('//example.com')).toBe(false);});
});
