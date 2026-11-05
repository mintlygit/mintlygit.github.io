'use strict';
/* =====================================================================
   НАСТРОЙКИ — всё, что нужно менять, находится здесь
   ===================================================================== */
const CONFIG = {
  contactUrl: 'https://t.me/vulp3s',                       // ссылка для кнопок «Связь» и «Заказать»
  telegram: [                            // блок «Связи» в графе
    { name: 'o m a', url: 'https://t.me/werteert', role: { ru: 'Заместитель основателя VOID', en: 'Co-founder deputy, VOID' } },
    { name: 'Raven', url: '', role: { ru: 'Контент-менеджер VOID corp. · нет связи', en: 'Content manager, VOID corp. · unreachable' } }
  ],
  links: [                               // соты: имя PNG-файла, ссылка, описание
    { id: 'telegram',  name: 'Telegram',  mono: 'TG', img: 'Resources/hex-telegram.png',  url: 'https://t.me/vulp3s', desc: { ru: 'Основной канал связи: заказы, вопросы и просто поболтать.', en: 'Main channel: orders, questions or just a chat.' }, c1: '#2AABEE', c2: '#176a97' },
    { id: 'discord',   name: 'Discord',   mono: 'DS', img: 'Resources/hex-discord.png',   url: 'https://discord.gg/kZbrs5ys', desc: { ru: 'Сервер для общения и совместных затей. Заходи, не стесняйся.', en: 'A server for chatting and joint ideas. Come on in.' }, c1: '#6D79F5', c2: '#3a43b5' },
    { id: 'tiktok',    name: 'TikTok',    mono: 'TT', img: 'Resources/hex-tiktok.png',    url: 'https://www.tiktok.com/@de_lisov', desc: { ru: 'Короткие ролики: рисунки, процесс работы и немного закулисья.', en: 'Short clips: drawings, the work process and a bit of behind the scenes.' }, c1: '#2b2b2b', c2: '#FE2C55' },
    { id: 'steam',     name: 'Steam',     mono: 'ST', img: 'Resources/hex-steam.png',     url: 'https://steamcommunity.com/id/apollonsteam/', desc: { ru: 'Игровой профиль: библиотека, достижения и повод скооперироваться.', en: 'Gaming profile: library, achievements and a reason to team up.' }, c1: '#2a475e', c2: '#1b2838' },
    { id: 'instagram', name: 'Instagram', mono: 'IG', img: 'Resources/hex-instagram.png', url: 'https://www.instagram.com/vadim_de.lisov', desc: { ru: 'Визуальный дневник: рисунки, работы и кадры из жизни.', en: 'A visual diary: drawings, works and life snapshots.' }, c1: '#F58529', c2: '#C2297D' },
    { id: 'dotify',    name: 'Dotify',    mono: 'DT', img: 'Resources/hex-dotify.png',    url: 'https://t.me/nodotify_bot?start=invite_KB43VN', desc: { ru: 'Бот Dotify в Telegram. Открывай по приглашению и пробуй сам.', en: 'The Dotify bot in Telegram. Open it via the invite and try it yourself.' }, c1: '#22c55e', c2: '#0b6b32' }
  ],
  linkDesc: { ru: 'Здесь появится описание. Его можно заменить в index.js → CONFIG.links.', en: 'A description will appear here. Edit it in index.js → CONFIG.links.' },
  projects: [
    { img: 'Resources/project-01.png', url: 'https://github.com/mintlygit/Termimato', tags: ['Python', 'asyncio', 'CLI', 'PyPI'],
      name: { ru: 'Termimato', en: 'Termimato' },
      desc: { ru: 'Асинхронная библиотека для анимаций и визуальных эффектов в консоли: печатная машинка, сканер, глитч, спиннеры и прогресс-бары. Работает без блокировки потока, поддерживает True Color и градиенты, запускается на Linux, macOS, Windows и в Termux.', en: 'An async library for console animations and visual effects: typewriter, scanner, glitch, spinners and progress bars. Non-blocking, with True Color and gradients, runs on Linux, macOS, Windows and Termux.' } },
    { img: 'Resources/project-02.png', url: 'https://github.com/mintlygit/Async-Simple-Cache', tags: ['Python', 'asyncio', 'Redis', 'Cache'],
      name: { ru: 'Async Simple Cache', en: 'Async Simple Cache' },
      desc: { ru: 'Умный кэш для асинхронных функций с поддержкой TTL. Кэширование одним декоратором, ручное управление, автоочистка устаревших записей, статистика и два бэкенда: память и Redis.', en: 'A smart cache for async functions with TTL support. One-decorator caching, manual control, automatic cleanup of stale entries, stats and two backends: memory and Redis.' } },
    { img: 'Resources/project-03.png', url: 'https://github.com/mintlygit/Stenka-Bot---Telegram-', tags: ['Python', 'Telegram', 'Bot'],
      name: { ru: 'Stenka Bot', en: 'Stenka Bot' },
      desc: { ru: 'Telegram-бот на Python. Исходный код открыт на GitHub, там же можно посмотреть, как он устроен и что умеет.', en: 'A Telegram bot written in Python. The source is open on GitHub, where you can see how it works and what it can do.' } },
    { img: 'Resources/project-04.png', url: 'https://t.me/foxjiuc3', tags: ['Telegram', 'Community', 'Bot'],
      name: { ru: 'Fox Juice', en: 'Fox Juice' },
      desc: { ru: 'Telegram-форум из чатов для общения с пользовательским ботом: вопросы, идеи, обратная связь и просто компания по интересам.', en: 'A Telegram forum of chats for talking with the user bot: questions, ideas, feedback and a friendly crowd.' } },
    { img: 'Resources/project-05.png', url: 'https://github.com/mintlygit/Toch-IDE-TUI', tags: ['Python', 'Textual', 'TUI', 'Termux'],
      name: { ru: 'Toch IDE TUI', en: 'Toch IDE TUI' },
      desc: { ru: 'Быстрая и настраиваемая среда разработки прямо в терминале, заточенная под Termux на Android. Три панели, Zen Mode, темы, миникарта, встроенный терминал и мониторинг CPU и RAM.', en: 'A fast, customizable IDE that lives in your terminal, tuned for Termux on Android. Three panels, Zen Mode, themes, a minimap, a built-in terminal and live CPU and RAM monitoring.' } }
  ],
  gallery: { dir: 'Resources/', prefix: 'gallery-', exts: ['png', 'jpg', 'jpeg', 'webp'], max: 300 }
};

const BIO = {
  ru: "Привет! Я Вадим, в сети меня знают как Лисянского. Мне 21, живу в Новосибирске и пишу на Python: собираю Telegram- и Discord-ботов и автоматизирую всё, что скучно делать руками. Параллельно рисую интерфейсы и верстаю сайты. Для меня код — тот же холст: сначала идея и линии, потом цвет и движение. А когда экран гаснет, я беру карандаш и рисую по-настоящему. Заглядывай, поболтаем :3",
  en: "Hi! I'm Vadim, known online as Lisyanskiy. I'm 21, live in Novosibirsk and write Python: I build Telegram and Discord bots and automate everything too dull to do by hand. On the side I design interfaces and code websites. To me code is a canvas: first the idea and the lines, then colour and motion. And when the screen goes dark, I pick up a pencil and draw for real. Drop by, let's chat :3",
  lang: { ru: 'Языки: русский — родной, английский — разговорный', en: 'Languages: Russian — native, English — conversational' }
};

