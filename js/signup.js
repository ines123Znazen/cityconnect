document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas. Essayez à nouveau.');
      return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.username === username)) {
      alert('Ce nom d\'utilisateur est déjà pris. Choisissez-en un autre.');
      return;
    }

    const newUser = {
      username: username,
      password: password,
      email: email,
      isAdmin: false,
      stats: {
        issuesReported: 0,
        commentsMade: 0,
        groupsJoined: 0,
        upvotesGiven: 0
      },
      achievements: [],
      subscriptions: [],
      groups: [],
      notifications: {
        email: true
      }
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    alert('Bienvenue, ' + username + ' ! Vous êtes maintenant connecté.');
    window.location.href = 'index.html';
  });
});
