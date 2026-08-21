(() => {
  const header = document.querySelector('.header');
  if (!header) return;

  let trigger = header.querySelector('.menu');
  if (!trigger) {
    trigger = document.createElement('button');
    trigger.className = 'site-menu-trigger';
    trigger.type = 'button';
    trigger.textContent = '☰';
    trigger.setAttribute('aria-label', '메뉴 열기');
    header.append(trigger);
  }

  const style = document.createElement('style');
  style.textContent = `.header .call{margin-left:auto;text-decoration:none}.site-menu-trigger{margin-left:10px;border:0;background:transparent;min-width:40px;min-height:40px;font-size:24px;line-height:1;cursor:pointer}.mobile-menu-overlay{position:fixed;z-index:50;inset:0;display:none;background:rgba(0, 12, 30, .8)}.mobile-menu-overlay.open{display:block}.mobile-menu-panel{position:fixed;z-index:51;top:0;right:0;width:min(84vw,330px);height:100vh;padding:22px 20px;background:#FFFFFF;transform:translateX(105%);transition:transform .2s ease}.mobile-menu-panel.open{transform:translateX(0)}.mobile-menu-top{display:flex;align-items:center;justify-content:space-between;padding-bottom:22px;border-bottom:1px solid #E5E8EB}.mobile-menu-logo{font-size:20px;font-weight:900}.mobile-menu-logo em{font-style:normal;color:#1B64DA}.mobile-menu-close{border:0;background:transparent;min-width:40px;min-height:40px;font-size:27px;cursor:pointer}.mobile-menu-links{display:grid;margin-top:8px}.mobile-menu-links a{padding:17px 3px;border-bottom:1px solid #E5E8EB;font-size:16px;font-weight:800}.mobile-menu-links a:first-child{color:#1B64DA}.mobile-menu-call{display:block;margin-top:24px;min-height:46px;padding:11px 16px;border-radius:7px;background:rgba(0, 12, 30, .8);color:#fff;text-align:center;font-size:17px;font-weight:600}`;
  document.head.append(style);

  document.querySelectorAll('.call').forEach((element) => {
    if (element.tagName === 'A') return;
    const link = document.createElement('a');
    link.className = element.className;
    link.href = 'tel:15880000';
    link.textContent = element.textContent;
    element.replaceWith(link);
  });

  const overlay = document.createElement('div');
  overlay.className = 'mobile-menu-overlay';
  const panel = document.createElement('aside');
  panel.className = 'mobile-menu-panel';
  panel.innerHTML = '<div class="mobile-menu-top"><div class="mobile-menu-logo">GK <em>산업</em></div><button class="mobile-menu-close" type="button" aria-label="메뉴 닫기">×</button></div><nav class="mobile-menu-links" aria-label="기본 메뉴"><a>홈</a><a>시공 사례</a><a>사용 제품</a><a>회사 소개</a></nav><a class="mobile-menu-call" href="tel:15880000">전화 문의 1588-0000</a>';
  document.body.append(overlay, panel);

  const toggle = (open) => { overlay.classList.toggle('open', open); panel.classList.toggle('open', open); };
  trigger.addEventListener('click', () => toggle(true));
  panel.querySelector('.mobile-menu-close').addEventListener('click', () => toggle(false));
  overlay.addEventListener('click', () => toggle(false));
})();
