// ============================================================
//  PLANTEL — edita aqui. O site constrói os cards sozinho.
// ============================================================
window.PLAYERS = [
  // GUARDA-REDES
  { name: "Diogo Águas", number: 14, pos: "GR", photo: "", prevClub: "SC Lusitânia", games: 5, goals: 0, assists: 0 },
  { name: "Ethan Crump", number: 17, pos: "GR", photo: "", prevClub: "SC Pombal", games: 3, goals: 0, assists: 0 },

  // DEFESAS
  { name: "Igor Costa", number: 1, pos: "DEF", photo: "", prevClub: "Serpa", games: 8, goals: 1, assists: 0 },
  { name: "Diogo Braizinha", number: 2, pos: "DEF", photo: "", prevClub: "-", games: 8, goals: 2, assists: 0 },
  { name: "Ivanilson Semedo", number: 4, pos: "DEF", photo: "", prevClub: "Monte Trigo", games: 8, goals: 0, assists: 0 },
  { name: "Clésio Gomes", number: 6, pos: "DEF", photo: "", prevClub: "-", games: 8, goals: 0, assists: 0 },
  { name: "Tiago Santos", number: 9, pos: "DEF", photo: "", prevClub: "Mirandela", games: 7, goals: 0, assists: 0 },
  { name: "Rodrigo Rodeia", number: 15, pos: "DEF", photo: "", prevClub: "At. Reguengos", games: 5, goals: 0, assists: 0 },
  { name: "Pedro Souza", number: 16, pos: "DEF", photo: "", prevClub: "O Elvas", games: 4, goals: 0, assists: 0 },
  { name: "Tomás Simão", number: 19, pos: "DEF", photo: "", prevClub: "SC Lusitânia", games: 3, goals: 0, assists: 0 },
  { name: "Diogo Borralho", number: 22, pos: "DEF", photo: "", prevClub: "Torreense", games: 1, goals: 0, assists: 0 },

  // MÉDIOS
  { name: "Nelson Machado", number: 3, pos: "MED", photo: "", prevClub: "-", games: 8, goals: 2, assists: 0 },
  { name: "João Pereira", number: 7, pos: "MED", photo: "", prevClub: "Marinhense", games: 8, goals: 0, assists: 0 },
  { name: "Hugo Soares", number: 13, pos: "MED", photo: "", prevClub: "Comércio e Indústria", games: 6, goals: 0, assists: 0 },
  { name: "Valdo Dabó", number: 18, pos: "MED", photo: "", prevClub: "Mirandela", games: 3, goals: 0, assists: 0 },

  // AVANÇADOS
  { name: "Marco Grave", number: 5, pos: "AV", photo: "", prevClub: "SC Coimbrões", games: 8, goals: 3, assists: 0 },
  { name: "Ailson Nogueira", number: 8, pos: "AV", photo: "", prevClub: "União 1919", games: 8, goals: 2, assists: 0 },
  { name: "Angelico Dangervil", number: 10, pos: "AV", photo: "", prevClub: "-", games: 7, goals: 2, assists: 0 },
  { name: "Kayã Caldeira", number: 11, pos: "AV", photo: "", prevClub: "Juventude Évora", games: 7, goals: 2, assists: 0 },
  { name: "Patchú", number: 12, pos: "AV", photo: "", prevClub: "Bragança", games: 7, goals: 1, assists: 0 },
  { name: "Dani Matos", number: 20, pos: "AV", photo: "", prevClub: "Esmoriz", games: 2, goals: 0, assists: 0 },
  { name: "Martim Alentado", number: 21, pos: "AV", photo: "", prevClub: "AD Sanjoanense", games: 1, goals: 0, assists: 0 }
];

// ============================================================
//  CLUBE / JOGOS / CLASSIFICAÇÃO / NOTÍCIAS — também editáveis
// ============================================================
window.CLUB = {
  name: "GD Portel",
  fullName: "Grupo Desportivo de Portel",
  competition: "Campeonato de Portugal",
  season: "2026/27",
  stadium: "Estádio Sanches de Miranda", 
  location: "Portel, Évora",
  founded: "1972", 
  contacts: { email: "", facebook: "", instagram: "" }
};

window.NEXT_MATCH = {
  home: "GD Portel",
  away: "Adversário",
  date: "2026-10-18T15:00:00",
  venue: "Estádio Sanches de Miranda",
  competition: "Campeonato de Portugal"
};

window.RESULTS = [
  { home: "GD Portel", away: "Adversário A", hs: 0, as: 0, date: "2026-10-11" },
  { home: "Adversário B", away: "GD Portel", hs: 0, as: 0, date: "2026-10-04" },
  { home: "GD Portel", away: "Adversário C", hs: 0, as: 0, date: "2026-09-27" }
];

window.STANDINGS = [
  { pos: 1, team: "Equipa A", p: 0, w: 0, d: 0, l: 0, pts: 0 },
  { pos: 2, team: "GD Portel", p: 0, w: 0, d: 0, l: 0, pts: 0, me: true },
  { pos: 3, team: "Equipa C", p: 0, w: 0, d: 0, l: 0, pts: 0 }
];

window.NEWS = [
  { tag: "Jogo", title: "Título da notícia de exemplo", date: "2026-10-11", text: "Texto curto da notícia. Substitui por conteúdo real do clube." },
  { tag: "Clube", title: "Segunda notícia de exemplo", date: "2026-10-05", text: "Outro texto curto para mostrar o layout dos cartões." },
  { tag: "Plantel", title: "Terceira notícia de exemplo", date: "2026-09-28", text: "Mais um texto de exemplo, pronto a ser substituído." }
];