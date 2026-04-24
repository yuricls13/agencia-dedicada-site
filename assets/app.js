/* Agência Dedicada — site estático */
(function () {
  'use strict';

  // ── CALCULATOR ────────────────────────────────────────────────
  var nichePresets = {
    conc:        { leads: 200, ticket: 85000,  atend: 30, label: 'Concessionária' },
    clinica:     { leads: 150, ticket: 800,    atend: 40, label: 'Clínica' },
    imob:        { leads: 120, ticket: 450000, atend: 25, label: 'Imobiliária' },
    academia:    { leads: 80,  ticket: 1800,   atend: 35, label: 'Academia' },
    restaurante: { leads: 300, ticket: 180,    atend: 45, label: 'Restaurante' }
  };

  var leadsEl  = document.getElementById('leads');
  var ticketEl = document.getElementById('ticket');
  var atendEl  = document.getElementById('atend');

  function fmt(n) { return n.toLocaleString('pt-BR', { maximumFractionDigits: 0 }); }

  function recalc() {
    if (!leadsEl || !ticketEl || !atendEl) return;
    var leads  = +leadsEl.value;
    var ticket = +ticketEl.value;
    var atend  = +atendEl.value;
    document.getElementById('leads-val').textContent = leads;
    document.getElementById('ticket-val').textContent = fmt(ticket);
    document.getElementById('atend-val').textContent = atend;
    var perdidos = Math.round(leads * (1 - atend / 100));
    var convertidosPerdidos = perdidos * 0.08;
    var receitaPerdida = convertidosPerdidos * ticket;
    document.getElementById('leads-perdidos').textContent = perdidos;
    document.getElementById('resultado').textContent = 'R$ ' + fmt(receitaPerdida);
  }

  [leadsEl, ticketEl, atendEl].forEach(function (el) {
    if (el) el.addEventListener('input', recalc);
  });

  window.setNiche = function (k) {
    document.querySelectorAll('.niche-chip').forEach(function (c) {
      c.classList.toggle('active', c.dataset.niche === k);
    });
    var p = nichePresets[k];
    if (!p) return;
    leadsEl.value = p.leads; ticketEl.value = p.ticket; atendEl.value = p.atend;
    recalc();
  };

  recalc();

  // ── SPEED SLIDER ──────────────────────────────────────────────
  var speedData = [
    { t: '30 segundos', taxa: '21x',   conv: '12%',   fech: '78%', color: 'good', cap: '<strong>30 segundos:</strong> Ouro. O lead ainda está com o celular na mão, comparando. Você é o primeiro — fecha antes do concorrente.' },
    { t: '5 minutos',   taxa: '4x',    conv: '6%',    fech: '55%', color: 'mid',  cap: '<strong>5 minutos:</strong> Limite. A chance de contato qualificado cai rápido quando o lead espera. Metade dos leads já pode estar conversando com outro.' },
    { t: '1 hora',      taxa: '1x',    conv: '2%',    fech: '18%', color: 'bad',  cap: '<strong>1 hora:</strong> Lead esfriou. O concorrente já mandou proposta. Você responde pra quem já decidiu.' },
    { t: '4 horas',     taxa: '0.3x',  conv: '0.8%',  fech: '7%',  color: 'bad',  cap: '<strong>4 horas:</strong> Quase perdido. A intenção de compra cai 90%. Só fecha quem não encontrou opção.' },
    { t: '24 horas',    taxa: '0.1x',  conv: '0.2%',  fech: '2%',  color: 'bad',  cap: '<strong>24 horas:</strong> Perdido. 98% já fechou com outro ou desistiu. Você responde só pra confirmar o churn.' }
  ];

  var speedEl = document.getElementById('speed');
  function updateSpeed() {
    if (!speedEl) return;
    var idx = Math.min(speedData.length - 1, Math.round(+speedEl.value / 25));
    var d = speedData[idx];
    document.getElementById('tempo-label').textContent = d.t;
    var taxa = document.getElementById('taxa');
    var conv = document.getElementById('conversao');
    var fech = document.getElementById('fechamento');
    [taxa, conv, fech].forEach(function (el) {
      el.classList.remove('good', 'mid', 'bad');
      el.classList.add(d.color);
    });
    taxa.textContent = d.taxa;
    conv.textContent = d.conv;
    fech.textContent = d.fech;
    document.getElementById('speed-cap').innerHTML = d.cap;
  }
  if (speedEl) {
    speedEl.addEventListener('input', updateSpeed);
    updateSpeed();
  }

  // ── FORM MODAL ────────────────────────────────────────────────
  var lastFocusedEl = null;
  var formOverlay = document.getElementById('form-overlay');
  var formFocusables = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  window.openForm = function () {
    if (!formOverlay) return;
    lastFocusedEl = document.activeElement;
    formOverlay.classList.add('open');
    formOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var first = document.getElementById('f-name');
    if (first) first.focus();
  };

  window.closeForm = function () {
    if (!formOverlay) return;
    formOverlay.classList.remove('open');
    formOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedEl) lastFocusedEl.focus();
  };

  if (formOverlay) {
    formOverlay.addEventListener('click', function (e) {
      if (e.target.id === 'form-overlay') window.closeForm();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (!formOverlay || !formOverlay.classList.contains('open')) return;
    if (e.key === 'Escape') { window.closeForm(); return; }
    if (e.key !== 'Tab') return;
    var focusables = [].slice.call(formOverlay.querySelectorAll(formFocusables))
      .filter(function (el) { return !el.disabled && el.offsetParent !== null; });
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // Sanitiza telefone: só dígitos, 10-13 posições (DDD + número, com opcional 55)
  function normalizeBrazilPhone(raw) {
    var d = (raw || '').replace(/\D+/g, '');
    if (d.length < 10) return null;
    if (d.length === 10 || d.length === 11) d = '55' + d;
    if (d.length > 13) d = d.slice(-13);
    return d;
  }

  window.sendWhats = function (e) {
    e.preventDefault();
    var name    = (document.getElementById('f-name').value || '').trim();
    var biz     = (document.getElementById('f-biz').value || '').trim();
    var telRaw  = (document.getElementById('f-tel').value || '').trim();
    var niche   = document.getElementById('f-niche').value;
    var leads   = document.getElementById('f-leads').value;
    var consent = document.getElementById('f-consent').checked;

    if (!name || !biz || !niche || !leads) {
      alert('Preencha todos os campos para continuar.');
      return;
    }
    var tel = normalizeBrazilPhone(telRaw);
    if (!tel) {
      alert('Informe um WhatsApp válido com DDD (10 ou 11 dígitos).');
      document.getElementById('f-tel').focus();
      return;
    }
    if (!consent) {
      alert('Você precisa concordar com a política de privacidade para continuar.');
      document.getElementById('f-consent').focus();
      return;
    }

    var msg = 'Oi! Sou ' + name + ', do ' + biz + ' (' + niche + '). ' +
              'Meu WhatsApp: ' + telRaw + '. ' +
              'Recebo ' + leads + ' leads/mês e quero meu diagnóstico gratuito.';
    var url = 'https://wa.me/5511924246749?text=' + encodeURIComponent(msg);
    window.open(url, '_blank', 'noopener');
  };
})();
