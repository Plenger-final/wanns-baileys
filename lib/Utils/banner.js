import { createRequire } from 'module';

const require = createRequire(import.meta.url);
let printed = false;

export function printBanner() {
    if (printed) return;
    printed = true;

    let version = '1.3.6';
    try {
        version = require('../../package.json').version || version;
    } catch {}

    if (!process.stdout.isTTY) {
        console.log(`[wanns-baileys v${version}] Made by Wanns`);
        return;
    }

    const c = '\x1b[36m'; // Cyan
    const g = '\x1b[32m'; // Green
    const y = '\x1b[33m'; // Yellow
    const r = '\x1b[0m';  // Reset

    console.log(`
${c}  ██╗    ██╗ █████╗ ███╗   ██╗███╗   ██╗███████╗${r}
${c}  ██║    ██║██╔══██╗████╗  ██║████╗  ██║██╔════╝${r}
${c}  ██║ █╗ ██║███████║██╔██╗ ██║██╔██╗ ██║███████╗${r}
${c}  ██║███╗██║██╔══██║██║╚██╗██║██║╚██╗██║╚════██║${r}
${c}  ╚███╔███╔╝██║  ██║██║ ╚████║██║ ╚████║███████║${r}
${c}   ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝${r}

  ╭──────────────────────────────────────────────────────────────────────────╮
  │ ${g}wanns-baileys v${version}${r}   ● typed · extended · battle-tested                │
  │ node ${process.versions.node} · ${process.platform} · pid ${process.pid}                              │
  │ ⚡ anti-ban toolkit   🛡️ bug-shield   📚 ://github.com │
  ╰──────────────────────────────────────────────────────────────────────────╯
   ${y}Good day! "from Termux to production."  — Made with 🍃 by Wanns${r}
`);
}

export default printBanner;
