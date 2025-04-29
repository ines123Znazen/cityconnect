document.addEventListener('DOMContentLoaded', function () {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const profileBtn = document.getElementById('profile-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const signupBtn = document.getElementById('signup-btn');
  const loginBtn = document.getElementById('login-btn');

  if (currentUser && currentUser.username) {
    // User is logged in, show profile and logout buttons
    profileBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'inline-block';
    signupBtn.style.display = 'none';
    loginBtn.style.display = 'none';

    // Logout functionality
    logoutBtn.addEventListener('click', function () {
      localStorage.setItem('currentUser', JSON.stringify(null));
      alert('Vous êtes maintenant déconnecté.');
      window.location.reload(); // Reload to update UI
    });
  } else {
    // User is not logged in, show signup and login buttons
    profileBtn.style.display = 'none';
    logoutBtn.style.display = 'none';
    signupBtn.style.display = 'inline-block';
    loginBtn.style.display = 'inline-block';
  }
});
