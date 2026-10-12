window.PLAYERS = [
  // GUARDA-REDES
  { name: "Diogo Águas", number: 14, pos: "GR", photo: "assets/players/aguas.jpg", prevClub: "SC Lusitânia", prevLogo: "assets/teams/lusitania.png", games: 5, goals: 0 },
  { name: "Ethan Crump", number: 17, pos: "GR", photo: "assets/players/ethan.jpg", prevClub: "SC Pombal", prevLogo: "assets/teams/pombal.png", games: 3, goals: 0 },

  // DEFESAS
  { name: "Igor Costa", number: 1, pos: "DEF", photo: "assets/players/igor.jpg", prevClub: "Serpa", prevLogo: "assets/teams/serpa.png", games: 8, goals: 1 },
  { name: "Diogo Braizinha", number: 2, pos: "DEF", role: "Capitão", photo: "assets/players/braizinha.jpg", prevClub: "GD Portel", prevLogo: "assets/teams/gdportel.png", games: 8, goals: 2 },
  { name: "Ivanilson Semedo", number: 4, pos: "DEF", photo: "assets/players/ivanilson.jpg", prevClub: "Monte Trigo", prevLogo: "assets/teams/montetrigo.png", games: 8, goals: 0 },
  { name: "Clésio Gomes", number: 6, pos: "DEF", photo: "assets/players/clesio.jpg", prevClub: "GD Portel", prevLogo: "assets/teams/gdportel.png", games: 8, goals: 0 },
  { name: "Tiago Santos", number: 9, pos: "DEF", photo: "assets/players/tiago.jpg", prevClub: "Mirandela", prevLogo: "assets/teams/mirandela.png", games: 7, goals: 0 },
  { name: "Rodrigo Rodeia", number: 15, pos: "DEF", photo: "assets/players/rodeia.jpg", prevClub: "At. Reguengos", prevLogo: "assets/teams/reguengos.png", games: 5, goals: 0 },
  { name: "Pedro Souza", number: 16, pos: "DEF", photo: "assets/players/pedro.jpg", prevClub: "O Elvas", prevLogo: "assets/teams/elvas.png", games: 4, goals: 0 },
  { name: "Tomás Simão", number: 19, pos: "DEF", photo: "assets/players/tomas.jpg", prevClub: "SC Lusitânia", prevLogo: "assets/teams/lusitania.png", games: 3, goals: 0 },
  { name: "Diogo Borralho", number: 22, pos: "DEF", photo: "assets/players/borralho.jpg", prevClub: "Torreense", prevLogo: "assets/teams/torreense.png", games: 1, goals: 0 },

  // MÉDIOS
  { name: "Nelson Machado", number: 3, pos: "MED", role: "Sub-capitão", photo: "assets/players/nelson.jpg", prevClub: "GD Portel", prevLogo: "assets/teams/gdportel.png", games: 8, goals: 2 },
  { name: "João Pereira", number: 7, pos: "MED", photo: "assets/players/pereira.jpg", prevClub: "Marinhense", prevLogo: "assets/teams/marinhense.png", games: 8, goals: 0 },
  { name: "Hugo Soares", number: 13, pos: "MED", photo: "assets/players/hugo.jpg", prevClub: "Comércio Indústria", prevLogo: "assets/teams/comercio.png", games: 6, goals: 0 },
  { name: "Valdo Dabó", number: 18, pos: "MED", photo: "assets/players/dabo.jpg", prevClub: "Mirandela", prevLogo: "assets/teams/mirandela.png", games: 3, goals: 0 },

  // AVANÇADOS
  { name: "Marco Grave", number: 5, pos: "AV", photo: "assets/players/marco.jpg", prevClub: "SC Coimbrões", prevLogo: "assets/teams/coimbroes.png", games: 8, goals: 3 },
  { name: "Ailson Nogueira", number: 8, pos: "AV", photo: "assets/players/ailson.jpg", prevClub: "União 1919", prevLogo: "assets/teams/uniao1919.png", games: 8, goals: 2 },
  { name: "Angelico Dangervil", number: 10, pos: "AV", photo: "assets/players/angelico.jpg", prevClub: "GD Portel", prevLogo: "assets/teams/gdportel.png", games: 7, goals: 2 },
  { name: "Kayã Caldeira", number: 11, pos: "AV", photo: "assets/players/kaya.jpg", prevClub: "Juventude SC", prevLogo: "assets/teams/juventudesc.png", games: 7, goals: 2 },
  { name: "Patchú", number: 12, pos: "AV", photo: "assets/players/patchu.png", prevClub: "Bragança", prevLogo: "assets/teams/braganca.png", games: 7, goals: 1 },
  { name: "Dani Matos", number: 20, pos: "AV", photo: "assets/players/dani.jpg", prevClub: "Esmoriz", prevLogo: "assets/teams/esmoriz.png", games: 2, goals: 0 },
  { name: "Martim Alentado", number: 21, pos: "AV", photo: "assets/players/martim.jpg", prevClub: "AD Sanjoanense", prevLogo: "assets/teams/sanjoanense.png", games: 1, goals: 0 }
];

