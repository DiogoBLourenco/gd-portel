(() => {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const club = window.CLUB, players = window.PLAYERS || [];
  const POS_LABEL = { GR: "Guarda-redes", DEF: "Defesa", MED: "Médio", AV: "Avançado" };
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const initialsOf = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const abbr = (n) => n.split(/\s+/).map((w) => w[0]).join("").slice(0, 3).toUpperCase();
  const fmtDate = (d) => new Date(d).toLocaleDateString("pt-PT", { day: "2-digit", month: "short", year: "numeric" });

  /* Header / menu */
  const nav = $("#nav"), burger = $("#burger"), menu = $("#menu");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  menu.addEventListener("click", (e) => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });

  /* Texto do clube */
  $("#season").textContent = club.season;
  $("#clubName").textContent = club.fullName;
  $("#year").textContent = new Date().getFullYear();

  /* Squad */
  const squad = $("#squad"), empty = $("#empty");
  let activePos = "ALL", query = "";
  const cardHTML = (p) => `
    <article class="player reveal">
      <div class="photo">
        <span class="pos">${esc(p.pos)}</span>
        <span class="num">${esc(p.number)}</span>
        ${p.photo ? `<img src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy" onerror="this.remove()" />` : ""}
        <span class="initials" aria-hidden="true">${esc(initialsOf(p.name))}</span>
      </div>
      <div class="info">
        <h3>${esc(p.name)}</h3>
        <p class="prev">${esc(POS_LABEL[p.pos] || p.pos)}</p>
        <p class="prev">Clube anterior: <span>${esc(p.prevClub)}</span></p>
        <div class="stats">
          <div><b>${esc(p.games)}</b><small>Jogos</small></div>
          <div><b>${esc(p.goals)}</b><small>Golos</small></div>
          <div><b>${esc(p.assists)}</b><small>Assist.</small></div>
        </div>
      </div>
    </article>`;
  const renderSquad = () => {
    const list = players.filter((p) =>
      (activePos === "ALL" || p.pos === activePos) &&
      p.name.toLowerCase().includes(query));
    squad.innerHTML = list.map(cardHTML).join("");
    empty.hidden = list.length > 0;
    observe(squad.querySelectorAll(".reveal"));
  };
  $("#tabs").addEventListener("click", (e) => {
    const t = e.target.closest(".tab"); if (!t) return;
    document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b === t));
    activePos = t.dataset.pos; renderSquad();
  });
  $("#search").addEventListener("input", (e) => { query = e.target.value.trim().toLowerCase(); renderSquad(); });

  /* Próximo jogo + countdown */
  const nm = window.NEXT_MATCH;
  if ($("#mHome")) {
      $("#mHome").textContent = nm.home; $("#mAway").textContent = nm.away;
      $("#mHomeBadge").textContent = abbr(nm.home); $("#mAwayBadge").textContent = abbr(nm.away);
      $("#mMeta").textContent = `${new Date(nm.date).toLocaleString("pt-PT", { weekday: "long", day: "2-digit", month: "long", hour: "2-digit", minute: "2-digit" })} · ${nm.venue}`;
      const target = new Date(nm.date).getTime(), pad = (n) => String(n).padStart(2, "0");
      const tick = () => {
        const s = Math.max(0, Math.floor((target - Date.now()) / 1000));
        $("#cd-d").textContent = pad(Math.floor(s / 86400));
        $("#cd-h").textContent = pad(Math.floor((s % 86400) / 3600));
        $("#cd-m").textContent = pad(Math.floor((s % 3600) / 60));
        $("#cd-s").textContent = pad(s % 60);
      };
      tick(); setInterval(tick, 1000);
  }

  /* Resultados */
  if ($("#results")) {
      $("#results").innerHTML = window.RESULTS.map((r) => `
        <li><span class="d">${fmtDate(r.date)}</span>
          <span class="h">${r.home === club.name ? `<b>${esc(r.home)}</b>` : esc(r.home)}</span>
            <span class="sc">${esc(r.hs)} - ${esc(r.as)}</span>
          <span class="a">${r.away === club.name ? `<b>${esc(r.away)}</b>` : esc(r.away)}</span></li>`).join("");
  }

  /* Classificação */
  if ($("#standings")) {
      $("#standings").innerHTML = window.STANDINGS.map((t) => `
        <tr class="${t.me ? "me" : ""}"><td>${t.pos}</td><td class="l">${esc(t.team)}</td><td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td><td>${t.pts}</td></tr>`).join("");
  }

  /* Notícias */
  if ($("#news")) {
      $("#news").innerHTML = window.NEWS.map((n) => `
        <article class="post reveal"><span class="tag">${esc(n.tag)}</span><h3>${esc(n.title)}</h3><p>${esc(n.text)}</p><time datetime="${esc(n.date)}">${fmtDate(n.date)}</time></article>`).join("");
  }

  /* Clube */
  if ($("#facts")) {
      $("#facts").innerHTML = [
        ["Competição", club.competition], ["Época", club.season], ["Estádio", club.stadium], ["Localidade", club.location], ["Fundação", club.founded]
      ].map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("");
      $("#social").innerHTML = [["Facebook", club.contacts.facebook], ["Instagram", club.contacts.instagram], ["Email", club.contacts.email && "mailto:" + club.contacts.email]]
        .filter(([, u]) => u).map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${n}</a>`).join("");
  }

  /* Reveal on scroll */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 })
    : null;
  function observe(nodes) { nodes.forEach((n, i) => { if (!io) return n.classList.add("in"); n.style.transitionDelay = Math.min(i % 8, 7) * 50 + "ms"; io.observe(n); }); }

  renderSquad();
  observe(document.querySelectorAll(".reveal:not(.in)"));
})();