const BRANCHES = [
  { ang: -140, ru: 'Системные характеристики', en: 'System specs', leaves: [
    { k: { ru: 'Процессор', en: 'CPU' }, v: 'AMD Ryzen 7 7800X3D' },
    { k: { ru: 'Видеокарты', en: 'GPUs' }, v: 'MSI + Palit RTX 5070 Dual' },
    { k: { ru: 'Память / плата', en: 'RAM / board' }, v: '128 GB · X670E' },
    { k: { ru: 'Мышь', en: 'Mouse' }, v: 'Logitech G Pro X Superlight 2' },
    { k: { ru: 'Клавиатура', en: 'Keyboard' }, v: 'Wooting 80HE' },
    { k: { ru: 'Монитор', en: 'Monitor' }, v: 'ASUS ROG Swift OLED 27"' },
    { k: { ru: 'Гарнитура', en: 'Headset' }, v: 'SteelSeries Arctis Nova Pro' }
  ] },
  { ang: -40, ru: 'Навыки', en: 'Skills', leaves: [
    { k: 'Python', v: 'Senior' },
    { k: { ru: 'Графика', en: 'Graphics' }, v: 'After Effects' },
    { k: { ru: 'Графика', en: 'Graphics' }, v: 'Adobe Photoshop' },
    { k: 'Web', v: { ru: 'Web-дизайнер', en: 'Web designer' } },
    { k: 'Web', v: { ru: 'Web-разработчик', en: 'Web developer' } },
    { k: 'Artist', v: { ru: 'Художник', en: 'Painter' } },
    { k: 'Artist', v: { ru: 'Аниматор', en: 'Animator' } }
  ] },
  { ang: 40, ru: 'Связи', en: 'Contacts', leaves: CONFIG.telegram.map(t => ({ k: 'Telegram', v: t.name, s: t.role, url: t.url })) },
  { ang: 140, ru: 'Места работы', en: 'Workplaces', leaves: [
    { k: { ru: '08.2026 – н. в.', en: '08.2026 – now' }, v: { ru: '11 больница', en: 'Hospital No. 11' }, s: { ru: 'Работа секрет', en: 'Classified' } },
    { k: { ru: '03.2024 – н. в.', en: '03.2024 – now' }, v: { ru: 'Самозанятый', en: 'Self-employed' }, s: { ru: 'Производство Telegram-ботов', en: 'Telegram bot production' } },
    { k: '01.2026 – 07.2026', v: { ru: 'Мегафон', en: 'MegaFon' }, s: { ru: 'Директор точки продаж', en: 'Sales point director' } },
    { k: '07.2025 – 12.2025', v: { ru: 'Мегафон', en: 'MegaFon' }, s: { ru: 'Территориальный менеджер', en: 'Territory manager' } },
    { k: '01.2025 – 06.2025', v: { ru: 'Мегафон', en: 'MegaFon' }, s: { ru: 'Менеджер по продажам', en: 'Sales manager' } },
    { k: '11.2024 – 12.2024', v: { ru: 'Маяк — «Тихое море»', en: 'Mayak — “Quiet Sea”' }, s: { ru: 'Вахта, 2 месяца', en: 'Rotation, 2 months' } },
    { k: '08.2024 – 10.2024', v: { ru: 'Бийск, военный завод', en: 'Biysk, military plant' }, s: { ru: 'Вахта, 3 месяца', en: 'Rotation, 3 months' } },
    { k: '06.2024 – 07.2024', v: { ru: 'Подольск, склад СДТ', en: 'Podolsk, SDT warehouse' }, s: { ru: 'Склад детских игрушек, вахта, 2 месяца', en: "Children's toys warehouse, rotation, 2 months" } },
    { k: '03.2024 – 05.2024', v: { ru: 'Москва, склад Яндекс', en: 'Moscow, Yandex warehouse' }, s: { ru: 'Вахта, 3 месяца', en: 'Rotation, 3 months' } },
    { k: '03.2023 – 02.2024', v: "Rostic's", s: { ru: 'Менеджер, работа точки', en: 'Manager, outlet operations' } }
  ] }
];

const SHOP = [
  { ic: 'Py', t: { ru: 'ИИ, боты и автоматизация на Python', en: 'AI, bots & Python automation' },
    s: { ru: 'Боты, ИИ-помощники, парсеры, скрипты', en: 'Bots, AI assistants, parsers, scripts' }, items: [
    { n: { ru: 'Telegram-бот (простой)', en: 'Telegram bot (simple)' }, d: { ru: 'Меню, команды, ответы, деплой на сервер', en: 'Menu, commands, replies, server deploy' }, p: 5000 },
    { n: { ru: 'Telegram-бот с оплатой и админкой', en: 'Telegram bot with payments & admin panel' }, d: { ru: 'База данных, платежи, рассылки, панель управления', en: 'Database, payments, mailings, control panel' }, p: 18000 },
    { n: { ru: 'Discord-бот', en: 'Discord bot' }, d: { ru: 'Модерация, роли, музыка, слэш-команды', en: 'Moderation, roles, music, slash commands' }, p: 6000 },
    { n: { ru: 'ИИ-ассистент для бизнеса', en: 'AI assistant for business' }, d: { ru: 'Чат-бот на нейросети с вашей базой знаний', en: 'Neural-network chatbot with your knowledge base' }, p: 25000 },
    { n: { ru: 'Парсер данных', en: 'Data parser' }, d: { ru: 'Сбор данных с сайтов в таблицу или базу', en: 'Collects site data into a table or database' }, p: 4000 },
    { n: { ru: 'Автоматизация рутины', en: 'Routine automation' }, d: { ru: 'Скрипты для отчётов, Excel, файлов и почты', en: 'Scripts for reports, Excel, files and email' }, p: 3000 },
    { n: { ru: 'Интеграции и API', en: 'Integrations & APIs' }, d: { ru: 'Связка сервисов, вебхуки, свой API', en: 'Service links, webhooks, custom API' }, p: 5000 }
  ] },
  { ic: 'Ds', t: { ru: 'Веб-дизайн', en: 'Web design' },
    s: { ru: 'Макеты, интерфейсы и графика', en: 'Layouts, interfaces and graphics' }, items: [
    { n: { ru: 'Дизайн лендинга', en: 'Landing page design' }, d: { ru: 'Макет одной страницы в Figma с адаптивом', en: 'One-page Figma layout with responsive versions' }, p: 7000 },
    { n: { ru: 'Дизайн многостраничного сайта', en: 'Multi-page website design' }, d: { ru: 'Макеты всех страниц и состояния элементов', en: 'Every page plus element states' }, p: 15000 },
    { n: { ru: 'UI-кит и дизайн-система', en: 'UI kit & design system' }, d: { ru: 'Цвета, шрифты, кнопки и компоненты', en: 'Colors, fonts, buttons and components' }, p: 12000 },
    { n: { ru: 'Редизайн существующего сайта', en: 'Website redesign' }, d: { ru: 'Новый облик с сохранением вашего контента', en: 'A fresh look that keeps your content' }, p: 8000 },
    { n: { ru: 'Баннеры и превью', en: 'Banners & thumbnails' }, d: { ru: 'Графика для соцсетей и каналов', en: 'Graphics for socials and channels' }, p: 1500 }
  ] },
  { ic: 'Web', t: { ru: 'Создание сайтов', en: 'Website development' },
    s: { ru: 'Вёрстка, анимации и запуск', en: 'Markup, animation and launch' }, items: [
    { n: { ru: 'Лендинг под ключ', en: 'Landing page, turnkey' }, d: { ru: 'Дизайн, вёрстка, анимации, публикация', en: 'Design, markup, animation, publishing' }, p: 12000 },
    { n: { ru: 'Сайт-визитка или портфолио', en: 'Business card or portfolio site' }, d: { ru: 'Несколько блоков с анимациями на GSAP', en: 'Several blocks with GSAP animation' }, p: 20000 },
    { n: { ru: 'Интернет-магазин', en: 'Online store' }, d: { ru: 'Каталог, корзина, заявки и оплата', en: 'Catalog, cart, orders and payment' }, p: 45000 },
    { n: { ru: 'Вёрстка по макету', en: 'Markup from a design' }, d: { ru: 'Точная адаптивная вёрстка вашего макета', en: 'Pixel-accurate responsive markup' }, p: 6000 },
    { n: { ru: 'Анимации для готового сайта', en: 'Animations for an existing site' }, d: { ru: 'Появления, переходы, эффекты при прокрутке', en: 'Reveals, transitions, scroll effects' }, p: 5000 },
    { n: { ru: 'Поддержка и правки', en: 'Support & edits' }, d: { ru: 'Доработки и исправления по часам', en: 'Hourly fixes and improvements' }, p: 1500, per: true }
  ] }
];

