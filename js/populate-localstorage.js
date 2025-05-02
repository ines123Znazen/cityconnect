document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('users')) {
    const users = [
      {
        username: 'admin',
        password: 'admin',
        email: 'admin@cityconnect.local',
        isAdmin: true,
        stats: {
          issuesReported: 10,
          commentsMade: 25,
          groupsJoined: 1,
          upvotesGiven: 30
        },
        achievements: ['👑 Accès Admin'],
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
          "🏅 Premier signalement",
          "💬 Contributeur actif (10+ commentaires)",
          "🌟 Bâtisseur communautaire (2 groupes rejoints)"
        ],
        subscriptions: [
          { title: "Lampadaire cassé", link: "issue002.html" },
          { title: "Déchets débordants près du parc", link: "issue004.html" }
        ],
        groups: [
          { name: "Initiative Rues Propres", link: "group-cleanstreets.html" },
          { name: "Bénévoles rénovation du parc", link: "group-renovation.html" }
        ],
        notifications: {
          email: true
        }
      }
    ];
    localStorage.setItem('users', JSON.stringify(users));
    console.log('✅ Utilisateurs ajoutés au localStorage.');
  }

  if (!localStorage.getItem('currentUser')) {
    localStorage.setItem('currentUser', JSON.stringify(null));
  }

  if (!localStorage.getItem('announcements')) {
    localStorage.setItem('announcements', JSON.stringify([
      {
        title: "Nouvelle poubelle intelligente installée",
        content: "Une nouvelle poubelle connectée a été installée au parc central.",
        date: "2025-04-01"
      },
      {
        title: "Forum public samedi",
        content: "Venez rencontrer l'administration ce samedi pour discuter des projets.",
        date: "2025-04-15"
      }
    ]));
  }

  if (!localStorage.getItem('issues')) {
    localStorage.setItem('issues', JSON.stringify([
      { title: "Nid de poule rue de la Paix", link: "issue001.html", category: "Voirie" },
      { title: "Lampadaire cassé", link: "issue002.html", category: "Éclairage" },
      { title: "Graffiti sur le mur", link: "issue003.html", category: "Propreté" },
      { title: "Déchets débordants près du parc", link: "issue004.html", category: "Propreté" }
    ]));
  }

  if (!localStorage.getItem('groups')) {
    localStorage.setItem('groups', JSON.stringify([
      {
        name: "Éco-Citoyens",
        link: "group-eco.html",
        description: "Sensibilisation écologique locale"
      },
      {
        name: "Sécurité Quartier Nord",
        link: "group-secu.html",
        description: "Veille citoyenne dans le quartier nord"
      },
      {
        name: "Initiative Rues Propres",
        link: "group-cleanstreets.html",
        description: "Mobilisation pour garder nos rues propres"
      }
    ]));
  }

  if (!localStorage.getItem('forumPosts')) {
    localStorage.setItem('forumPosts', JSON.stringify([
      {
        title: "Problème de stationnement dans le centre-ville",
        content: "Il devient difficile de trouver une place de parking, surtout les week-ends.",
        author: "johndoe",
        timestamp: Date.now() - 86400000
      },
      {
        title: "Idées pour les animations estivales ?",
        content: "Quels événements aimeriez-vous voir cet été ?",
        author: "admin",
        timestamp: Date.now() - 43200000
      }
    ]));
  }

  console.log('✅ LocalStorage initialisé avec toutes les données nécessaires.');
});
