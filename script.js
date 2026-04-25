(function () {
  'use strict';

  const translations = {
    en: {
      'nav.specs': 'Specs',
      'nav.gallery': 'Gallery',
      'nav.components': 'Components',
      'nav.docs': 'Documentation',
      'nav.about': 'About',
      'specs.title': 'Printer specs',
      'specs.sub': 'Key parameters of the Ultramarine3D build.',
      'specs.kin.k': 'Kinematics', 'specs.kin.v': 'CoreXY, dual stepper',
      'specs.vol.k': 'Build volume', 'specs.vol.v': '350 × 350 × 300 mm',
      'specs.frame.k': 'Frame', 'specs.frame.v': 'Aluminum 30-series I6 (Marek)',
      'specs.rails.k': 'Linear motion', 'specs.rails.v': 'MGN12 rails on X / Y / Z',
      'specs.z.k': 'Z drive', 'specs.z.v': '3× SFU1204 ballscrews · 3× NEMA 17',
      'specs.belts.k': 'Belts', 'specs.belts.v': 'GT2 9 mm',
      'specs.head.k': 'Toolhead', 'specs.head.v': 'EVA 3 · Klicky Probe',
      'specs.hotend.k': 'Hotend', 'specs.hotend.v': 'Phaetus Rapido 2 HF (52 mm³/s)',
      'specs.extruder.k': 'Extruder', 'specs.extruder.v': 'LDO Orbiter v2.5 (direct drive)',
      'specs.bed.k': 'Heated bed', 'specs.bed.v': '350 × 350 × 8 mm Al · dual silicone heaters · PEI',
      'specs.mcu.k': 'Mainboard', 'specs.mcu.v': 'BTT Manta M8P V2 + Raspberry Pi CM5',
      'specs.toolmcu.k': 'Toolhead MCU', 'specs.toolmcu.v': 'BTT EBB36 over CAN (BTT U2C)',
      'specs.psu.k': 'Power', 'specs.psu.v': 'MEAN WELL XDR-480E-24 + XDR-240E-24',
      'specs.fw.k': 'Firmware', 'specs.fw.v': 'Klipper · Fluidd · OrcaSlicer',
      'specs.speed.k': 'Print speed', 'specs.speed.v': '150–300 mm/s, ±0.1 mm',
      'specs.encl.k': 'Enclosure', 'specs.encl.v': '4 / 6 mm polycarbonate panels',
      'specs.viewAll': 'View all components →',
      'footer.github': 'GitHub',
      'comp.title': 'Components',
      'comp.sub': 'Every part used in the Ultramarine3D printer.',
      'comp.intro': 'A full breakdown of the mechanical, motion, electronic and software components used in the build. Sourced from the project documentation.',
      'comp.back': '← Back to home',
      'comp.frame.title': 'Frame & structure',
      'comp.motion.title': 'Motion system',
      'comp.z.title': 'Z axis',
      'comp.head.title': 'Toolhead',
      'comp.bed.title': 'Heated bed',
      'comp.elec.title': 'Electronics',
      'comp.power.title': 'Power',
      'comp.encl.title': 'Enclosure',
      'comp.sw.title': 'Software & firmware'
      'hero.eyebrow': 'Open 3D Printing',
      'hero.title': 'A printer built in the open.',
      'hero.lede': 'Ultramarine3D is a community-driven FFF 3D printer project — transparent hardware, approachable firmware, and honest documentation.',
      'hero.ctaGallery': 'See the build',
      'hero.ctaDocs': 'Read the docs',
      'gallery.title': 'Gallery',
      'gallery.sub': 'Renders, prototypes, and work-in-progress.',
      'gallery.item1': 'FFF Printer — concept',
      'gallery.item2': 'CoreXY v8.2 — frame',
      'gallery.item3': 'EVA toolhead',
      'gallery.coming': 'Coming soon',
      'docs.title': 'Documentation',
      'docs.sub': 'Download the project documents below.',
      'docs.doc1.title': 'Project Documentation',
      'docs.doc1.desc': 'Full project overview — FFF 3D printer design, parts, and rationale.',
      'docs.doc2.title': 'User Manual',
      'docs.doc2.desc': 'Assembly and operation guide — coming soon.',
      'docs.doc2.meta': 'To be added',
      'docs.download': 'Download',
      'docs.soon': 'Soon',
      'about.title': 'About the project',
      'about.p1': 'Ultramarine3D is an independent hardware project focused on building a reliable, approachable FFF 3D printer. Everything — from CAD and STLs to firmware and manuals — lives in one open repository.',
      'about.p2': 'The aim is simple: clear documentation, reproducible parts, and no hidden magic.',
      'about.fact1.k': 'Kinematics',
      'about.fact1.v': 'CoreXY',
      'about.fact2.k': 'Type',
      'about.fact2.v': 'FFF / FDM',
      'about.fact3.k': 'License',
      'about.fact3.v': 'Open source',
      'about.fact4.k': 'Status',
      'about.fact4.v': 'In development',
      'footer.built': 'Built with plain HTML, CSS, and JS — hosted on GitHub Pages.'
    },
    sk: {
      'nav.specs': 'Parametre',
      'nav.gallery': 'Galéria',
      'nav.components': 'Komponenty',
      'nav.docs': 'Dokumentácia',
      'nav.about': 'O projekte',
      'specs.title': 'Parametre tlačiarne',
      'specs.sub': 'Kľúčové parametre stavby Ultramarine3D.',
      'specs.kin.k': 'Kinematika', 'specs.kin.v': 'CoreXY, dva motory',
      'specs.vol.k': 'Tlačový objem', 'specs.vol.v': '350 × 350 × 300 mm',
      'specs.frame.k': 'Rám', 'specs.frame.v': 'Hliníkové profily 30 I6 (Marek)',
      'specs.rails.k': 'Lineárne vedenia', 'specs.rails.v': 'MGN12 na osiach X / Y / Z',
      'specs.z.k': 'Pohon Z', 'specs.z.v': '3× guličkové skrutky SFU1204 · 3× NEMA 17',
      'specs.belts.k': 'Remene', 'specs.belts.v': 'GT2 9 mm',
      'specs.head.k': 'Tlačová hlava', 'specs.head.v': 'EVA 3 · Klicky Probe',
      'specs.hotend.k': 'Hotend', 'specs.hotend.v': 'Phaetus Rapido 2 HF (52 mm³/s)',
      'specs.extruder.k': 'Extrudér', 'specs.extruder.v': 'LDO Orbiter v2.5 (direct drive)',
      'specs.bed.k': 'Vyhrievaná podložka', 'specs.bed.v': '350 × 350 × 8 mm Al · 2× silikónový ohrev · PEI',
      'specs.mcu.k': 'Riadiaca doska', 'specs.mcu.v': 'BTT Manta M8P V2 + Raspberry Pi CM5',
      'specs.toolmcu.k': 'MCU hlavy', 'specs.toolmcu.v': 'BTT EBB36 cez CAN (BTT U2C)',
      'specs.psu.k': 'Napájanie', 'specs.psu.v': 'MEAN WELL XDR-480E-24 + XDR-240E-24',
      'specs.fw.k': 'Firmvér', 'specs.fw.v': 'Klipper · Fluidd · OrcaSlicer',
      'specs.speed.k': 'Rýchlosť tlače', 'specs.speed.v': '150–300 mm/s, ±0,1 mm',
      'specs.encl.k': 'Uzavretie', 'specs.encl.v': 'Polykarbonátové panely 4 / 6 mm',
      'specs.viewAll': 'Zobraziť všetky komponenty →',
      'footer.github': 'GitHub',
      'comp.title': 'Komponenty',
      'comp.sub': 'Všetky súčiastky použité na stavbu Ultramarine3D.',
      'comp.intro': 'Kompletný prehľad mechanických, pohybových, elektronických a softvérových komponentov tlačiarne. Spracované podľa projektovej dokumentácie.',
      'comp.back': '← Späť na hlavnú',
      'comp.frame.title': 'Rám a konštrukcia',
      'comp.motion.title': 'Pohybový systém',
      'comp.z.title': 'Os Z',
      'comp.head.title': 'Tlačová hlava',
      'comp.bed.title': 'Vyhrievaná podložka',
      'comp.elec.title': 'Elektronika',
      'comp.power.title': 'Napájanie',
      'comp.encl.title': 'Uzavretie',
      'comp.sw.title': 'Softvér a firmvér'
      'hero.eyebrow': 'Otvorená 3D tlač',
      'hero.title': 'Tlačiareň postavená otvorene.',
      'hero.lede': 'Ultramarine3D je komunitný projekt FFF 3D tlačiarne — transparentný hardvér, prístupný firmvér a poctivá dokumentácia.',
      'hero.ctaGallery': 'Pozrieť stavbu',
      'hero.ctaDocs': 'Čítať dokumentáciu',
      'gallery.title': 'Galéria',
      'gallery.sub': 'Vizualizácie, prototypy a rozpracované diely.',
      'gallery.item1': 'FFF Tlačiareň — koncept',
      'gallery.item2': 'CoreXY v8.2 — rám',
      'gallery.item3': 'EVA tlačová hlava',
      'gallery.coming': 'Čoskoro',
      'docs.title': 'Dokumentácia',
      'docs.sub': 'Stiahnite si projektové dokumenty nižšie.',
      'docs.doc1.title': 'Projektová dokumentácia',
      'docs.doc1.desc': 'Kompletný prehľad projektu — návrh FFF 3D tlačiarne, diely a zdôvodnenie.',
      'docs.doc2.title': 'Používateľský manuál',
      'docs.doc2.desc': 'Návod na stavbu a obsluhu — pripravujeme.',
      'docs.doc2.meta': 'Bude doplnené',
      'docs.download': 'Stiahnuť',
      'docs.soon': 'Čoskoro',
      'about.title': 'O projekte',
      'about.p1': 'Ultramarine3D je nezávislý hardvérový projekt zameraný na spoľahlivú a prístupnú FFF 3D tlačiareň. Všetko — od CAD a STL súborov po firmvér a manuály — žije v jednom otvorenom repozitári.',
      'about.p2': 'Cieľ je jednoduchý: zrozumiteľná dokumentácia, reprodukovateľné diely a žiadne skryté triky.',
      'about.fact1.k': 'Kinematika',
      'about.fact1.v': 'CoreXY',
      'about.fact2.k': 'Typ',
      'about.fact2.v': 'FFF / FDM',
      'about.fact3.k': 'Licencia',
      'about.fact3.v': 'Open source',
      'about.fact4.k': 'Stav',
      'about.fact4.v': 'Vo vývoji',
      'footer.built': 'Postavené čistým HTML, CSS a JS — hostené na GitHub Pages.'
    }
  };

  const STORAGE_LANG = 'um3d.lang';
  const STORAGE_THEME = 'um3d.theme';

  function detectInitialLang() {
    const saved = localStorage.getItem(STORAGE_LANG);
    if (saved === 'en' || saved === 'sk') return saved;
    const nav = (navigator.language || 'en').toLowerCase();
    return nav.startsWith('sk') || nav.startsWith('cs') ? 'sk' : 'en';
  }

  function detectInitialTheme() {
    const saved = localStorage.getItem(STORAGE_THEME);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyLang(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    const label = document.getElementById('lang-label');
    if (label) label.textContent = lang === 'sk' ? 'EN' : 'SK';
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.setAttribute('aria-label', lang === 'sk' ? 'Prepnúť na angličtinu' : 'Switch to Slovak');
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Lang
    let lang = detectInitialLang();
    applyLang(lang);
    const langBtn = document.getElementById('lang-toggle');
    langBtn.addEventListener('click', () => {
      lang = lang === 'sk' ? 'en' : 'sk';
      localStorage.setItem(STORAGE_LANG, lang);
      applyLang(lang);
    });

    // Theme
    let theme = detectInitialTheme();
    applyTheme(theme);
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_THEME, theme);
      applyTheme(theme);
    });

    // Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();