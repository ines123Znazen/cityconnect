document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if the passwords match
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas. Essayez à nouveau.');
      return;
    }

    // Retrieve the list of users from localStorage (or create an empty array if none exist)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username is already taken
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      alert('Ce nom d\'utilisateur est déjà pris. Choisissez-en un autre.');
      return;
    }

    // Create a new user object and add it to the list
    const newUser = {
      username: username,
      password: password,
      isAdmin: false, // Defaulting to non-admin user
    };

    // Add the new user to the localStorage and update the list
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message and redirect to login page
    alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
    window.location.href = 'index.html'; // Redirect to login page
  });
});
