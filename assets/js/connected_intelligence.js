/* SyncFirst Connected Intelligence: interactive capability map for the About page.
   Inserted once after #about; follows the site router (data-p) and the AR dictionary / tl() translator in main.js. */
(() => {
  if (document.getElementById('sci')) return;
  const about = document.querySelector('section#about[data-p="about"]');
  if (!about) return;
  const root = window.__ROOT || '';
  const CAP = [
    { k: 'Technology', c: '#05ACEE', i: 'cpu', x: 110, y: 110, d: 'IT consulting, infrastructure, digital transformation and technology strategy.' },
    { k: 'Governance', c: '#03FFF6', i: 'scale', x: 370, y: 110, d: 'Governance frameworks, compliance, internal controls and business accountability.' },
    { k: 'Cybersecurity', c: '#07FD94', i: 'shield', x: 370, y: 370, d: 'Cybersecurity assessments, IT risk and operational resilience.' },
    { k: 'Risk & Audit', c: '#05ACEE', i: 'clip', x: 110, y: 370, d: 'Internal audit, enterprise risk management and assurance services.' }
  ];
  const LEDE = 'Business resilience requires more than isolated solutions. SyncFirst connects technology, governance, cybersecurity and risk management to help organizations address complex challenges through an integrated approach.';
  if (typeof AR !== 'undefined') Object.assign(AR, {
    'The SyncFirst Ecosystem': 'منظومة تزامن الأولى', 'Connected Expertise.': 'خبرة مترابطة.', 'Stronger Outcomes.': 'نتائج أقوى.',
    [LEDE]: 'المرونة المؤسسية تتطلب أكثر من حلول منفصلة. تربط تزامن الأولى بين التقنية والحوكمة والأمن السيبراني وإدارة المخاطر لمساعدة المؤسسات على مواجهة التحديات المعقدة بنهج متكامل.',
    'Technology': 'التقنية', 'Governance': 'الحوكمة', 'Cybersecurity': 'الأمن السيبراني', 'Risk & Audit': 'المخاطر والتدقيق',
    [CAP[0].d]: 'استشارات تقنية المعلومات والبنية التحتية والتحول الرقمي واستراتيجية التقنية.',
    [CAP[1].d]: 'أطر الحوكمة والامتثال والرقابة الداخلية والمساءلة المؤسسية.',
    [CAP[2].d]: 'تقييمات الأمن السيبراني ومخاطر تقنية المعلومات والمرونة التشغيلية.',
    [CAP[3].d]: 'التدقيق الداخلي وإدارة المخاطر المؤسسية وخدمات التأكيد.',
    'Explore related services': 'استكشف الخدمات ذات الصلة', 'Select a capability': 'اختر قدرة'
  });
  const NS = 'http://www.w3.org/2000/svg';
  const mid = 240;
  const lines = CAP.map((c, i) => `<path class="sci-l" data-i="${i}" d="M${mid} ${mid}L${c.x} ${c.y}"/>`).join('');
  const ring = CAP.map((c, i) => { const n = CAP[(i + 1) % 4]; return `<path class="sci-x" d="M${c.x} ${c.y}Q${mid} ${mid} ${n.x} ${n.y}"/>`; }).join('');
  const nodes = CAP.map((c, i) => `<g class="sci-n" data-i="${i}" style="--c:${c.c}" aria-hidden="true"><circle class="bg" cx="${c.x}" cy="${c.y}" r="36"/><g transform="translate(${c.x - 13} ${c.y - 13}) scale(1.08)" class="ico" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${(typeof ICO !== 'undefined' && ICO[c.i]) || ''}</g><text x="${c.x}" y="${c.y < mid ? c.y - 50 : c.y + 62}">${c.k}</text></g>`).join('');
  const tabs = CAP.map((c, i) => `<button type="button" class="sci-tab" data-i="${i}" aria-pressed="false" style="--c:${c.c}">${c.k}</button>`).join('');
  const s = document.createElement('section');
  s.id = 'sci'; s.className = 'sci'; s.setAttribute('data-p', 'about'); s.setAttribute('aria-labelledby', 'sci-t');
  s.hidden = (typeof PG !== 'undefined' ? PG : 'home') !== 'about';
  s.innerHTML = `<div class="c"><div class="sci-copy"><span class="eb">The SyncFirst Ecosystem</span><h2 id="sci-t">Connected Expertise.<br><span class="grad">Stronger Outcomes.</span></h2><p class="lede">${LEDE}</p><div class="sci-tabs" role="group" aria-label="Select a capability">${tabs}</div><div class="sci-panel" aria-live="polite"><h3 id="sci-pt"></h3><p id="sci-pd"></p><a class="m" href="#services">Explore related services ↗</a></div></div><div class="sci-vis"><svg viewBox="0 0 480 480" role="img" aria-label="SyncFirst connected capabilities: Technology, Governance, Cybersecurity, Risk and Audit"><circle class="sci-orbit" cx="${mid}" cy="${mid}" r="170"/><circle class="sci-orbit" cx="${mid}" cy="${mid}" r="118" opacity=".6"/>${ring}${lines}<g class="sci-core"><image href="${root}assets/images/syncfirst-s-mark.webp" x="${mid - 72}" y="${mid - 72}" width="144" height="144" preserveAspectRatio="xMidYMid meet"/></g>${nodes}</svg></div></div>`;
  about.insertAdjacentElement('afterend', s);
  const $q = (q) => s.querySelector(q), $a = (q) => [...s.querySelectorAll(q)];
  let cur = -1;
  function select(i, focus) {
    if (i === cur) return; cur = i;
    $q('#sci-pt').textContent = CAP[i].k; $q('#sci-pd').textContent = CAP[i].d;
    $a('.sci-l').forEach((l, j) => l.classList.toggle('on', j === i));
    $a('.sci-n').forEach((n, j) => n.classList.toggle('on', j === i));
    $a('.sci-tab').forEach((t, j) => { t.classList.toggle('on', j === i); t.setAttribute('aria-pressed', String(j === i)); });
    const p = $q('.sci-panel'); p.classList.remove('swap'); void p.offsetWidth; p.classList.add('swap');
    if (typeof LG !== 'undefined' && LG === 'ar' && typeof tl === 'function') tl(p);
    if (focus) $a('.sci-tab')[i].focus();
  }
  $a('.sci-tab').forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', (e) => {
      const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (d) { e.preventDefault(); select((i + d * (document.dir === 'rtl' || document.documentElement.dir === 'rtl' ? -1 : 1) + 4) % 4, true); }
    });
  });
  $a('.sci-n').forEach((n, i) => n.addEventListener('click', () => select(i)));
  select(0);
  if (typeof LG !== 'undefined' && LG === 'ar' && typeof tl === 'function') tl(s);
})();