/* ====================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(pointer:fine)').matches;
const NS = 'http://www.w3.org/2000/svg';
const rnd = (a, b) => a + Math.random() * (b - a);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const HEX = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
const RECT = 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%, 0% 0%)';

let lang = 'ru';
try { lang = localStorage.getItem('lang') || ((navigator.language || 'ru').toLowerCase().startsWith('ru') ? 'ru' : 'en'); } catch (e) {}

function h(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
function T(el, ru, en) { el.dataset.ru = ru; el.dataset.en = en == null ? ru : en; el.textContent = lang === 'ru' ? el.dataset.ru : el.dataset.en; return el; }
function TX(el, v) { return typeof v === 'string' ? T(el, v, v) : T(el, v.ru, v.en); }
function applyLang() {
  document.documentElement.lang = lang;
  $$('[data-ru]').forEach(el => { el.textContent = el.dataset[lang] != null ? el.dataset[lang] : el.dataset.ru; });
}
function withImg(box, src, cls = '', alt = '') {
  const im = new Image(); im.alt = alt;
  im.onload = () => { im.className = cls; box.append(im); box.classList.add('has-img'); };
  im.src = src; return im;
}
/* пробует расширения по очереди: берёт первый файл, который найдётся */
function withImgAny(box, base, exts, cls = '', alt = '') {
  let i = 0; const im = new Image(); im.alt = alt; im.decoding = 'async';
  im.onload = () => { im.className = cls; box.append(im); box.classList.add('has-img'); };
  im.onerror = () => { if (++i < exts.length) im.src = base + '.' + exts[i]; };
  im.src = base + '.' + exts[0]; return im;
}
const FOX = '<svg class="ph" viewBox="0 0 64 64"><rect width="64" height="64" fill="#FFC857"/><path d="M8 10l16 12h16l16-12 2 28c0 12-11 20-26 20S6 50 6 38z" fill="#F08A24"/><path d="M12 14l9 8-5 6zM52 14l-9 8 5 6z" fill="#8a3d10"/><path d="M32 58c-9 0-15-5-17-12 6 3 11 2 17-4 6 6 11 7 17 4-2 7-8 12-17 12z" fill="#FFF3DC"/><circle cx="24" cy="36" r="2.6" fill="#2b1608"/><circle cx="40" cy="36" r="2.6" fill="#2b1608"/><path d="M29 44h6l-3 4z" fill="#2b1608"/></svg>';

/* ============================ ТЕМА, ЭФФЕКТЫ ============================ */
let theme = 'dark';
try { theme = localStorage.getItem('theme') || 'dark'; } catch (e) {}
const SUN = '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>';
const MOON = '<path d="M20 14.5A8.5 8.5 0 019.5 4 8.5 8.5 0 1020 14.5z"/>';
function applyTheme(t) {
  theme = t; document.documentElement.dataset.theme = t;
  try { localStorage.setItem('theme', t); } catch (e) {}
  $('meta[name=theme-color]').content = t === 'light' ? '#f3f3f0' : '#000000';
  const s = $('#thTxt'); s.dataset.ru = t === 'light' ? 'Тёмная тема' : 'Светлая тема'; s.dataset.en = t === 'light' ? 'Dark theme' : 'Light theme';
  s.textContent = s.dataset[lang]; $('#thIc').innerHTML = t === 'light' ? MOON : SUN;
}
/* пиксельный переход: клетки закрывают экран, внутри — смена, затем открывают */
const PX = { cells: [] };
function pxBuild() {
  const o = $('#px');
  for (let i = 0; i < 160; i++) { const c = h('i', i % 9 === 4 ? 'w' : ''); o.append(c); PX.cells.push(c); }
}
function pxSwap(mid) {
  if (RM) { mid(); return Promise.resolve(); }
  return new Promise(res => {
    const tl = gsap.timeline({ onComplete: res });
    tl.set('#px', { display: 'grid' }).set(PX.cells, { opacity: 0 });
    tl.to(PX.cells, { opacity: 1, duration: .01, stagger: { amount: .28, from: 'random' } });
    tl.add(mid);
    tl.to(PX.cells, { opacity: 0, duration: .01, stagger: { amount: .34, from: 'random' } }, '+=.05');
    tl.set('#px', { display: 'none' });
  });
}
/* «расшифровка» текста */
const SCR = '01#+*=/<>_-';
function scramble(el, dur = .45) {
  if (RM || !el) return;
  const hasD = el.dataset.ru != null;
  if (!hasD && !(el._sc && el._sc.isActive())) el._o = el.textContent;
  const fin = () => hasD ? (el.dataset[lang] != null ? el.dataset[lang] : el.dataset.ru) : el._o;
  const t = fin(); if (!t || !t.trim()) return;
  if (el._sc) el._sc.kill();
  const o = { p: 0 };
  el._sc = gsap.to(o, { p: 1, duration: dur, ease: 'none',
    onUpdate() { const k = Math.floor(o.p * t.length); el.textContent = t.slice(0, k) + [...t.slice(k)].map(c => c === ' ' ? ' ' : SCR[Math.random() * SCR.length | 0]).join(''); },
    onComplete() { el.textContent = fin(); } });
}
function spark(x, y, n, burst) {
  for (let i = 0; i < n; i++) {
    const p = h('i', 'sp'), s = Math.round(rnd(3, burst ? 8 : 5));
    p.style.cssText = `left:${x}px;top:${y}px;width:${s}px;height:${s}px`; document.body.append(p);
    gsap.to(p, { x: burst ? rnd(-60, 60) : rnd(-8, 8), y: burst ? rnd(-60, 60) : rnd(6, 26), opacity: 0, duration: burst ? .6 : .7, ease: 'steps(6)', onComplete: () => p.remove() });
  }
}
const TK = "LISYANSKIY  +  PYTHON  +  WEB DESIGN  +  BOTS  +  AUTOMATION  +  NOVOSIBIRSK  +  ";
function buildFX() {
  $('#ticker .tk').innerHTML = ('<span>' + TK.repeat(3) + '</span>').repeat(2);
  const mb = $('#tgMenuBtn'), mn = $('#tgMenu');
  mb.onclick = e => { e.stopPropagation(); const open = mn.hidden; mn.hidden = !open; mb.setAttribute('aria-expanded', open); if (open && !RM) gsap.fromTo(mn, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: .3, ease: 'steps(5)', clearProps: 'clipPath' }); };
  document.addEventListener('click', () => { mn.hidden = true; mb.setAttribute('aria-expanded', false); });
  $('#themeBtn').onclick = () => pxSwap(() => applyTheme(theme === 'light' ? 'dark' : 'light'));
  const pick = e => {
    const el = e.target.closest && e.target.closest('.btn,.kb button:not(:disabled),.nd.br,.pill-btn,.nz-h,.tg-menu button');
    if (!el || (e.relatedTarget && el.contains(e.relatedTarget))) return;
    const t = el.matches('.nz-h') ? $('.nz-t>span', el) : el.childElementCount === 0 ? el : $('span', el);
    scramble(t, .4);
  };
  document.addEventListener('pointerover', pick);
  if (!FINE || RM) return;
  document.body.classList.add('fx');
  const dot = h('div', 'cur-dot'), ring = h('div', 'cur-ring', '<i></i>'); document.body.append(ring, dot);
  const dx = gsap.quickTo(dot, 'x', { duration: .06 }), dy = gsap.quickTo(dot, 'y', { duration: .06 });
  const rx = gsap.quickTo(ring, 'x', { duration: .3, ease: 'power3' }), ry = gsap.quickTo(ring, 'y', { duration: .3, ease: 'power3' });
  let lx = -99, ly = -99;
  addEventListener('pointermove', e => {
    dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
    ring.classList.toggle('on', !!(e.target.closest && e.target.closest('a,button,.hex,.g-it,.nd,.pj,.nz,.it')));
    if (Math.hypot(e.clientX - lx, e.clientY - ly) > 28) { lx = e.clientX; ly = e.clientY; spark(lx, ly, 1); }
  });
  addEventListener('pointerdown', e => spark(e.clientX, e.clientY, 9, true));
}

