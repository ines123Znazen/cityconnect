document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('users')) {
    const users = [
      {
        username: 'admin',
        password: 'admin',
        email: 'admin@muni.local',
        isAdmin: true,
        stats: {
          issuesReported: 10,
          commentsMade: 25,
          groupsJoined: 1,
          upvotesGiven: 30
        },
        achievements: ['👑 Admin Access'],
        subscriptions: [],
        groups: [
          { name: "Éco-Citoyens", link: "group-eco.html" }
        ],
        notifications: {
          email: true
        }
      },
      {
        username: 'johndoe',
        password: 'user123',
        email: 'john@example.com',
        isAdmin: false,
        stats: {
          issuesReported: 4,
          commentsMade: 12,
          groupsJoined: 2,
          upvotesGiven: 18
        },
        achievements: [
          "🏅 First Report Submitted",
          "💬 Active Contributor (10+ comments)",
          "🌟 Community Builder (joined 2+ groups)"
        ],
        subscriptions: [
          { title: "Broken Streetlight on Main St", link: "issue123.html" },
          { title: "Overflowing Trash Bins Near Park", link: "issue456.html" }
        ],
        groups: [
          { name: "Clean Streets Initiative", link: "group-cleanstreets.html" },
          { name: "Park Renovation Volunteers", link: "group-renovation.html" }
        ],
        notifications: {
          email: true
        }
      }
    ];
    localStorage.setItem('users', JSON.stringify(users));
    console.log('LocalStorage populated with full-featured users.');
  }

  if (!localStorage.getItem('currentUser')) {
    localStorage.setItem('currentUser', JSON.stringify(null));
  }

  if (!localStorage.getItem('announcements')) {
    localStorage.setItem('announcements', JSON.stringify([
      { title: "Nouvelle poubelle intelligente installée", content: "Une nouvelle poubelle connectée a été installée au parc central.", date: "2025-04-01" },
      { title: "Forum public samedi", content: "Venez rencontrer l'administration ce samedi pour discuter des projets.", date: "2025-04-15" }
    ]));
  }

  if (!localStorage.getItem('issues')) {
    localStorage.setItem('issues', JSON.stringify([
      { title: "Nid de poule rue de la Paix", link: "issue001.html", category: "Voirie" },
      { title: "Lampadaire cassé", link: "issue002.html", category: "Éclairage" },
      { title: "Graffiti sur le mur", link: "issue003.html", category: "Propreté" }
    ]));
  }

  if (!localStorage.getItem('groups')) {
    localStorage.setItem('groups', JSON.stringify([
      { name: "Éco-Citoyens", link: "group-eco.html", description: "Sensibilisation écologique locale" },
      { name: "Sécurité Quartier Nord", link: "group-secu.html", description: "Veille citoyenne dans le quartier nord" }
    ]));
  }
});
