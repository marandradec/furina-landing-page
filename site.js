/* ==========================================================
   site.js
   Código compartido por todas las páginas.

   Qué hace
   - Inserta la barra lateral, el menú desplegable y el pie de página.
   - Maneja el menú (abrir, cerrar, submenús, clic afuera, Escape).
   - Maneja el efecto scroll reveal (elementos con la clase .reveal).
   - Valida el formulario de contacto si la página lo tiene.

   Cómo usarlo en cualquier página
   Agrega esta línea dentro del <head>
     <script src="site.js" defer></script>

   Para cambiar un enlace del menú o un texto del pie,
   edita solo los datos de aquí abajo y se actualiza en todas las páginas.
   ========================================================== */

(() => {
  'use strict';

  /* ---------- DATOS DEL MENÚ ----------
     [título, [ [título del grupo, [ [texto, archivo], ... ]], ... ]]   */
  const MENU = [
    ['nations', [
      ['teyvat', [
        ['Mondstadt', 'nation-mondstadt.html'], ['Liyue', 'nation-liyue.html'],
        ['Inazuma', 'nation-inazuma.html'], ['Sumeru', 'nation-sumeru.html'],
        ['Fontaine', 'nation-fontaine.html'], ['Natlan', 'nation-natlan.html'],
        ['Snezhnaya', 'nation-snezhnaya.html']]],
      ['lore', [
        ['Archons', 'lore-archons.html'], ['Visions', 'lore-visions.html'],
        ['Fatui', 'lore-fatui.html'], ['The Abyss', 'lore-abyss.html'],
        ["Khaenri'ah", 'lore-khaenriah.html']]],
    ]],
    ['characters', [
      ['by element', [
        ['Anemo', 'char-anemo.html'], ['Geo', 'char-geo.html'],
        ['Electro', 'char-electro.html'], ['Dendro', 'char-dendro.html'],
        ['Hydro', 'char-hydro.html'], ['Pyro', 'char-pyro.html'],
        ['Cryo', 'char-cryo.html']]],
      ['by weapon', [
        ['Sword', 'char-sword.html'], ['Claymore', 'char-claymore.html'],
        ['Polearm', 'char-polearm.html'], ['Bow', 'char-bow.html'],
        ['Catalyst', 'char-catalyst.html']]],
      ['spotlight', [
        ['Furina', 'char-furina.html'], ['Neuvillette', 'char-neuvillette.html'],
        ['Nahida', 'char-nahida.html'], ['Raiden Shogun', 'char-raiden.html'],
        ['Zhongli', 'char-zhongli.html'], ['Venti', 'char-venti.html']]],
    ]],
    ['wiki', [
      ['gear', [
        ['Weapons', 'wiki-weapons.html'], ['Artifacts', 'wiki-artifacts.html'],
        ['Materials', 'wiki-materials.html']]],
      ['world', [
        ['Enemies', 'wiki-enemies.html'], ['Bosses', 'wiki-bosses.html'],
        ['Domains', 'wiki-domains.html'], ['Quests', 'wiki-quests.html'],
        ['Events', 'wiki-events.html']]],
    ]],
    ['guides', [
      ['beginners', [
        ['Beginner tips', 'guide-beginner.html'], ['Archon quests', 'guide-archon-quests.html'],
        ['Redeem codes', 'guide-codes.html'], ['Primogems', 'guide-primogems.html']]],
      ['builds', [
        ['Team comps', 'guide-teams.html'], ['Talents', 'guide-talents.html'],
        ['Artifact farming', 'guide-artifact-farming.html'], ['Spiral Abyss', 'guide-abyss.html'],
        ['Imaginarium Theater', 'guide-theater.html']]],
      ['life skills', [
        ['Cooking', 'guide-cooking.html'], ['Fishing', 'guide-fishing.html']]],
    ]],
    ['wish', [
      ['banners', [
        ['Character event', 'wish-character.html'], ['Weapon event', 'wish-weapon.html'],
        ['Standard', 'wish-standard.html'], ["Beginner's", 'wish-beginner.html'],
        ['Chronicled', 'wish-chronicled.html']]],
      ['fates', [
        ['Intertwined Fate', 'wish-intertwined.html'], ['Acquaint Fate', 'wish-acquaint.html'],
        ['Pity calculator', 'wish-pity.html']]],
    ]],
  ];

  // Enlaces directos (sin submenú). "contact" baja a la sección de contacto
  // si la página la tiene y, si no, vuelve al inicio.
  const contactHref = document.getElementById('contact') ? '#contact' : 'index.html#contact';
  const DIRECT = [
    ['map', 'map.html'],
    ['contact', contactHref],
  ];

  /* ---------- CONSTRUCCIÓN DEL HTML ---------- */
  const sidebarHTML = `
    <aside class="sidebar">
      <a href="index.html" class="logo" aria-label="Inicio">A</a>

      <button class="burger" id="burger" aria-label="Abrir menú" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>

      <div class="sidebar-bottom">
        <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#" class="lang">EN</a>
      </div>
    </aside>`;

  const subMenuHTML = groups => groups.map(([titulo, links]) => `
          <ul class="submenu-group">
            <li class="sub-title"><span>${titulo}</span></li>
            ${links.map(([texto, href]) => `<li><a href="${href}">${texto}</a></li>`).join('\n            ')}
          </ul>`).join('');

  const menuHTML = `
    <nav class="menu" id="menu" aria-hidden="true">
      <ul class="menu-list">
        ${MENU.map(([titulo, groups]) => `
        <li class="menu-item has-sub">
          <button class="menu-link" type="button">${titulo} <i class="arrow"></i></button>
          <div class="submenu">${subMenuHTML(groups)}
          </div>
        </li>`).join('')}
        ${DIRECT.map(([texto, href]) => `
        <li class="menu-item">
          <a class="menu-link" href="${href}">${texto}</a>
        </li>`).join('')}
      </ul>
    </nav>`;

  const footerHTML = `
    <footer class="site-footer">
      <p class="footer-left">&copy; 2026 fan project, genshin impact &copy; hoyoverse</p>
      <a href="#" class="to-top" aria-label="Volver arriba"><i class="fa fa-angle-double-up"></i></a>
      <p class="footer-credit">
        design inspired by sparrow, a
        <a href="https://themewagon.com/" target="_blank" rel="noopener">themewagon</a> template
      </p>
    </footer>`;

  document.body.insertAdjacentHTML('afterbegin', sidebarHTML + menuHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ---------- COMPORTAMIENTO DEL MENÚ ---------- */
  const burger = document.getElementById('burger');
  const menu   = document.getElementById('menu');

  // Abrir / cerrar con las tres rayas
  burger.addEventListener('click', () => {
    const abierto = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', abierto);
    menu.setAttribute('aria-hidden', !abierto);
  });

  // Abrir / cerrar submenús con las flechitas (los demás se cierran)
  menu.querySelectorAll('.has-sub > .menu-link').forEach(btn => {
    btn.addEventListener('click', () => {
      const li = btn.parentElement;
      menu.querySelectorAll('.has-sub.open').forEach(o => {
        if (o !== li) o.classList.remove('open');
      });
      li.classList.toggle('open');
    });
  });

  // Enlaces internos (#contact) cierran el menú al tocarlos
  menu.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => burger.click());
  });

  // Tocar cualquier cosa fuera del menú lo cierra
  document.addEventListener('click', e => {
    if (!document.body.classList.contains('menu-open')) return;
    if (menu.contains(e.target) || burger.contains(e.target)) return;
    burger.click();
  });

  // Escape también lo cierra
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      burger.click();
    }
  });

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);          // se anima solo una vez
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- FORMULARIO DE CONTACTO (solo si existe) ----------
     Solo valida y confirma, falta conectarlo a un servicio de correo. */
  const form = document.getElementById('contact-form');
  if (form) {
    const status = document.getElementById('form-status');
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.name.value.trim() || !form.message.value.trim()) {
        status.textContent = 'please add your name and a message.';
        status.className = 'form-status error';
        return;
      }
      status.textContent = 'thank you, your message reached the Court of Fontaine.';
      status.className = 'form-status ok';
      form.reset();
    });
  }
})();