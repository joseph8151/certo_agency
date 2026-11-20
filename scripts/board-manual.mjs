/**
 * 직원용 게시판 설명서를 docs/board-manual.md 로 내보냅니다. — node scripts/board-manual.mjs
 * 내용은 src/data/board-manual.ts 에서 고칩니다. (관리자 화면의 /admin/help 와 같은 내용)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync('src/data/board-manual.ts', 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: 'ES2022' } });
const mod = { exports: {} };
new Function('exports', 'module', outputText)(mod.exports, mod);
const { boardManual, boardManualTitle } = mod.exports;

let md = `# ${boardManualTitle}\n\n> 관리자 화면 주소: https://www.certo-agency.com/admin  ·  게시판 주소: https://www.certo-agency.com/board\n\n`;
for (const s of boardManual) {
  md += `## ${s.title}\n\n`;
  (s.paragraphs ?? []).forEach((p) => (md += `${p}\n\n`));
  if (s.steps) md += s.steps.map((x, i) => `${i + 1}. ${x}`).join('\n') + '\n\n';
  if (s.examples) {
    md += '**좋은 제목**\n\n' + s.examples.good.map((x) => `- ✅ ${x}`).join('\n') + '\n\n';
    md += '**나쁜 제목**\n\n' + s.examples.bad.map((x) => `- ❌ ${x}`).join('\n') + '\n\n';
  }
  if (s.bullets) md += s.bullets.map((x) => `- ${x}`).join('\n') + '\n\n';
}
writeFileSync('docs/board-manual.md', md);
console.log('docs/board-manual.md 생성');
