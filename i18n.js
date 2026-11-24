/* Golfadi · textos en español e inglés (demo).
 *
 * Cómo funciona:
 * - El HTML trae los textos en español. Este archivo guarda cada texto en pares [español, inglés].
 * - Al elegir EN, cada texto se cambia por su par en inglés; al elegir ES vuelve el original.
 * - El idioma se puede forzar con ?lang=en o ?lang=es en la dirección.
 * - Para cambiar un texto: edita el par aquí y el texto en español en index.html, que deben coincidir.
 */
(function () {
  'use strict';

  // Textos visibles: [español tal como está en el HTML, inglés]
  var TEXTS = [
    ['Saltar al contenido', 'Skip to content'],
    ['Carrocería · Pintura · Detallado', 'Bodywork · Paint · Detailing'],
    ['Taller', 'Cars'],
    ['Camiones', 'Trucks'],
    ['Empresas', 'Business'],
    ['Carritos de golf', 'Golf carts'],
    ['Contacto', 'Contact'],
    ['Menú', 'Menu'],
    ['Presupuesto por WhatsApp', 'Quote on WhatsApp'],

    // Hero
    ['Carrocería, pintura y detallado de alta gama · Tijuana', 'High-end bodywork, paint and detailing · Tijuana'],
    ['Un choque dura minutos… <span class="out">la mala imagen, hasta que lo reparas.</span>',
     'A crash takes minutes… <span class="out">a bad look lasts until you fix it.</span>'],
    ['Ven con nosotros y <b>te ayudamos.</b> Pide tu presupuesto estimado por WhatsApp.',
     'Come to us and <b>we’ll help.</b> Ask for your estimate on WhatsApp.'],
    ['Pedir presupuesto', 'Get a quote'],
    ['Llamar 664 175 3452', 'Call 664 175 3452'],

    // Divisiones
    ['Autos', 'Cars'],
    ['Hojalatería, pintura, detallado y mecánica', 'Bodywork, paint, detailing and mechanics'],
    ['Tractocamiones, rabones y más', 'Semi-trucks, straight trucks and more'],
    ['Flotillas corporativas y rescate', 'Corporate fleets and rescue'],
    ['Venta y reparación', 'Sales and repair'],

    // 01 · Autos
    ['01 · Autos', '01 · Cars'],
    ['Tu auto, como debe verse.', 'Your car, the way it should look.'],
    ['Del golpe al acabado final: hojalatería, pintura, detallado y mecánica en un mismo lugar.',
     'From the dent to the final finish: bodywork, paint, detailing and mechanics in one place.'],
    ['Hojalatería', 'Bodywork'],
    ['Reconstrucción y reparación de hojalatería.', 'Body reconstruction and repair.'],
    ['Pintura automotriz', 'Automotive paint'],
    ['Acabados en pintura automotriz de alta gama.', 'High-end automotive paint finishes.'],
    ['Detallado profesional', 'Professional detailing'],
    ['Interiores y exteriores. Incluye pulido y encerado.', 'Interior and exterior. Includes polishing and waxing.'],
    ['Mecánica y diagnóstico', 'Mechanics and diagnostics'],
    ['Mecánica y diagnóstico en general. Mantenimiento programado.', 'General mechanics and diagnostics. Scheduled maintenance.'],

    // 02 · Camiones
    ['02 · Camiones', '02 · Trucks'],
    ['Camiones pesados.', 'Heavy trucks.'],
    ['También reparamos camiones: tractocamiones, rabones y más.', 'We also repair trucks: semi-trucks, straight trucks and more.'],
    ['Unidades', 'Vehicles'],
    ['Tractocamiones y rabones <em><span class="pend">[PENDIENTE: confirmar otros tipos: tortons, cajas secas, pipas, etc.]</span></em>',
     'Semi-trucks and straight trucks <em><span class="pend">[PENDING: confirm other types: tandem trucks, dry vans, tankers, etc.]</span></em>'],
    ['Servicios', 'Services'],
    ['[PENDIENTE: ¿hojalatería, pintura, mecánica o todos?]', '[PENDING: bodywork, paint, mechanics, or all?]'],
    ['Presupuesto para mi camión', 'Quote for my truck'],

    // 03 · Empresas
    ['03 · Empresas', '03 · Business'],
    ['Flotillas y rescate.', 'Fleets and rescue.'],
    ['Un solo proveedor para los autos y camiones de tu empresa: carrocería, pintura, detallado y mecánica.',
     'One provider for your company’s cars and trucks: bodywork, paint, detailing and mechanics.'],
    ['Flotillas', 'Fleets'],
    ['Atención a flotillas corporativas', 'Corporate fleet service'],
    ['Rescate', 'Rescue'],
    ['Rescate carretero y/o en sitio', 'Roadside and/or on-site rescue'],
    ['Hojalatería, pintura, detallado, mecánica y mantenimiento programado', 'Bodywork, paint, detailing, mechanics and scheduled maintenance'],
    ['Información para flotillas', 'Fleet information'],
    ['Pedir rescate', 'Request rescue'],

    // 04 · Carritos de golf
    ['04 · Carritos de golf', '04 · Golf carts'],
    ['Carritos de golf.', 'Golf carts.'],
    ['Venta y reparación de carritos de golf.', 'Golf cart sales and repair.'],
    ['Venta', 'Sales'],
    ['Carritos de golf <em><span class="pend">[PENDIENTE: nuevos, seminuevos o ambos]</span></em>',
     'Golf carts <em><span class="pend">[PENDING: new, used, or both]</span></em>'],
    ['Reparación', 'Repair'],
    ['Comprar un carrito', 'Buy a cart'],
    ['Reparar mi carrito', 'Repair my cart'],

    // Cómo pedir presupuesto
    ['Presupuesto estimado', 'Estimate'],
    ['Así de simple.', 'It’s that simple.'],
    ['Para tu auto, tu camión, tu flotilla o tu carrito de golf.', 'For your car, your truck, your fleet or your golf cart.'],
    ['Escríbenos por WhatsApp', 'Message us on WhatsApp'],
    ['Al 664 163 6617, con lo que necesitas.', 'At 664 163 6617, with what you need.'],
    ['Recibe tu presupuesto estimado', 'Get your estimate'],
    ['Te respondemos por el mismo WhatsApp.', 'We reply in the same WhatsApp chat.'],
    ['[PENDIENTE: siguiente paso]', '[PENDING: next step]'],
    ['[PENDIENTE: por ejemplo, cómo se agenda la revisión]', '[PENDING: for example, how the inspection is scheduled]'],

    // Contacto y pie
    ['Ven con nosotros y te ayudamos.', 'Come to us and we’ll help.'],
    ['Escribir por WhatsApp', 'Message on WhatsApp'],
    ['Llamar', 'Call'],
    ['Teléfono', 'Phone'],
    ['Dirección', 'Address'],
    ['Tijuana, B.C. <span class="pend">[PENDIENTE: dirección]</span>', 'Tijuana, B.C. <span class="pend">[PENDING: address]</span>'],
    ['Horario', 'Hours'],
    ['[PENDIENTE: horario]', '[PENDING: hours]'],
    ['¿Qué necesitas? Escríbenos directo:', 'What do you need? Message us directly:'],
    ['Mi auto', 'My car'],
    ['Mi camión', 'My truck'],
    ['Mi flotilla', 'My fleet'],
    ['Carrito de golf', 'Golf cart'],
    ['Autos · Camiones · Empresas · Carritos de golf', 'Cars · Trucks · Business · Golf carts'],
    ['[PENDIENTE: dirección]', '[PENDING: address]']
  ];

  // Mensajes ya escritos de WhatsApp
  var WA = [
    ['Hola, quiero un presupuesto estimado.', 'Hi, I’d like an estimate.'],
    ['Hola, quiero un presupuesto de hojalatería.', 'Hi, I’d like a bodywork quote.'],
    ['Hola, quiero un presupuesto de pintura.', 'Hi, I’d like a paint quote.'],
    ['Hola, quiero un presupuesto de detallado.', 'Hi, I’d like a detailing quote.'],
    ['Hola, quiero un presupuesto de mecánica y diagnóstico.', 'Hi, I’d like a mechanics and diagnostics quote.'],
    ['Hola, quiero un presupuesto para mi camión.', 'Hi, I’d like a quote for my truck.'],
    ['Hola, quiero información para la flotilla de mi empresa.', 'Hi, I’d like information for my company’s fleet.'],
    ['Hola, necesito rescate para mi auto.', 'Hi, I need a rescue for my car.'],
    ['Hola, me interesa comprar un carrito de golf.', 'Hi, I’m interested in buying a golf cart.'],
    ['Hola, necesito reparar un carrito de golf.', 'Hi, I need to repair a golf cart.'],
    ['Hola, quiero un presupuesto para mi auto.', 'Hi, I’d like a quote for my car.'],
    ['Hola, necesito rescate.', 'Hi, I need a rescue.'],
    ['Hola, quiero información de carritos de golf.', 'Hi, I’d like information about golf carts.']
  ];

  // Textos alternativos de fotos y etiquetas para lectores de pantalla
  var ATTRS = [
    ['Golfadi, inicio', 'Golfadi, home'],
    ['Principal', 'Main'],
    ['Abrir menú', 'Open menu'],
    ['Principal (móvil)', 'Main (mobile)'],
    ['Lo que hacemos', 'What we do'],
    ['Escribir por WhatsApp', 'Message on WhatsApp'],
    ['Idioma', 'Language'],
    ['Taller automotriz con autos en elevadores', 'Auto shop with cars on lifts'],
    ['Técnico lijando el panel trasero de un auto', 'Technician sanding the rear panel of a car'],
    ['Pintor aplicando pintura con pistola a un auto', 'Painter spraying paint on a car'],
    ['Pulido de la pintura de un auto negro', 'Polishing the paint of a black car'],
    ['Mecánico revisando el motor de un auto', 'Mechanic checking a car engine'],
    ['Tractocamión blanco dentro de un taller', 'White semi-truck inside a shop'],
    ['Varios autos en reparación dentro de un taller', 'Several cars being repaired inside a shop'],
    ['Fila de carritos de golf estacionados', 'Row of parked golf carts']
  ];

  var META = {
    es: {
      title: 'Taller Golfadi · Carrocería, pintura, detallado y carritos de golf',
      description: 'Hojalatería, pintura automotriz de alta gama, detallado y mecánica para autos y camiones en Tijuana. Flotillas corporativas, rescate carretero, y venta y reparación de carritos de golf. Presupuesto estimado por WhatsApp al 664 163 6617.'
    },
    en: {
      title: 'Golfadi · Bodywork, paint, detailing and golf carts',
      description: 'Bodywork, high-end automotive paint, detailing and mechanics for cars and trucks in Tijuana. Corporate fleets, roadside rescue, and golf cart sales and repair. Get an estimate on WhatsApp at +52 664 163 6617.'
    }
  };

  var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };
  var pairs = {}, waPairs = {}, attrPairs = {};
  TEXTS.forEach(function (p) { pairs[norm(p[0])] = p; });
  WA.forEach(function (p) { waPairs[p[0]] = p; });
  ATTRS.forEach(function (p) { attrPairs[p[0]] = p; });

  // Encuentra los elementos con texto propio (sin repetir los que están dentro de otro).
  var nodes = [], attrNodes = [], waLinks = [];
  function collect() {
    var skip = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };
    var all = Array.prototype.filter.call(document.body.querySelectorAll('*'), function (el) {
      if (skip[el.tagName] || el.closest('svg') || el.closest('[data-lang-switch]')) return false;
      return Array.prototype.some.call(el.childNodes, function (n) { return n.nodeType === 3 && n.textContent.trim(); });
    });
    all.forEach(function (el) {
      if (all.some(function (o) { return o !== el && o.contains(el); })) return;
      var key = norm(el.innerHTML);
      if (pairs[key]) nodes.push({ el: el, pair: pairs[key] });
    });
    document.querySelectorAll('[alt],[aria-label]').forEach(function (el) {
      ['alt', 'aria-label'].forEach(function (a) {
        var v = el.getAttribute(a);
        if (v && attrPairs[v]) attrNodes.push({ el: el, attr: a, pair: attrPairs[v] });
      });
    });
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (a) {
      var url = new URL(a.href);
      var msg = url.searchParams.get('text');
      if (msg && waPairs[msg]) waLinks.push({ el: a, url: url, pair: waPairs[msg] });
    });
  }

  function apply(lang) {
    var i = lang === 'en' ? 1 : 0;
    document.documentElement.lang = lang === 'en' ? 'en' : 'es-MX';
    nodes.forEach(function (n) { n.el.innerHTML = n.pair[i]; });
    attrNodes.forEach(function (n) { n.el.setAttribute(n.attr, n.pair[i]); });
    // encodeURIComponent deja los espacios como %20, que WhatsApp lee bien en todos los teléfonos.
    waLinks.forEach(function (n) { n.el.href = n.url.origin + n.url.pathname + '?text=' + encodeURIComponent(n.pair[i]); });
    document.title = META[lang].title;
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute('content', META[lang].description);
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem('golfadi-lang', lang); } catch (e) {}
    try {
      var u = new URL(location.href);
      u.searchParams.set('lang', lang);
      history.replaceState(null, '', u.toString());
    } catch (e) {}
  }

  function initial() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'en' || q === 'es') return q;
    try {
      var s = localStorage.getItem('golfadi-lang');
      if (s === 'en' || s === 'es') return s;
    } catch (e) {}
    return 'es';
  }

  function start() {
    collect();
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-lang]');
      if (!b) return;
      e.preventDefault();
      apply(b.getAttribute('data-lang'));
    });
    apply(initial());
    // Para revisar en la consola: textos del HTML que no tienen par en este archivo.
    window.golfadiI18n = { missing: function () {
      var found = nodes.map(function (n) { return n.el; });
      return Array.prototype.filter.call(document.body.querySelectorAll('h1,h2,h3,p,a,b,small,span,dt,li,em'), function (el) {
        return !el.closest('svg') && !el.closest('[data-lang-switch]') && el.children.length === 0 && /[a-záéíóúñ]/i.test(el.textContent)
          && !found.some(function (f) { return f === el || f.contains(el); });
      }).map(function (el) { return norm(el.textContent); });
    } };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
