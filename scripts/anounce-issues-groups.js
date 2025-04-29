// Announcements
localStorage.setItem('announcements', JSON.stringify([
  { title: "Nouvelle poubelle intelligente installée", content: "Une nouvelle poubelle connectée a été installée au parc central.", date: "2025-04-01" },
  { title: "Forum public samedi", content: "Venez rencontrer l'administration ce samedi pour discuter des projets.", date: "2025-04-15" }
]));

// Issues
localStorage.setItem('issues', JSON.stringify([
  { title: "Nid de poule rue de la Paix", link: "issue001.html", category: "Voirie" },
  { title: "Lampadaire cassé", link: "issue002.html", category: "Éclairage" },
  { title: "Graffiti sur le mur", link: "issue003.html", category: "Propreté" }
]));

// Groups
localStorage.setItem('groups', JSON.stringify([
  { name: "Éco-Citoyens", link: "group-eco.html", description: "Sensibilisation écologique locale" },
  { name: "Sécurité Quartier Nord", link: "group-secu.html", description: "Veille citoyenne dans le quartier nord" }
]));
