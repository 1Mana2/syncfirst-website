/* SyncFirst leadership profiles.
   Adds two routable profile pages (#mohamed-shawky, #amr-mahmoud) to the single-page router in main.js.
   Each page shows the person's photo over an animated connected-nodes network that fills the hero as its background.
   Bilingual: every string is a <span class="l" data-en data-ar> so the site's language switch (ls()) updates it. */
(() => {
  const main = document.getElementById('main-content');
  if (!main || document.getElementById('prf-mohamed-shawky')) return;

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const lang = () => (typeof LG !== 'undefined' ? LG : 'en');
  const L = (en, ar) => `<span class="l" data-en="${esc(en)}" data-ar="${esc(ar)}">${esc(lang() === 'ar' ? ar : en)}</span>`;

  const P = [
    {
      id: 'mohamed-shawky',
      img: 'team-mohamed.webp',
      en: 'Mohamed Shawky', ar: 'محمد شوقي',
      roleEn: 'Co-Founder & General Manager', roleAr: 'الشريك المؤسس والمدير العام',
      creds: ['CISA', 'CFE', 'CSAA', 'Cert. IFRS'],
      email: 'm.shawky@syncfirst.com.sa',
      li: 'https://www.linkedin.com/in/mohamed-shawky-cia-cisa-cfe-fesaa-csaa-cipa-certifr-26a19513b/',
      metaEn: 'Mohamed Shawky, Co-Founder and General Manager of SyncFirst: internal audit, corporate governance, risk management, fraud investigation and financial advisory.',
      bio: [
        ['Mohamed Shawky is an experienced consulting professional specializing in internal audit, corporate governance, risk management, fraud investigation, and financial advisory services. His expertise spans the development and enhancement of internal audit functions, assessment of internal control environments, and implementation of governance practices that strengthen organizational accountability, regulatory compliance, and operational effectiveness.',
          'يتمتع محمد شوقي بخبرة مهنية واسعة في مجالات التدقيق الداخلي وحوكمة الشركات وإدارة المخاطر والتحقيق في الاحتيال والاستشارات المالية. وتشمل خبراته تأسيس وتطوير إدارات التدقيق الداخلي، وتقييم أنظمة الرقابة الداخلية، وتطبيق ممارسات الحوكمة التي تسهم في تعزيز المساءلة المؤسسية والامتثال للمتطلبات التنظيمية ورفع الكفاءة التشغيلية.'],
        ['Throughout his career, Mohamed has worked with leading consulting firms and organizations across various industries, advising clients on complex audit, governance, and financial reporting matters. His experience includes supporting the preparation and review of financial statements in accordance with International Financial Reporting Standards (IFRS), evaluating financial and operational risks, and providing advisory services to organizations seeking to improve their control environments and business performance.',
          'عمل محمد خلال مسيرته المهنية مع شركات استشارية رائدة ومؤسسات في قطاعات متعددة، حيث قدّم خدمات استشارية متخصصة في التدقيق والحوكمة وإعداد التقارير المالية. وتشمل خبراته دعم إعداد ومراجعة القوائم المالية وفق المعايير الدولية لإعداد التقارير المالية (IFRS)، وتقييم المخاطر المالية والتشغيلية، ومساعدة المؤسسات على تطوير بيئات الرقابة وتحسين الأداء المؤسسي.'],
        ['Mohamed has also led engagements involving internal audit transformation, fraud risk assessments, governance framework development, and the evaluation of organizational policies and procedures. His work focuses on helping organizations establish effective oversight mechanisms, strengthen risk management practices, and achieve sustainable improvements in governance and operational performance.',
          'كما قاد محمد مهام استشارية شملت تطوير وظائف التدقيق الداخلي، وتقييم مخاطر الاحتيال، وتصميم أطر الحوكمة، ومراجعة السياسات والإجراءات المؤسسية. ويركز في عمله على مساعدة المؤسسات في بناء آليات رقابية فعّالة، وتعزيز ممارسات إدارة المخاطر، وتحقيق تحسينات مستدامة في الحوكمة والأداء التشغيلي.']
      ]
    },
    {
      id: 'amr-mahmoud',
      img: 'team-amr.webp',
      en: 'Amr Mahmoud', ar: 'عمرو محمود',
      roleEn: 'Co-Founder & CEO', roleAr: 'الشريك المؤسس والرئيس التنفيذي',
      creds: ['FESAA', 'Cert. IFRS', 'Cert. IA'],
      email: 'amr@syncfirst.com.sa',
      li: 'https://www.linkedin.com/in/amr-mahmoud-essa-certifr-certia-b10670b5/',
      metaEn: 'Amr Mahmoud, Co-Founder and CEO of SyncFirst: internal and external audit, corporate governance, risk management and financial reporting.',
      bio: [
        ['Amr Mahmoud is a seasoned audit and advisory professional with extensive expertise in internal and external audit, corporate governance, risk management, and financial reporting. His professional experience encompasses establishing internal audit functions, evaluating organizational control environments, and advising public and private sector organizations on strengthening governance, financial oversight, and regulatory compliance.',
          'يتمتع عمرو محمود بخبرة مهنية واسعة في مجالات التدقيق الداخلي والخارجي وحوكمة الشركات وإدارة المخاطر وإعداد التقارير المالية. وتشمل خبراته تأسيس إدارات التدقيق الداخلي، وتقييم بيئات الرقابة المؤسسية، وتقديم الاستشارات لمؤسسات القطاعين الحكومي والخاص بهدف تعزيز الحوكمة والرقابة المالية والامتثال للمتطلبات التنظيمية.'],
        ['Throughout his career, Amr has held significant responsibilities in audit and consulting engagements across a broad range of industries. He has supported organizations in developing internal audit strategies, conducting risk assessments, reviewing governance structures, and implementing effective internal control frameworks. His experience also includes advising on the adoption and application of International Financial Reporting Standards (IFRS), supporting financial reporting improvements, and enhancing transparency and accountability.',
          'تولى عمرو خلال مسيرته المهنية مسؤوليات رئيسية في تنفيذ وإدارة مهام التدقيق والاستشارات في قطاعات اقتصادية متنوعة. وقد ساهم في تطوير استراتيجيات التدقيق الداخلي، وإجراء تقييمات المخاطر، ومراجعة هياكل الحوكمة، وتطبيق أطر فعّالة للرقابة الداخلية. كما تشمل خبراته تقديم الاستشارات المتعلقة بتبني وتطبيق المعايير الدولية لإعداد التقارير المالية (IFRS)، وتحسين جودة التقارير المالية، وتعزيز الشفافية والمساءلة المؤسسية.'],
        ['Amr has led initiatives involving the establishment of internal audit departments, development of audit methodologies, assessment of corporate governance practices, and evaluation of financial and operational risks. He brings a comprehensive understanding of regulatory requirements and industry best practices, helping organizations strengthen their control environments, improve decision-making, and achieve long-term operational and financial effectiveness.',
          'وقاد عمرو مبادرات شملت تأسيس إدارات التدقيق الداخلي، وتطوير منهجيات وإجراءات التدقيق، وتقييم ممارسات حوكمة الشركات، وتحليل المخاطر المالية والتشغيلية. ويستند في عمله إلى فهم شامل للمتطلبات التنظيمية وأفضل الممارسات المهنية، بما يساعد المؤسسات على تعزيز أنظمة الرقابة، وتحسين جودة اتخاذ القرارات، وتحقيق الكفاءة التشغيلية والمالية على المدى الطويل.']
      ]
    }
  ];

  /* page titles / descriptions for setMeta() */
  const pm = window.__PM = window.__PM || {};
  P.forEach(p => { pm[p.id] = [`${p.en} – ${p.roleEn} | SyncFirst`, p.metaEn]; });

  /* ---------- markup ---------- */
  const ROOT = window.__ROOT || '';
  P.forEach(p => {
    const sec = document.createElement('section');
    sec.className = 'prf';
    sec.id = 'prf-' + p.id;
    sec.dataset.p = p.id;
    sec.hidden = true;
    sec.setAttribute('aria-labelledby', 'prf-h-' + p.id);
    sec.innerHTML =
      `<div class="prf-hero"><canvas class="prf-bg" aria-hidden="true"></canvas><div class="c prf-hb">
        <div class="prf-ph"><img src="${ROOT}assets/images/${p.img}" alt="${esc(p.en)}" width="640" height="640" decoding="async"></div>
        <div class="prf-id">
          <div class="bc"><a href="#home">${L('Home', 'الرئيسية')}</a><i>/</i><a href="#team">${L('Our Team', 'فريقنا')}</a><i>/</i><span>${L(p.en, p.ar)}</span></div>
          <h1 id="prf-h-${p.id}">${L(p.en, p.ar)}</h1>
          <p class="prf-role">${L(p.roleEn, p.roleAr)}</p>
          <div class="prf-cr">${p.creds.map(c => `<span>${esc(c)}</span>`).join('')}</div>
          <div class="prf-ct">
            <a class="prf-ic" href="mailto:${p.email}" aria-label="Email ${esc(p.en)}"><span data-i="mail"></span></a>
            <a class="prf-ic" href="${p.li}" target="_blank" rel="noopener noreferrer" aria-label="${esc(p.en)} on LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.82-2 3.74-2 4 0 4.75 2.6 4.75 6V21h-4v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V21h-4z"/></svg></a>
            <a class="prf-em" href="mailto:${p.email}">${p.email}</a>
          </div>
        </div>
      </div></div>
      <div class="c prf-body">
        <div class="prf-tx">${p.bio.map(b => `<p>${L(b[0], b[1])}</p>`).join('')}</div>
        <div class="prf-ft">
          <a class="prf-back" href="#team"><span data-i="arrow"></span>${L('Back to our team', 'العودة إلى فريقنا')}</a>
          <a class="btn g" href="#contact">${L('Talk to us', 'تواصل معنا')} ↗</a>
        </div>
      </div>`;
    main.appendChild(sec);
    if (typeof ii === 'function') ii(sec);
  });

  /* ---------- connected-nodes network: the hero background (no labels, no readout) ---------- */
  const rm = window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;

  function mount(sec, seed) {
    const canvas = sec.querySelector('.prf-bg'), hero = sec.querySelector('.prf-hero'), photo = sec.querySelector('.prf-ph');
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = 1, vis = false, raf = 0, t0 = performance.now(), mx = .5, my = .5;

    let s = seed >>> 0;
    const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);

    /* node 0 is the hub, drawn behind the photo; its position follows the photo */
    const hub = { x: .2, y: .5, hub: true, ph: 0, d: .4 };
    const nodes = [hub];
    for (let i = 0; i < 34; i++) {
      nodes.push({ x: .03 + rnd() * .94, y: .06 + rnd() * .88, r: 2 + rnd() * 2.6, ph: rnd() * 6.28, d: .5 + rnd() * .9, big: i < 8 });
    }
    nodes.forEach(n => { if (n.big) n.r += 2.2; });

    /* edges: hub to its nearest nodes, then every node to its two nearest neighbours */
    const E = [], key = new Set();
    const link = (a, b) => { const k = a < b ? a + '-' + b : b + '-' + a; if (a === b || key.has(k)) return; key.add(k); E.push({ a, b, ph: rnd(), sp: .5 + rnd() * .6 }); };
    const near = (i, k) => nodes.map((n, j) => [j, (n.x - nodes[i].x) ** 2 + (n.y - nodes[i].y) ** 2]).filter(q => q[0] !== i)
      .sort((u, v) => u[1] - v[1]).slice(0, k).map(q => q[0]);
    near(0, 6).forEach(j => link(0, j));
    for (let i = 1; i < nodes.length; i++) near(i, 2).forEach(j => link(i, j));

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = hero.clientWidth; h = hero.clientHeight;
      if (!w || !h) return;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function anchor() {
      const a = hero.getBoundingClientRect(), b = photo.getBoundingClientRect();
      if (a.width && b.width) { hub.x = (b.left + b.width / 2 - a.left) / a.width; hub.y = (b.top + b.height / 2 - a.top) / a.height; hub.pr = b.width / 2; }
    }
    const pos = (n, t) => {
      const amp = rm ? 0 : (n.hub ? 0 : 3);
      return [n.x * w + Math.sin(t * .0009 + n.ph) * amp + (mx - .5) * 12 * n.d, n.y * h + Math.cos(t * .0007 + n.ph) * amp + (my - .5) * 12 * n.d];
    };

    function draw(t) {
      if (!w || !h) return;
      anchor();
      ctx.clearRect(0, 0, w, h);

      /* blueprint grid */
      ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(120,200,255,.05)';
      ctx.beginPath();
      for (let x = 0; x <= w; x += 32) { ctx.moveTo(x + .5, 0); ctx.lineTo(x + .5, h); }
      for (let y = 0; y <= h; y += 32) { ctx.moveTo(0, y + .5); ctx.lineTo(w, y + .5); }
      ctx.stroke();

      const P2 = nodes.map(n => pos(n, t)), hx = P2[0][0], hy = P2[0][1], pr = hub.pr || 120;

      /* concentric rings around the photo */
      ctx.strokeStyle = 'rgba(5,172,238,.16)'; ctx.lineWidth = 1;
      [1.35, 1.8, 2.4].forEach(k => { ctx.beginPath(); ctx.arc(hx, hy, pr * k, 0, 6.283); ctx.stroke(); });

      /* edges */
      E.forEach(e => {
        const A = P2[e.a], B = P2[e.b], g = ctx.createLinearGradient(A[0], A[1], B[0], B[1]);
        g.addColorStop(0, 'rgba(7,253,148,.32)'); g.addColorStop(1, 'rgba(5,172,238,.32)');
        ctx.strokeStyle = g; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.stroke();
      });

      /* data packets travelling along the links */
      if (!rm) {
        E.forEach(e => {
          const k = ((t * .00013 * e.sp + e.ph) % 1), A = P2[e.a], B = P2[e.b];
          for (let j = 0; j < 3; j++) {
            const q = Math.max(0, k - j * .035);
            ctx.globalAlpha = .85 - j * .28;
            ctx.fillStyle = j ? '#05ACEE' : '#03FFF6';
            ctx.beginPath(); ctx.arc(A[0] + (B[0] - A[0]) * q, A[1] + (B[1] - A[1]) * q, 2.2 - j * .5, 0, 6.283); ctx.fill();
          }
          ctx.globalAlpha = 1;
        });
      }

      /* nodes (the hub is the photo itself, so it is not drawn) */
      nodes.forEach((n, i) => {
        if (n.hub) return;
        const x = P2[i][0], y = P2[i][1], pulse = rm ? 0 : (Math.sin(t * .002 + n.ph) + 1) / 2;
        if (n.big) {
          ctx.strokeStyle = 'rgba(3,255,246,.4)'; ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.arc(x, y, n.r + 4 + pulse * 3, 0, 6.283); ctx.stroke();
          const ng = ctx.createLinearGradient(x - 6, y - 6, x + 6, y + 6); ng.addColorStop(0, '#07FD94'); ng.addColorStop(1, '#05ACEE');
          ctx.shadowColor = 'rgba(3,255,246,.55)'; ctx.shadowBlur = 10; ctx.fillStyle = ng;
        } else { ctx.fillStyle = 'rgba(5,172,238,.9)'; }
        ctx.beginPath(); ctx.arc(x, y, n.r, 0, 6.283); ctx.fill(); ctx.shadowBlur = 0;
      });
    }

    function frame(now) {
      raf = 0;
      if (!vis || document.hidden) return;
      draw(now - t0);
      if (!rm) raf = requestAnimationFrame(frame);
    }
    const kick = () => { if (!raf && vis) raf = requestAnimationFrame(frame); };
    const refresh = () => { size(); kick(); };

    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width; my = (e.clientY - r.top) / r.height; kick();
    });
    hero.addEventListener('pointerleave', () => { mx = my = .5; kick(); });
    addEventListener('resize', refresh);
    new ResizeObserver(refresh).observe(hero);
    new MutationObserver(refresh).observe(document.documentElement, { attributes: true, attributeFilter: ['dir', 'lang'] });
    new IntersectionObserver(en => { vis = en[0].isIntersecting; if (vis) refresh(); }, { threshold: .05 }).observe(hero);
    document.addEventListener('visibilitychange', kick);
    size();
  }

  P.forEach((p, i) => mount(document.getElementById('prf-' + p.id), 7 + i * 91));
})();
