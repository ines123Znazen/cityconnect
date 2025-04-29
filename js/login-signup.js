document.addEventListener('DOMContentLoaded', function () {
  const showLogin = document.getElementById('show-login');
  const showSignup = document.getElementById('show-signup');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginFormElement = document.getElementById('login-form-element');
  const signupFormElement = document.getElementById('signup-form-element');

  // Event listeners for form switching
  showSignup.addEventListener('click', function () {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  });

  showLogin.addEventListener('click', function () {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
  });

  // Handle form submissions
  loginFormElement.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check if the user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Connexion réussie!');
      window.location.href = 'index.html'; // Redirect to homepage
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
  });

  signupFormElement.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Check if the username already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
      alert('Ce nom d\'utilisateur existe déjà.');
    } else {
      // Add the new user
      const newUser = { username, password, isAdmin: false };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Inscription réussie! Vous pouvez maintenant vous connecter.');
      window.location.href = 'signinorup.html'; // Reload the page after signup
    }
  });
});