window.FIXTURES = [
  // Supertaça e Taça
  { comp: "Supertaça", home: "GD Portel", away: "Messejanense", date: "2026-08-30T17:00:00", venue: "Estádio Sanches de Miranda", homeLogo: "assets/teams/gdportel.png", awayLogo: "assets/teams/messejanense.png" },
  { comp: "Taça de Portugal", home: "Lusitano Évora", away: "GD Portel", date: "2026-09-08T15:00:00", venue: "Campo Estrela", homeLogo: "assets/teams/lusitano.png", awayLogo: "assets/teams/gdportel.png" },
  
  // Campeonato
  { comp: "Campeonato", home: "Olhanense", away: "GD Portel", date: "2026-09-20T15:00:00", venue: "Estádio José Arcanjo", homeLogo: "assets/teams/olhanense.png", awayLogo: "assets/teams/gdportel.png" },
  { comp: "Campeonato", home: "GD Portel", away: "Aljustrelense", date: "2026-09-27T15:00:00", venue: "Estádio Sanches de Miranda", homeLogo: "assets/teams/gdportel.png", awayLogo: "assets/teams/aljustrelense.png" },
  { comp: "Campeonato", home: "Imortal DC", away: "GD Portel", date: "2026-10-11T15:00:00", venue: "Estádio Municipal de Albufeira", homeLogo: "assets/teams/imortal.png", awayLogo: "assets/teams/gdportel.png" },
  { comp: "Campeonato", home: "JD Lajense", away: "GD Portel", date: "2026-10-18T12:00:00", venue: "Estádio Municipal das Lajes", homeLogo: "assets/teams/jdlajense.png", awayLogo: "assets/teams/gdportel.png" }, // Jogo de hoje ajustado
  { comp: "Campeonato", home: "GD Portel", away: "Santa Clara B", date: "2026-10-25T15:00:00", venue: "Estádio Sanches de Miranda", homeLogo: "assets/teams/gdportel.png", awayLogo: "assets/teams/santaclara.png" },
  { comp: "Campeonato", home: "Serpa", away: "GD Portel", date: "2026-11-01T15:00:00", venue: "Complexo Desportivo de Serpa", homeLogo: "assets/teams/serpa.png", awayLogo: "assets/teams/gdportel.png" },
  { comp: "Campeonato", home: "GD Portel", away: "Amora FC", date: "2026-11-08T15:00:00", venue: "Estádio Sanches de Miranda", homeLogo: "assets/teams/gdportel.png", awayLogo: "assets/teams/amora.png" },
  { comp: "Campeonato", home: "GD Portel", away: "Vitória FC", date: "2026-12-06T15:00:00", venue: "Estádio Sanches de Miranda", homeLogo: "assets/teams/gdportel.png", awayLogo: "assets/teams/vitoria.png" },
  { comp: "Campeonato", home: "Real SC", away: "GD Portel", date: "2026-12-13T15:00:00", venue: "Complexo Desportivo do Real SC", homeLogo: "assets/teams/realsc.png", awayLogo: "assets/teams/gdportel.png" },
  { comp: "Campeonato", home: "GD Portel", away: "1º Dezembro", date: "2026-12-20T15:00:00", venue: "Estádio Sanches de Miranda", homeLogo: "assets/teams/gdportel.png", awayLogo: "assets/teams/1dezembro.png" },
  { comp: "Campeonato", home: "GD Lagoa", away: "GD Portel", date: "2027-01-10T15:00:00", venue: "Estádio Capitão Josino da Costa", homeLogo: "assets/teams/gdlagoa.png", awayLogo: "assets/teams/gdportel.png" },
  { comp: "Campeonato", home: "Sintrense", away: "GD Portel", date: "2027-01-17T15:00:00", venue: "Estádio do Sport União Sintrense", homeLogo: "assets/teams/sintrense.png", awayLogo: "assets/teams/gdportel.png" },
  { comp: "Campeonato", home: "GD Portel", away: "Alcochetense", date: "2027-01-24T15:00:00", venue: "Estádio Sanches de Miranda", homeLogo: "assets/teams/gdportel.png", awayLogo: "assets/teams/alcochetense.png" },
  { comp: "Campeonato", home: "GD Portel", away: "Juventude SC", date: "2027-01-30T15:00:00", venue: "Estádio Sanches de Miranda", homeLogo: "assets/teams/gdportel.png", awayLogo: "assets/teams/juventudesc.png" }
];

window.RESULTS = [
  { comp: "Camp", home: "Imortal DC", away: "GD Portel", hs: 3, as: 0, date: "2026-10-11" },
  { comp: "Camp", home: "GD Portel", away: "Aljustrelense", hs: 1, as: 1, date: "2026-09-27" },
  { comp: "Camp", home: "Olhanense", away: "GD Portel", hs: 1, as: 0, date: "2026-09-20" },
  { comp: "Taça", home: "Lusitano Évora", away: "GD Portel", hs: 2, as: 1, date: "2026-09-08" }
];

window.STANDINGS = [
  { pos: 1, team: "Sintrense", p: 5, w: 4, d: 1, l: 0, pts: 13 },
  { pos: 11, team: "GD Portel", p: 5, w: 0, d: 3, l: 2, pts: 3, me: true },
  { pos: 14, team: "JD Lajense", p: 5, w: 0, d: 1, l: 4, pts: 1 }
];

window.NEWS = [
  { tag: "Jogo", title: "Foco total na deslocação aos Açores", date: "2026-10-15", text: "Equipa prepara jogo frente ao JD Lajense." },
  { tag: "Clube", title: "Mais que um clube, uma paixão", date: "2026-10-01", text: "Adeptos marcam presença em peso nos jogos." }
];