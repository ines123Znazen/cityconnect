document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve the list of users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the entered username
    const user = users.find(user => user.username === username);

    // Check if the user exists and if the password matches
    if (!user) {
      alert('Nom d\'utilisateur non trouvé.');
      return;
    }

    if (user.password !== password) {
      alert('Mot de passe incorrect.');
      return;
    }

    // Store the logged-in user in localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Show success message and redirect to the homepage or profile
    alert('Connexion réussie ! Bienvenue ' + username);
    window.location.href = 'index.html'; // Redirect to homepage (you can change to profile if desired)
  });
});
