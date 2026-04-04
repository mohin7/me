const fs = require('fs');
const path = 'app/app.vue';
let text = fs.readFileSync(path, 'utf8');

const injection = `
/* --- Light Mode Fixes for Titanium Glass --- */
.theme-light .bg-white\\/5,
.theme-light .bg-white\\/\\[0\\.03\\] { background-color: rgba(15, 23, 42, 0.03) !important; }
.theme-light .border-white\\/10 { border-color: rgba(15, 23, 42, 0.08) !important; }
.theme-light .border-white\\/5 { border-color: rgba(15, 23, 42, 0.04) !important; }

/* Override complex shadows */
.theme-light [class*="shadow-[inset"] {
  box-shadow: inset 0 2px 0 0 rgba(255,255,255,0.7), 0 16px 32px -8px rgba(15,23,42,0.06) !important;
}
.theme-light [class*="hover:shadow-[inset"]:hover {
  box-shadow: inset 0 2px 0 0 rgba(255,255,255,0.9), 0 32px 64px -12px rgba(15,23,42,0.1), 0 0 0 1px rgba(15,23,42,0.05), 0 12px 32px rgba(var(--brand-rgb),0.1) !important;
}
.theme-light .via-white\\/50 {
  --tw-gradient-via-position: 50%;
  --tw-gradient-via-stops: rgba(15, 23, 42, 0.1) var(--tw-gradient-via-position), transparent !important;
}
`;

if (!text.includes('Light Mode Fixes for Titanium Glass')) {
  text += injection;
  fs.writeFileSync(path, text);
}
