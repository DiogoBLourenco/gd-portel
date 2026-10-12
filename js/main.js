(() => {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const club = { season: "2026/27", fullName: "GD Portel" }, players = window.PLAYERS || [];
  const POS = { GR: "Guarda-redes", DEF: "Defesa", MED: "Médio", AV: "Avançado" };
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmtDate = (d) => new Date(d).toLocaleDateString("pt-PT", { day: "2-digit", month: "short", year: "numeric" });

  const nav = $("#nav"), burger = $("#burger"), menu = $("#menu");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 20), { passive: true });
  burger.addEventListener("click", () => burger.setAttribute("aria-expanded", menu.classList.toggle("open")));
  menu.addEventListener("click", (e) => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });

  const squad = $("#squad"), empty = $("#empty");
  let activePos = "ALL", query = "";
  
  const cardHTML = (p) => `
    <article class="player reveal">
      <div class="photo">
        <span class="pos">${esc(p.pos)}</span>
        <span class="num">${esc(p.number)}</span>
        <img src="${esc(p.photo)}" loading="lazy" onerror="this.style.display='none'" />
      </div>
      <div class="info">
        <h3>${esc(p.name)}</h3>
        <p class="prev">${esc(POS[p.pos])}</p>
        <div class="prev-club-wrap">
          ${p.prevLogo ? `<img src="${esc(p.prevLogo)}" class="prev-logo" onerror="this.style.display='none'">` : ""}
          <p class="prev">Ex: <span>${esc(p.prevClub)}</span></p>
          ${p.role ? `<span class="cap-badge">${esc(p.role)}</span>` : ""}
        </div>
        <div class="stats">
          <div><b>${esc(p.games)}</b><small>Jogos</small></div>
          <div><b>${esc(p.goals)}</b><small>Golos</small></div>
        </div>
      </div>
    </article>`;
    
  const renderSquad = () => {
    const list = players.filter(p => (activePos === "ALL" || p.pos === activePos) && p.name.toLowerCase().includes(query));
    squad.innerHTML = list.map(cardHTML).join("");
    if(empty) empty.hidden = list.length > 0;
    observe(document.querySelectorAll(".reveal:not(.in)"));
  };
  
  $("#tabs")?.addEventListener("click", (e) => {
    const t = e.target.closest(".tab"); if (!t) return;
    document.querySelectorAll(".tab").forEach(b => b.classList.toggle("active", b === t));
    activePos = t.dataset.pos; renderSquad();
  });
  $("#search")?.addEventListener("input", (e) => { query = e.target.value.trim().toLowerCase(); renderSquad(); });

  if (window.FIXTURES && window.FIXTURES.length > 0) {
      const now = new Date().getTime();
      let nm = window.FIXTURES.find(f => (new Date(f.date).getTime() + 7200000) > now) || window.FIXTURES[window.FIXTURES.length - 1];
      
      const setMatchData = (prefix) => {
        const homeEl = $(`#${prefix}Home`), awayEl = $(`#${prefix}Away`), 
              homeBadge = $(`#${prefix}HomeBadge`), awayBadge = $(`#${prefix}AwayBadge`), meta = $(`#${prefix}Meta`);
        if(homeEl) homeEl.textContent = nm.home;
        if(awayEl) awayEl.textContent = nm.away;
        if(homeBadge) homeBadge.src = nm.homeLogo;
        if(awayBadge) awayBadge.src = nm.awayLogo;
        if(meta) meta.textContent = `${nm.comp} · ${new Date(nm.date).toLocaleString("pt-PT", { weekday: "short", day: "2-digit", month: "long", hour: "2-digit", minute: "2-digit" })} · ${nm.venue}`;
      };
      
      setMatchData("m"); setMatchData("hm");
      
      const target = new Date(nm.date).getTime(), pad = (n) => String(n).padStart(2, "0");
      const tick = () => {
        const s = Math.max(0, Math.floor((target - Date.now()) / 1000));
        const d = pad(Math.floor(s / 86400)), h = pad(Math.floor((s % 86400) / 3600)), m = pad(Math.floor((s % 3600) / 60)), sec = pad(s % 60);
        if($("#cd-d")) { $("#cd-d").textContent = d; $("#cd-h").textContent = h; $("#cd-m").textContent = m; $("#cd-s").textContent = sec; }
        if($("#hcd-d")) { $("#hcd-d").textContent = d; $("#hcd-h").textContent = h; $("#hcd-m").textContent = m; }
      };
      tick(); setInterval(tick, 1000);
  }

  const renderLogo = (logo) => logo ? `<img src="${esc(logo)}" class="res-logo" onerror="this.style.display='none'">` : "";

  if ($("#results")) {
    $("#results").innerHTML = window.RESULTS.map(r => `
      <li>
        <span class="d">${r.comp} · ${fmtDate(r.date)}</span>
        <span class="h">${r.home === club.fullName ? `<b>${esc(r.home)}</b>` : esc(r.home)} ${renderLogo(r.homeLogo)}</span>
        <span class="sc">${esc(r.hs)} - ${esc(r.as)}</span>
        <span class="a">${renderLogo(r.awayLogo)} ${r.away.includes(club.fullName) ? `<b>${esc(r.away)}</b>` : esc(r.away)}</span>
      </li>`).join("");
  }

  if ($("#standings")) {
    $("#standings").innerHTML = window.STANDINGS.map(t => `
      <tr class="${t.me ? "me" : ""} st-${t.status || ''}">
        <td>${t.pos}</td>
        <td class="l tbl-team">${renderLogo(t.logo)} ${esc(t.team)}</td>
        <td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td>
        <td><strong>${t.pts}</strong></td>
      </tr>`).join("");
  }

  if ($("#news")) $("#news").innerHTML = window.NEWS.map(n => `<article class="post reveal"><span class="tag">${esc(n.tag)}</span><h3>${esc(n.title)}</h3><p>${esc(n.text)}</p><time>${fmtDate(n.date)}</time></article>`).join("");

  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1 }) : null;
  function observe(nodes) { nodes.forEach((n, i) => { if (!io) return n.classList.add("in"); n.style.transitionDelay = Math.min(i % 8, 7) * 40 + "ms"; io.observe(n); }); }
  
  renderSquad();
})();