/* ============================ ДЕКОР ============================ */
const WIRE = sw => `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linejoin="round"><path d="M50 5L91 27.5V72.5L50 95L9 72.5V27.5Z"/><path d="M9 27.5L50 50L91 27.5M50 50V95"/></svg>`;
const SOLID = '<svg viewBox="0 0 100 100" fill="currentColor"><path d="M50 5L91 27.5L50 50L9 27.5Z"/><path d="M9 27.5L50 50V95L9 72.5Z" opacity=".35"/><path d="M91 27.5L50 50V95L91 72.5Z" opacity=".65"/></svg>';
const PLUS = '<svg viewBox="0 0 30 30" fill="currentColor" shape-rendering="crispEdges"><path d="M10 0h10v10h10v10H20v10H10V20H0V10h10z"/></svg>';
const LOGOS = [{ k: 'python', t: 'Py' }, { k: 'telegram', t: 'TG' }, { k: 'html', t: '</>' }, { k: 'js', t: 'JS' }];
function buildDecor() {
  const d = $('#decor'), add = (html, s, op, drift, rot, cls) => {
    const el = h('div', 'dc' + (cls || ''), html);
    el.style.cssText = `left:${rnd(0, 97)}%;top:${rnd(0, 95)}%;width:${s}px;height:${s}px;opacity:${op}` + (cls ? `;animation-delay:${rnd(0, 2).toFixed(2)}s` : '');
    d.append(el);
    if (!RM) gsap.to(el, { x: rnd(-drift, drift), y: rnd(-drift, drift), rotation: rnd(-rot, rot), duration: rnd(8, 16), repeat: -1, yoyo: true, ease: 'sine.inOut' });
  };
  for (let i = 0; i < 8; i++) add(WIRE(rnd(2, 3.5)), rnd(56, 150), rnd(.14, .34), 70, 14);
  for (let i = 0; i < 30; i++) add(SOLID, rnd(8, 20), rnd(.25, .65), 50, 0);
  for (let i = 0; i < 7; i++) add(PLUS, rnd(12, 22), rnd(.25, .5), 40, 0, ' bl');
  const l = $('#logos');
  for (let i = 0; i < 8; i++) {
    const def = LOGOS[i % 4], s = rnd(80, 150);
    const el = h('div', 'lg', `<svg viewBox="0 0 100 100"><polygon points="50,4 93,27 93,73 50,96 7,73 7,27" fill="none" stroke="currentColor" stroke-width="2"/><text x="50" y="58" text-anchor="middle" font-size="18" font-family="Press Start 2P,monospace" fill="currentColor">${def.t.replace('<', '&lt;').replace('>', '&gt;')}</text></svg>`);
    el.style.cssText = `left:${rnd(-2, 94)}%;top:${rnd(-2, 90)}%;width:${s}px;height:${s}px;opacity:${rnd(.12, .26)}`;
    l.append(el);
    const im = new Image(); im.onload = () => { el.innerHTML = ''; el.append(im); }; im.src = `Resources/logo-${def.k}.png`;
    if (!RM) gsap.to(el, { x: rnd(-120, 120), y: rnd(-100, 100), duration: rnd(10, 20), repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }
  gsap.fromTo(['#decor', '#logos'], { opacity: 0 }, { opacity: 1, duration: 1.4, ease: 'steps(8)' });
}

/* ============================ НАВИГАЦИЯ ============================ */
const secs = $$('.sec');
let cur = -1, busy = false, unlocked = false, lastInner = 0;
const hooks = [enterChat, enterHive, enterGraph, enterProj, enterGal, enterShop];
const leaves = { 4: leaveGal };

function goTo(i) {
  if (i === cur || busy || i < 0 || i >= secs.length) return;
  busy = true;
  const dir = i > cur ? 1 : -1, from = secs[cur], to = secs[i], prev = cur;
  cur = i;
  if (leaves[prev]) leaves[prev]();
  const enter = () => { hooks[i](dir); $$('.sec-title span', to).forEach(t => scramble(t, .7)); };
  if (from) pxSwap(() => { gsap.set(from, { autoAlpha: 0 }); gsap.set(to, { autoAlpha: 1, yPercent: 0, scale: 1 }); enter(); }).then(() => { busy = false; });
  else { gsap.fromTo(to, { autoAlpha: 0, yPercent: 0, scale: 1 }, { autoAlpha: 1, duration: .5, ease: 'steps(6)', onComplete: () => { busy = false; } }); enter(); }
  gsap.to('#decor', { yPercent: -5 * i, duration: 1.2, ease: 'power3.out' });
  gsap.to('#logos', { yPercent: -9 * i, duration: 1.4, ease: 'power3.out' });
  updateUI();
}
function unlock() { unlocked = true; updateUI(); }
function updateUI() {
  const vl = $('#vlabel'); if (vl && cur >= 0) vl.textContent = String(cur + 1).padStart(2, '0') + ' / ' + String(secs.length).padStart(2, '0') + '   ' + (lang === 'ru' ? secs[cur].dataset.nameRu : secs[cur].dataset.nameEn);
  $('#back').hidden = cur <= 0;
  const d = $('#dots'); d.hidden = !unlocked || cur < 0;
  $$('button', d).forEach((b, i) => b.classList.toggle('on', i === cur));
}
function scroller(el) { return el && el.closest ? el.closest('.scroll') : null; }
function canMove(el, dir) {
  const s = scroller(el); if (!s || s.scrollHeight <= s.clientHeight + 2) return true;
  return dir > 0 ? s.scrollTop + s.clientHeight >= s.scrollHeight - 2 : s.scrollTop <= 1;
}
function bindNav() {
  document.addEventListener('scroll', () => { lastInner = Date.now(); }, true);
  let acc = 0, last = 0;
  addEventListener('wheel', e => {
    if (!unlocked || busy || Date.now() - lastInner < 220 || $('#lightbox').hidden === false) return;
    const dir = Math.sign(e.deltaY); if (!dir || !canMove(e.target, dir)) return;
    if (Date.now() - last > 250) acc = 0; last = Date.now(); acc += e.deltaY;
    if (Math.abs(acc) > 40) { acc = 0; goTo(cur + dir); }
  }, { passive: true });
  let sy = 0, st = 0, tgt = null;
  addEventListener('touchstart', e => { sy = e.touches[0].clientY; tgt = e.target; const s = scroller(tgt); st = s ? s.scrollTop : 0; }, { passive: true });
  addEventListener('touchend', e => {
    if (!unlocked || busy) return;
    const dy = sy - e.changedTouches[0].clientY; if (Math.abs(dy) < 70) return;
    const s = scroller(tgt); if (s && s.scrollHeight > s.clientHeight + 2 && Math.abs(s.scrollTop - st) > 2) return;
    const dir = Math.sign(dy); if (canMove(tgt, dir)) goTo(cur + dir);
  }, { passive: true });
  addEventListener('keydown', e => {
    if (!unlocked) return;
    if (['ArrowDown', 'PageDown'].includes(e.key)) goTo(cur + 1);
    if (['ArrowUp', 'PageUp'].includes(e.key)) goTo(cur - 1);
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ============================ ЧАТ ============================ */
const MSG = {
  hello: { ru: 'Привет! Я вижу ты зашёл на сайт) Скажи, что ты хочешь посмотреть?', en: "Hi! I see you've dropped by the site :) Tell me, what would you like to see?" },
  again: { ru: 'Что хочешь посмотреть?', en: 'What do you want to see?' }
};
const OPTS = [
  { go: 1, unlock: true, ru: 'А) Я осмотрюсь сам', en: "A) I'll look around myself",
    ans: { ru: 'Отлично! Осматривайся: листай блоки колесом, свайпом или кнопками сбоку.', en: 'Great! Look around: scroll through the blocks with the wheel, a swipe or the side buttons.' } },
  { go: 1, ru: 'Б) Важные ссылки', en: 'B) Important links',
    ans: { ru: 'Держи, здесь все мои важные ссылки!', en: 'Here you go, all my important links!' } },
  { go: 3, ru: 'В) Мои проекты', en: 'C) My projects',
    ans: { ru: 'Сейчас покажу, над чем я работаю!', en: "Let me show you what I'm working on!" } },
  { go: 4, ru: 'Г) Галерея', en: 'D) Gallery',
    ans: { ru: 'Загляни в мою галерею!', en: 'Take a look at my gallery!' } },
  { go: 5, ru: 'Д) Магазин', en: 'E) Shop',
    ans: { ru: 'Заходи в магазин, там услуги на любой вкус!', en: 'Come into the shop, there are services for every need!' } }
];
const CHECKS = '<svg width="16" height="11" viewBox="0 0 16 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6l3 3 6-7M6 8l1 1 6-7"/></svg>';
const stream = $('#stream');
let chatStarted = false, chatBusy = false;

const now = () => { const d = new Date(); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); };
function scrollDown() { requestAnimationFrame(() => stream.scrollTo({ top: stream.scrollHeight, behavior: 'smooth' })); }
function setTyping(on) {
  $('#tgStatus').classList.toggle('typing', on);
  T($('#tgStatusTxt'), on ? 'печатает' : 'в сети', on ? 'typing' : 'online');
}
function bubble(kind, m) {
  const b = h('div', 'msg ' + kind); const s = h('span'); T(s, m.ru, m.en); b.append(s);
  b.append(h('span', 'meta', now() + (kind === 'out' ? CHECKS : '')));
  stream.append(b);
  gsap.from(b, { clipPath: kind === 'in' ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)', y: 8, duration: .45, ease: 'steps(9)', clearProps: 'clipPath,transform' });
  scrollDown(); return b;
}
async function botSay(m, withKb) {
  setTyping(true);
  const tb = h('div', 'msg in typing-b', '<i></i><i></i><i></i>'); stream.append(tb);
  gsap.from(tb, { opacity: 0, scale: .6, transformOrigin: '0% 100%', duration: .3 }); scrollDown();
  await sleep(clamp(500 + m.ru.length * 18, 700, 1700));
  tb.remove(); setTyping(false);
  const b = bubble('in', m);
  if (withKb) {
    const kb = h('div', 'kb');
    OPTS.forEach(o => { const btn = h('button'); btn.type = 'button'; T(btn, o.ru, o.en); btn.onclick = () => choose(o, kb, btn); kb.append(btn); });
    stream.append(kb);
    gsap.fromTo(kb.children, { opacity: 0, y: 14 }, { opacity: 1, y: 0, stagger: .08, delay: .25, duration: .4, ease: 'power2.out' });
    scrollDown();
  }
  return b;
}
async function choose(o, kb, btn) {
  if (chatBusy) return; chatBusy = true;
  $$('button', kb).forEach(b => b.disabled = true); btn.classList.add('chosen');
  const strip = s => s.replace(/^[^)]*\)\s*/, '');
  bubble('out', { ru: strip(o.ru), en: strip(o.en) });
  await sleep(450); await botSay(o.ans); await sleep(900);
  if (o.unlock) unlock();
  chatBusy = false; goTo(o.go);
}
function enterChat() {
  if (chatBusy) return;
  if (!chatStarted) { chatStarted = true; chatBusy = true; botSay(MSG.hello, true).then(() => { chatBusy = false; }); return; }
  if (stream.querySelector('.kb button:not(:disabled)')) return;
  chatBusy = true; botSay(MSG.again, true).then(() => { chatBusy = false; });
}

/* ============================ СОТЫ ============================ */
const hive = { stage: $('#hiveStage'), items: [], center: null, open: null, busy: false, d: null };
const DIRS = [[0, -1], [1, -1], [1, 0], [0, 1], [-1, 1], [-1, 0]];
function buildHive() {
  hive.items = CONFIG.links.map((l, i) => {
    const el = h('button', 'hex'); el.type = 'button'; el.setAttribute('aria-label', l.name);
    el.innerHTML = `<span class="ph" style="--c1:${l.c1};--c2:${l.c2}"><span class="mono">${l.mono}</span><b>${l.name}</b></span>`;
    withImg(el, l.img, 'hx', l.name);
    el.onclick = () => openHex(i);
    if (FINE) {
      el.onmouseenter = () => { if (hive.open === null) gsap.to(el, { scale: 1.08, duration: .3, ease: 'power3.out' }); };
      el.onmouseleave = () => { if (hive.open === null) gsap.to(el, { scale: 1, duration: .3 }); };
    }
    hive.stage.prepend(el);
    return { el, data: l, home: null, bob: null };
  });
  const c = h('div', 'hex center'); c.innerHTML = '<span class="ph" style="--c1:#1E4A26;--c2:#2f6b38"><span class="mono">DL</span></span>';
  withImg(c, 'Resources/me.png', 'hx', ''); hive.stage.prepend(c); hive.center = c;
  $('#hdBack').onclick = () => closeHex();
}
function layoutHive() {
  const w = hive.stage.clientWidth, hh = hive.stage.clientHeight;
  const s = Math.max(40, Math.min(w * .92 / 5.2, hh * .92 / 5, 125));
  const hw = Math.sqrt(3) * s * .96, hgt = 2 * s * .96; hive.d = { w, h: hh, s, hw, hgt };
  const place = (el, q, r) => {
    const x = s * Math.sqrt(3) * (q + r / 2), y = s * 1.5 * r;
    const home = { left: w / 2 + x - hw / 2, top: hh / 2 + y - hgt / 2, width: hw, height: hgt };
    gsap.set(el, { ...home, clipPath: HEX, borderRadius: 0 }); return home;
  };
  hive.items.forEach((it, i) => { it.home = place(it.el, DIRS[i][0], DIRS[i][1]); });
  hive.center.home = place(hive.center, 0, 0);
  if (w < 760) gsap.set('.hd', { left: '6%', right: '6%', top: '42%' }); else gsap.set('.hd', { clearProps: 'left,right,top' });
}
function startBobs() {
  if (RM) return;
  hive.items.forEach(it => { it.bob && it.bob.kill(); it.bob = gsap.fromTo(it.el, { y: -4 }, { y: 4, duration: rnd(2.2, 3.4), repeat: -1, yoyo: true, ease: 'sine.inOut' }); });
}
function stopBobs() { hive.items.forEach(it => { it.bob && it.bob.kill(); it.bob = null; }); }
function resetHive() {
  const all = hive.items.map(i => i.el).concat(hive.center);
  gsap.killTweensOf(all.concat('#hdIn')); stopBobs();
  hive.items.forEach(it => it.el.classList.remove('card')); hive.items.forEach(it => { it.el.style.zIndex = ''; });
  hive.open = null; hive.busy = false;
  gsap.set('#hdIn', { autoAlpha: 0 }); layoutHive();
  gsap.set(all, { scale: 1, y: 0, rotation: 0, autoAlpha: 1 });
}
function openHex(i) {
  if (hive.busy || hive.open !== null) return;
  hive.busy = true; hive.open = i;
  const it = hive.items[i], d = hive.d, mob = d.w < 760;
  stopBobs(); gsap.set(it.el, { y: 0 });
  const l = it.data;
  $('#hdName').textContent = l.name; TX($('#hdDesc'), l.desc || CONFIG.linkDesc); $('#hdGo').href = l.url;
  it.el.classList.add('card'); it.el.style.zIndex = 5;
  const cw = mob ? Math.min(d.w * .5, 190) : Math.min(d.w * .3, 330);
  const ch = mob ? cw * 1.05 : Math.min(d.h * .78, cw * 1.25);
  const tx = mob ? d.w * .06 : d.w * .06, ty = mob ? d.h * .01 : (d.h - ch) / 2;
  const tl = gsap.timeline({ onComplete: () => { hive.busy = false; } });
  hive.items.forEach((o, j) => { if (j !== i) tl.to(o.el, { scale: 0, autoAlpha: 0, duration: .45, ease: 'power3.in' }, j * .03); });
  tl.to(hive.center, { scale: 0, autoAlpha: 0, duration: .4 }, 0);
  tl.to(it.el, { scale: 1, left: tx, top: ty, width: cw, height: ch, clipPath: RECT, borderRadius: 0, duration: .85, ease: 'power3.inOut' }, .3);
  tl.set(it.el, { clipPath: 'none' });
  tl.fromTo('#hdIn', { autoAlpha: 0, x: 50 }, { autoAlpha: 1, x: 0, duration: .65, ease: 'power3.out' }, '-=.35');
}
function closeHex() {
  if (hive.busy || hive.open === null) return;
  hive.busy = true; const it = hive.items[hive.open];
  const tl = gsap.timeline({ onComplete: () => {
    it.el.classList.remove('card'); it.el.style.zIndex = ''; hive.open = null; hive.busy = false; startBobs();
  } });
  tl.to('#hdIn', { autoAlpha: 0, x: 40, duration: .3 });
  tl.set(it.el, { clipPath: RECT });
  tl.to(it.el, { ...it.home, clipPath: HEX, borderRadius: 0, duration: .75, ease: 'power3.inOut' });
  const others = hive.items.filter(o => o !== it).map(o => o.el).concat(hive.center);
  tl.to(others, { scale: 1, autoAlpha: 1, duration: .5, ease: 'power3.out', stagger: .05 }, '-=.35');
}
function enterHive() {
  resetHive();
  const all = hive.items.map(i => i.el).concat(hive.center);
  const ord = gsap.utils.shuffle([...all]);
  gsap.fromTo(ord, { scale: .4, y: 40 }, { scale: 1, y: 0, duration: .7, ease: 'power3.out', stagger: .09, onComplete: startBobs });
  gsap.fromTo(ord, { autoAlpha: 0 }, { autoAlpha: 1, duration: .5, ease: 'steps(5)', stagger: .09 });
}

/* ============================ ГРАФ ============================ */
const GR = { stage: $('#grStage'), svg: $('#grSvg'), me: null, br: [], open: false, active: null };
function txt(tag, v) { const e = h(tag); TX(e, v); return e; }
function buildGraph() {
  gsap.killTweensOf('.nd'); $$('.nd', GR.stage).forEach(n => n.remove()); GR.svg.innerHTML = '';
  GR.open = false; GR.active = null;
  const me = h('button', 'nd me'); me.type = 'button'; me.setAttribute('aria-label', 'Лисянский');
  me.innerHTML = '<span class="in"><span class="ph">DL</span></span>';
  withImg($('.in', me), 'Resources/me.png', '', '');
  const hint = h('span', 'me-hint'); T(hint, 'Нажми на меня', 'Tap me'); me.append(hint);
  GR.stage.append(me); gsap.set(me, { xPercent: -50, yPercent: -50 }); GR.me = me; me.onclick = toggleGraph;
  GR.br = BRANCHES.map((b, i) => {
    const el = h('button', 'nd br'); el.type = 'button'; T(el, b.ru, b.en); GR.stage.append(el);
    gsap.set(el, { xPercent: -50, yPercent: -50, autoAlpha: 0, scale: 0 });
    const line = document.createElementNS(NS, 'line'); line.style.opacity = 0; GR.svg.append(line);
    const o = { ...b, el, line, shown: [], pos: { x: 0, y: 0 } };
    el.onclick = () => toggleBranch(i); return o;
  });
}
function dims() { return { w: GR.stage.clientWidth, h: GR.stage.clientHeight }; }
function toggleGraph() {
  const { w, h: hh } = dims(), cx = w / 2, cy = hh / 2;
  if (!GR.open) {
    GR.open = true; gsap.to($('.me-hint', GR.me), { autoAlpha: 0, duration: .3 });
    const rx = Math.min(w * .3, 330), ry = Math.min(hh * .3, 190);
    GR.br.forEach((b, i) => {
      const a = b.ang * Math.PI / 180, pw = b.el.offsetWidth;
      const lim = w / 2 - pw / 2 - 8;
      b.pos = { x: clamp(Math.cos(a) * rx, -lim, lim), y: Math.sin(a) * ry };
      b.line.setAttribute('x1', cx); b.line.setAttribute('y1', cy);
      gsap.fromTo(b.line, { attr: { x2: cx, y2: cy }, opacity: 0 }, { attr: { x2: cx + b.pos.x, y2: cy + b.pos.y }, opacity: .7, duration: .7, delay: i * .08, ease: 'power3.out' });
      gsap.fromTo(b.el, { x: 0, y: 0, scale: 0, autoAlpha: 0 }, { x: b.pos.x, y: b.pos.y, scale: 1, autoAlpha: 1, duration: .8, delay: i * .08, ease: 'steps(9)' });
    });
  } else {
    GR.br.forEach(b => closeLeaves(b));
    GR.br.forEach((b, i) => {
      b.el.classList.remove('on', 'dim');
      gsap.to(b.el, { x: 0, y: 0, scale: 0, autoAlpha: 0, duration: .45, delay: i * .04, ease: 'power3.in' });
      gsap.to(b.line, { attr: { x2: cx, y2: cy }, opacity: 0, duration: .4 });
    });
    GR.open = false; GR.active = null;
    gsap.to($('.me-hint', GR.me), { autoAlpha: 1, duration: .3, delay: .4 });
  }
}
function toggleBranch(i) {
  const b = GR.br[i];
  GR.br.forEach(o => closeLeaves(o));
  if (GR.active === i) { GR.active = null; GR.br.forEach(o => o.el.classList.remove('on', 'dim')); return; }
  GR.active = i;
  GR.br.forEach((o, j) => { o.el.classList.toggle('on', j === i); o.el.classList.toggle('dim', j !== i); });
  openLeaves(b);
}
function sep(a, b, fa, fb) {
  const dx = b.x - a.x, dy = b.y - a.y, ox = (a.w + b.w) / 2 - Math.abs(dx), oy = (a.h + b.h) / 2 - Math.abs(dy);
  if (ox > 0 && oy > 0) {
    if (ox < oy) { const s = dx >= 0 ? 1 : -1; a.x -= s * ox * fa; b.x += s * ox * fb; }
    else { const s = dy >= 0 ? 1 : -1; a.y -= s * oy * fa; b.y += s * oy * fb; }
  }
}
function mkLeaf(d) {
  const el = d.url ? h('a', 'nd lf') : h('div', 'nd lf');
  if (d.url) { el.href = d.url; el.target = '_blank'; el.rel = 'noopener'; }
  el.append(txt('small', d.k), txt('b', d.v)); if (d.s) el.append(txt('small', d.s));
  GR.stage.append(el); gsap.set(el, { xPercent: -50, yPercent: -50, autoAlpha: 0 }); return el;
}
function openLeaves(b) {
  const { w, h: hh } = dims(), cx = w / 2, cy = hh / 2, bp = b.pos;
  const n = b.leaves.length, base = Math.atan2(bp.y, bp.x), spread = Math.min(3, .55 * n);
  const L = b.leaves.map(d => { const el = mkLeaf(d); return { el, bw: el.offsetWidth + 10, bh: el.offsetHeight + 8 }; });
  const obst = [{ x: 0, y: 0, w: GR.me.offsetWidth + 14, h: GR.me.offsetHeight + 14 }]
    .concat(GR.br.map(o => ({ x: o.pos.x, y: o.pos.y, w: o.el.offsetWidth + 12, h: o.el.offsetHeight + 10 })));
  const hit = (a, o) => Math.abs(a.x - o.x) < (a.w + o.w) / 2 - 2 && Math.abs(a.y - o.y) < (a.h + o.h) / 2 - 2;
  /* пробуем уложить карточки, при нехватке места уменьшаем; если и так не влезает — панель */
  const fit = k => {
    const P = L.map((l, i) => { const ang = base + (i - (n - 1) / 2) * (spread / Math.max(1, n - 1)); return { x: bp.x + Math.cos(ang) * 150, y: bp.y + Math.sin(ang) * 150, w: l.bw * k, h: l.bh * k }; });
    for (let it = 0; it < 160; it++) {
      P.forEach(a => {
        obst.forEach(o => sep(a, o, 1, 0));
        a.x = clamp(a.x, -w / 2 + a.w / 2 + 4, w / 2 - a.w / 2 - 4);
        a.y = clamp(a.y, -hh / 2 + a.h / 2 + 4, hh / 2 - a.h / 2 - 4);
      });
      for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) sep(P[i], P[j], .5, .5);
    }
    return P.some((a, i) => obst.some(o => hit(a, o)) || P.some((c, j) => j > i && hit(a, c))) ? null : P;
  };
  let P = null, k = 1;
  for (k of [1, .88, .78, .68]) { P = fit(k); if (P) break; }
  if (!P) { L.forEach(l => l.el.remove()); return openPanel(b); }
  b.shown = P.map((l, i) => {
    const line = document.createElementNS(NS, 'line');
    line.setAttribute('x1', cx + bp.x); line.setAttribute('y1', cy + bp.y); GR.svg.append(line);
    gsap.fromTo(line, { attr: { x2: cx + bp.x, y2: cy + bp.y }, opacity: 0 }, { attr: { x2: cx + l.x, y2: cy + l.y }, opacity: .55, duration: .6, delay: i * .04, ease: 'steps(10)' });
    gsap.fromTo(L[i].el, { x: bp.x, y: bp.y, scale: .2, autoAlpha: 0 }, { x: l.x, y: l.y, scale: k, autoAlpha: 1, duration: .65, delay: i * .05, ease: 'steps(10)' });
    return { el: L[i].el, line };
  });
}
function openPanel(b) {
  const { h: hh } = dims(), i = GR.br.indexOf(b);
  const p = h('div', 'nd lf-panel scroll'), hd = h('div', 'lp-h'), x = h('button', '', '×');
  x.type = 'button'; x.setAttribute('aria-label', 'Close'); x.onclick = () => toggleBranch(i);
  hd.append(txt('span', { ru: b.ru, en: b.en }), x);
  const list = h('div', 'lp-list');
  b.leaves.forEach(d => { const el = d.url ? h('a', 'lf') : h('div', 'lf'); if (d.url) { el.href = d.url; el.target = '_blank'; el.rel = 'noopener'; } el.append(txt('small', d.k), txt('b', d.v)); if (d.s) el.append(txt('small', d.s)); list.append(el); });
  p.append(hd, list); p.style.maxHeight = (hh - 16) + 'px'; GR.stage.append(p);
  gsap.set(p, { xPercent: -50, yPercent: -50 });
  gsap.fromTo(p, { autoAlpha: 0, clipPath: 'inset(0 0 100% 0)' }, { autoAlpha: 1, clipPath: 'inset(0 0 0% 0)', duration: .5, ease: 'steps(8)' });
  b.shown = [{ el: p, line: null }];
}
function closeLeaves(b) {
  const bp = b.pos, { w, h: hh } = dims(), cx = w / 2, cy = hh / 2;
  b.shown.forEach(s => {
    gsap.to(s.el, { x: bp.x, y: bp.y, scale: .2, autoAlpha: 0, duration: .35, ease: 'power2.in', onComplete: () => s.el.remove() });
    if (s.line) gsap.to(s.line, { attr: { x2: cx + bp.x, y2: cy + bp.y }, opacity: 0, duration: .35, onComplete: () => s.line.remove() });
  });
  b.shown = [];
}
function enterGraph() {
  buildGraph();
  gsap.fromTo(GR.me, { scale: 0, rotation: 0 }, { scale: 1, rotation: 0, duration: .9, ease: 'steps(10)' });
}

/* ============================ ПРОЕКТЫ ============================ */
function buildProjects() {
  const g = $('#projGrid');
  CONFIG.projects.forEach(p => {
    const c = h('article', 'pj');
    const pv = h('div', 'pj-pv', '<div class="ph"><div class="ph-win"><i></i><i></i><i></i></div></div>');
    withImgAny(pv, p.img.replace(/\.\w+$/, ''), ['png', 'jpg', 'jpeg', 'webp'], '', '');
    const body = h('div', 'pj-body');
    body.append(txt('h3', p.name), txt('p', p.desc));
    body.append(h('div', 'tags', p.tags.map(t => `<span>${t}</span>`).join('')));
    const a = h('a', 'btn main'); a.href = p.url; a.target = '_blank'; a.rel = 'noopener'; T(a, 'Открыть', 'Open'); body.append(a);
    c.append(pv, body); g.append(c);
  });
}
function enterProj() {
  $('#s3 .scroll').scrollTop = 0;
  const c = $$('.pj');
  gsap.fromTo(c, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: .7, ease: 'steps(10)', stagger: .12, clearProps: 'clipPath' });
  c.forEach(el => scramble($('h3', el), .7));
}

/* ============================ ГАЛЕРЕЯ ============================ */
const GAL = { built: false, rows: [], loading: false, lastW: 0 };
async function probeGallery() {
  const { dir, prefix, exts, max } = CONFIG.gallery;
  const tryIdx = n => new Promise(res => {
    let k = 0;
    const next = () => {
      if (k >= exts.length) return res(null);
      const src = `${dir}${prefix}${String(n).padStart(2, '0')}.${exts[k++]}`, im = new Image();
      im.onload = () => res({ src, w: im.naturalWidth, h: im.naturalHeight }); im.onerror = next; im.src = src;
    }; next();
  });
  const out = []; let i = 1;
  while (i <= max) {
    const r = await Promise.all(Array.from({ length: 8 }, (_, j) => tryIdx(i + j)));
    let stop = false; for (const x of r) { if (!x) { stop = true; break; } out.push(x); }
    if (stop) break; i += 8;
  }
  return out;
}
const PH_GRAD = [['#1E4A26', '#3c8a47'], ['#2d6b36', '#B7F28C'], ['#12301A', '#2f7a3a'], ['#3c8a47', '#FFC857'], ['#1E4A26', '#7BD389']];
const PH_RATIO = [1.5, .8, 1.25, 1, 1.7, .75, 1.35, .9, 1.6, 1.1, .85, 1.4, 1, 1.25];
function killGallery() { GAL.rows.forEach(r => r.tw && r.tw.kill()); GAL.rows = []; }
async function enterGal() {
  if (GAL.loading) return;
  if (GAL.built && GAL.lastW === $('#galStage').clientWidth) { GAL.rows.forEach(r => r.tw.play()); return; }
  GAL.loading = true;
  if (!GAL.data) GAL.data = await probeGallery();
  buildGallery(); GAL.loading = false;
}
function leaveGal() { GAL.rows.forEach(r => r.tw && r.tw.pause()); }
function buildGallery() {
  const st = $('#galStage'); killGallery(); st.innerHTML = '';
  const real = GAL.data.length > 0;
  const items = real ? GAL.data.map(d => ({ src: d.src, r: d.w / d.h })) : PH_RATIO.map((r, i) => ({ r, i }));
  const sh = st.clientHeight, vw = innerWidth, gap = 12;
  const rows = sh > 520 ? 3 : 2, rh = clamp((sh - gap * (rows - 1)) / rows, 90, 300);
  for (let k = 0; k < rows; k++) {
    let list = items.length >= rows * 4 ? items.filter((_, i) => i % rows === k) : items.slice(k * 2).concat(items.slice(0, k * 2));
    while (list.length < 4) list = list.concat(list);
    const setW = list.reduce((s, it) => s + it.r * rh + gap, 0);
    const copies = Math.ceil((vw * 2) / setW) + 1;
    const row = h('div', 'g-row'), track = h('div', 'g-track'); row.style.height = rh + 'px';
    for (let c = 0; c < copies; c++) list.forEach((it, idx) => {
      const t = h('div', 'g-it'); t.style.width = it.r * rh + 'px'; t.style.height = rh + 'px';
      if (real) { const im = new Image(); im.src = it.src; im.alt = ''; im.loading = 'lazy'; t.append(im); t.onclick = () => openLightbox(it.src); }
      else {
        const g = PH_GRAD[(it.i + k + idx) % PH_GRAD.length];
        t.style.background = `linear-gradient(135deg,${g[0]},${g[1]})`; t.style.cursor = 'default';
        t.innerHTML = '<div class="g-ph"><svg viewBox="0 0 100 100" width="46" height="46" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"><polygon points="50,6 92,28 92,72 50,94 8,72 8,28"/><circle cx="50" cy="50" r="12"/></svg></div>';
      }
      track.append(t);
    });
    row.append(track); st.append(row);
    const dur = setW / (38 + k * 12), rev = k % 2 === 1;
    const tw = gsap.fromTo(track, { x: rev ? -setW : 0 }, { x: rev ? 0 : -setW, duration: dur, ease: 'none', repeat: -1 });
    row.onmouseenter = () => gsap.to(tw, { timeScale: .15, duration: .5 }); row.onmouseleave = () => gsap.to(tw, { timeScale: 1, duration: .5 });
    GAL.rows.push({ tw });
  }
  GAL.built = true; GAL.lastW = st.clientWidth;
  gsap.fromTo(st.children, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', stagger: .15, duration: .9, ease: 'steps(12)', clearProps: 'clipPath' });
}
function openLightbox(src) { const lb = $('#lightbox'); $('img', lb).src = src; lb.hidden = false; gsap.fromTo(lb, { opacity: 0 }, { opacity: 1, duration: .4, ease: 'steps(6)' }); }
function closeLightbox() { const lb = $('#lightbox'); if (!lb.hidden) gsap.to(lb, { opacity: 0, duration: .25, onComplete: () => { lb.hidden = true; } }); }

/* ============================ МАГАЗИН ============================ */
function buildShop() {
  const box = $('#shop'); $('#contactTop').href = CONFIG.contactUrl;
  const fmt = (p, loc) => p.toLocaleString(loc);
  SHOP.forEach(n => {
    const nz = h('div', 'nz');
    const head = h('button', 'nz-h'); head.type = 'button';
    head.innerHTML = `<span class="nz-ic">${n.ic}</span>`;
    const t = h('span', 'nz-t'); t.append(txt('span', n.t)); const sm = txt('small', n.s); t.append(sm); head.append(t);
    head.insertAdjacentHTML('beforeend', '<svg class="nz-ch" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>');
    const body = h('div', 'nz-b'), list = h('div', 'nz-list');
    n.items.forEach(it => {
      const row = h('div', 'it');
      const pr = h('div', 'pr'); T(pr, `от ${fmt(it.p, 'ru-RU')} ₽${it.per ? ' / час' : ''}`, `from ${fmt(it.p, 'en-US')} ₽${it.per ? ' / hr' : ''}`);
      const a = h('a', 'btn'); a.href = CONFIG.contactUrl; a.target = '_blank'; a.rel = 'noopener'; T(a, 'Заказать', 'Order');
      const hh = h('h4'); TX(hh, it.n); row.append(hh, pr, txt('p', it.d), a); list.append(row);
    });
    body.append(list); nz.append(head, body); box.append(nz);
    head.onclick = () => toggleNz(nz);
  });
}
function toggleNz(nz) {
  const was = nz.classList.contains('open');
  $$('.nz.open').forEach(o => { if (o !== nz) { o.classList.remove('open'); gsap.to($('.nz-b', o), { height: 0, duration: .4, ease: 'power2.inOut' }); } });
  nz.classList.toggle('open', !was);
  const b = $('.nz-b', nz);
  if (!was) {
    gsap.to(b, { height: 'auto', duration: .5, ease: 'steps(8)' });
    gsap.fromTo($$('.it', nz), { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', stagger: .07, duration: .5, delay: .12, ease: 'steps(8)', clearProps: 'clipPath' });
    setTimeout(() => nz.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 350);
  } else gsap.to(b, { height: 0, duration: .4, ease: 'power2.inOut' });
}
function enterShop() {
  $('#s5 .scroll').scrollTop = 0;
  gsap.fromTo('.nz', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', stagger: .12, duration: .7, ease: 'steps(10)', clearProps: 'clipPath' });
}

/* ============================ ИНТЕРФЕЙС ============================ */
function setLang(l) {
  lang = l; try { localStorage.setItem('lang', l); } catch (e) {}
  $('#langs').dataset.v = l; $$('#langs button').forEach(b => b.classList.toggle('on', b.dataset.l === l));
  applyLang(); updateUI();
  $$('#dots button').forEach((b, i) => { b.title = b.ariaLabel = (l === 'ru' ? secs[i].dataset.nameRu : secs[i].dataset.nameEn); });
}
function buildUI() {
  const d = $('#dots');
  secs.forEach((s, i) => { const b = h('button'); b.type = 'button'; b.onclick = () => goTo(i); d.append(b); });
  $$('#langs button').forEach(b => b.onclick = () => setLang(b.dataset.l));
  $('#back').onclick = () => goTo(0);
  $('#lightbox').onclick = closeLightbox;
  T($('#bioText'), BIO.ru, BIO.en); T($('#bioLang'), BIO.lang.ru, BIO.lang.en);
  $('#tgAva').innerHTML = FOX; withImg($('#tgAva'), 'Resources/avatar.png', '', '');
  if (FINE) {
    const gx = gsap.quickTo('.glow', 'x', { duration: .5 }), gy = gsap.quickTo('.glow', 'y', { duration: .5 });
    addEventListener('pointermove', e => {
      gx(e.clientX); gy(e.clientY);
      const nx = e.clientX / innerWidth - .5, ny = e.clientY / innerHeight - .5;
      gsap.to('#logos', { x: nx * -50, y: ny * -50, duration: 1.4, overwrite: 'auto' });
      gsap.to('#decor', { x: nx * 30, y: ny * 30, duration: 1.4, overwrite: 'auto' });
    });
  }
  let rt; addEventListener('resize', () => {
    clearTimeout(rt); rt = setTimeout(() => {
      if (cur === 1) { resetHive(); startBobs(); }
      if (cur === 2) buildGraph();
      if (cur === 4 && GAL.data) buildGallery();
    }, 200);
  });
}

/* ============================ ИНТРО И ЗАПУСК ============================ */
function runIntro() {
  const v = $('#introVideo'), skip = $('#skip'); let done = false, started = false, fb = null;
  const end = () => {
    if (done) return; done = true; if (fb) fb.kill(); try { v.pause(); } catch (e) {}
    gsap.to('#intro', { autoAlpha: 0, duration: .7, ease: 'power2.inOut', onComplete: () => { $('#intro').remove(); startSite(); } });
  };
  skip.onclick = end; gsap.to(skip, { opacity: 1, delay: 1, duration: .8 });
  v.addEventListener('ended', end); v.addEventListener('playing', () => { started = true; });
  const fallback = () => {
    if (started || done || fb) return;
    v.hidden = true; $('#introFallback').hidden = false;
    fb = gsap.timeline({ onComplete: end });
    fb.fromTo('#ifHex', { strokeDasharray: 330, strokeDashoffset: 330 }, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut' })
      .fromTo('#ifName', { y: 14 }, { opacity: 1, y: 0, duration: .6 }, '-=.4').to({}, { duration: .8 });
  };
  v.addEventListener('error', fallback, true);
  const p = v.play(); if (p && p.catch) p.catch(fallback);
  setTimeout(() => { if (!started) fallback(); }, 3000);
}
function startSite() {
  document.body.classList.remove('booting');
  buildDecor(); updateUI(); goTo(0);
}
function init() {
  buildUI(); buildProjects(); buildShop(); buildHive(); bindNav(); setLang(lang); buildFX(); applyTheme(theme); pxBuild();
  gsap.set($$('.sec'), { autoAlpha: 0 });
  runIntro();
}
init();
