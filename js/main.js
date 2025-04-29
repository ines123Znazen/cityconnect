(function initializeLocalStorage() {
  const setIfNotExists = (key, value) => {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  // Users
  setIfNotExists('users', [
    { username: 'admin', password: 'admin', isAdmin: true },
    { username: 'user', password: 'user' }
  ]);

  // Current session
  setIfNotExists('currentUser', null);

  // Issues
  setIfNotExists('issues', [
    {
      id: 1,
      title: "Trottoir cassé",
      description: "Le trottoir près de l'école est cassé et dangereux.",
      category: "Infrastructures",
      votes: 12,
      status: "Ouvert",
      createdBy: "user",
      comments: [],
      attachments: []
    },
    {
      id: 2,
      title: "Éclairage défectueux",
      description: "Le lampadaire de la rue principale ne fonctionne plus.",
      category: "Éclairage public",
      votes: 5,
      status: "En cours",
      createdBy: "user",
      comments: [],
      attachments: []
    }
  ]);

  // Discussions
  setIfNotExists('discussions', [
    {
      id: 1,
      topic: "Fête de quartier",
      messages: [
        { from: "user", content: "Des idées pour la fête de cette année ?" },
        { from: "admin", content: "On pourrait organiser un concours de cuisine." }
      ]
    }
  ]);

  // News / Announcements
  setIfNotExists('news', [
    {
      id: 1,
      title: "Travaux sur la route nationale",
      content: "Des travaux auront lieu du 5 au 10 mai. Circulation alternée prévue.",
      date: "2025-04-25"
    }
  ]);

  // Notifications
  setIfNotExists('notifications', []);

  // User profiles
  setIfNotExists('profiles', {
    user: {
      contributions: 2,
      reports: [1, 2],
      discussions: [1]
    },
    admin: {
      contributions: 1,
      reports: [],
      discussions: [1]
    }
  });

  // Community groups
  setIfNotExists('groups', [
    {
      id: 1,
      name: "EcoCitoyens",
      description: "Un groupe pour les initiatives écologiques locales.",
      createdBy: "user",
      members: ["user"]
    }
  ]);

  // Podcast summaries
  setIfNotExists('podcast', [
    {
      id: 1,
      title: "Résumé hebdomadaire du 20 avril",
      topics: ["Éclairage", "Travaux routiers"],
      audioUrl: "#"
    }
  ]);

  // Analytics (optional placeholder)
  setIfNotExists('analytics', {
    visits: 0,
    issuesReported: 2,
    messagesPosted: 2
  });
})();
