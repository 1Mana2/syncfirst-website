/* v7: Arabic copy for the redesigned Careers page (written for Arabic readers, not word-for-word).
   Runs after polish.js; re-applies the language so the new static text is picked up. */
(function(){
if(typeof AR==='undefined')return;
Object.assign(AR,{
'Why SyncFirst':'لماذا تزامن الأولى',
'A career that':'مسيرة مهنية',
'grows with you.':'تنمو معك.',
'We bring together diverse expertise, a culture of continuous learning and a shared commitment to excellence. At SyncFirst, you will work on high-impact engagements across governance, risk, cybersecurity, technology and transformation, in a supportive and inclusive environment.':'نجمع خبراتٍ متنوعة وثقافة تعلّم لا تتوقف والتزاماً مشتركاً بالتميّز. وفي تزامن الأولى ستعمل على مشاريع عالية الأثر في الحوكمة والمخاطر والأمن السيبراني والتقنية والتحوّل، ضمن بيئة داعمة تحتضن الجميع.',
'Purposeful impact':'أثرٌ له معنى',
'Contribute to client success and to the wider development of organizations in Saudi Arabia.':'أسهِم في نجاح عملائنا وفي تطوير المؤسسات في المملكة.',
'Continuous learning':'تعلّم مستمر',
'Build new skills, gain recognized expertise and stay ahead of industry trends.':'اكتسب مهارات جديدة وخبرة معتمدة، وسبِق التوجهات الجديدة في القطاع.',
'Collaborative teams':'فرق متعاونة',
'Work with experienced professionals who value knowledge sharing and teamwork.':'اعمل إلى جانب مختصين أصحاب خبرة يؤمنون بتبادل المعرفة وروح الفريق.',
'Career development':'تطوّر وظيفي',
'Clear growth paths and opportunities to take on greater responsibility.':'مسارات نمو واضحة وفرص لتولّي مسؤوليات أكبر.',
'Our people':'فريقنا',
'Life at ':'الحياة في ',
'SyncFirst':'تزامن الأولى',
'A supportive, respectful and high-performing workplace where people are empowered to learn, collaborate and make a difference.':'بيئة عمل داعمة تقوم على الاحترام والأداء العالي، يُمكَّن فيها كل فرد من أن يتعلّم ويتعاون ويصنع فرقاً.',
'A culture built on integrity and trust':'ثقافة تقوم على النزاهة والثقة',
'Exposure to diverse industries and complex challenges':'احتكاك مباشر بقطاعات متنوعة وتحديات معقّدة',
'Mentorship and knowledge sharing':'إرشاد مهني وتبادل للمعرفة',
'A strong focus on professional and personal growth':'اهتمام حقيقي بالنمو المهني والشخصي',
'Interested in joining SyncFirst?':'هل تودّ الانضمام إلى تزامن الأولى؟',
'Share your profile with us, and we’ll get in touch when a suitable opportunity arises.':'شاركنا ملفك المهني، وسنتواصل معك عند توفّر فرصة مناسبة.',
'Build a career with meaning, growth and collaboration.':'ابنِ مسيرتك المهنية على المعنى والنمو والعمل المشترك.',
'Build your career in an environment driven by integrity, collaboration, innovation and meaningful impact. Grow through complex work, make a real difference, and bring your own perspective.':'ابنِ مسيرتك في بيئة تقودها النزاهة والتعاون والابتكار والأثر الحقيقي. انمُ عبر أعمال معقّدة، واصنع فرقاً ملموساً، وأضف وجهة نظرك إلى الفريق.',
'Introduce yourself':'عرّفنا بنفسك'
});
Object.keys(AR).forEach(k=>{const t=k.trim();if(t!==k)AR[t]=AR[k].trim()});
if(typeof LG!=='undefined'&&LG==='ar'&&typeof tl==='function')tl();
})();

/* Footer: rotating S emblem (same as the page-banner emblem), bottom-left */
(function(){try{
  var fb=document.querySelector('footer .fb');if(!fb||fb.querySelector('.fbx'))return;
  function add(){
    var src=document.querySelector('#pbn .pbx svg');if(!src||fb.querySelector('.fbx'))return false;
    var d=document.createElement('div');d.className='pbx fbx';d.setAttribute('aria-hidden','true');
    var cl=src.cloneNode(true);cl.innerHTML=cl.innerHTML.split('sfS').join('sfSF');d.appendChild(cl);fb.insertBefore(d,fb.firstChild);return true;
  }
  if(!add()){var n=0,t=setInterval(function(){if(add()||++n>40)clearInterval(t)},150)}
}catch(e){}})();

/* Slider: keep moving after a framework panel is closed (resume until the pointer moves again) */
(function(){try{
  var md=document.getElementById('md');if(!md)return;
  new MutationObserver(function(){if(!md.classList.contains('o')){document.querySelectorAll('.fws').forEach(function(f){f.classList.add('rs')})}}).observe(md,{attributes:true,attributeFilter:['class']});
  document.addEventListener('pointermove',function(e){var f=e.target.closest&&e.target.closest('.fws');document.querySelectorAll('.fws.rs').forEach(function(x){if(x!==f||e.movementX||e.movementY)x.classList.remove('rs')})},{passive:true});
}catch(e){}})();
