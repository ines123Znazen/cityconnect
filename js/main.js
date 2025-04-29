// main.js

(function initializeLocalStorage() {
  const setIfNotExists = (key, value) => {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  // Set initial data (like users, issues, etc.)
  const initialData = () => {
    const users = [
      { username: 'admin', password: 'admin', isAdmin: true },
      { username: 'user', password: 'user' }
    ];

    const issues = [
      { id: 1, title: "Trottoir cassé", description: "Le trottoir près de l'école est cassé.", votes: 12, status: "Ouvert" },
      { id: 2, title: "Éclairage défectueux", description: "Le lampadaire de la rue principale ne fonctionne plus.", votes: 5, status: "En cours" }
    ];

    const discussions = [
      { id: 1, topic: "Fête de quartier", messages: [{ from: "user", content: "Des idées pour la fête de cette année ?" }] }
    ];

    const news = [
      { id: 1, title: "Travaux sur la route nationale", content: "Des travaux auront lieu du 5 au 10 mai. Circulation alternée prévue.", date: "2025-04-25" }
    ];

    setIfNotExists('users', users);
    setIfNotExists('issues', issues);
    setIfNotExists('discussions', discussions);
    setIfNotExists('news', news);
    setIfNotExists('currentUser', null);
  };

  initialData();
})();

// Render navbar based on user login status
function renderNavbar() {
  const navbar = document.getElementById('navbar');
  const authContainer = document.getElementById('auth');
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // Clear existing auth links
  authContainer.innerHTML = '';

  if (currentUser) {
    // User is logged in
    const span = document.createElement('span');
    span.textContent = `${currentUser.username} (${currentUser.isAdmin ? 'admin' : 'utilisateur'})`;
    
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Déconnexion';
    logoutButton.onclick = logout;

    authContainer.appendChild(span);
    authContainer.appendChild(logoutButton);
  } else {
    // No user logged in
    const loginLink = document.createElement('a');
    loginLink.href = 'signinorup.html'; // Link to login/signup page
    loginLink.textContent = 'Connexion / Inscription';
    
    authContainer.appendChild(loginLink);
  }
}

// Logout function
function logout() {
  localStorage.removeItem('currentUser');
  renderNavbar();  // Re-render navbar
  location.reload();  // Refresh the page
}

// Render issues, discussions, and news sections
function renderSections() {
  renderIssues();
  renderDiscussions();
  renderNews();
}

function renderIssues() {
  const issues = JSON.parse(localStorage.getItem('issues')) || [];
  const container = document.getElementById('issues');
  container.innerHTML = '';
  issues.slice(0, 3).forEach(issue => {
    container.innerHTML += `
      <div class="card">
        <strong>${issue.title}</strong>
        <p>${issue.description}</p>
        <p>👍 ${issue.votes} vote(s)</p>
      </div>
    `;
  });
}

function renderDiscussions() {
  const discussions = JSON.parse(localStorage.getItem('discussions')) || [];
  const container = document.getElementById('discussions');
  container.innerHTML = '';
  discussions.slice(0, 3).forEach(discussion => {
    container.innerHTML += `
      <div class="card">
        <strong>${discussion.topic}</strong>
        <p>${discussion.messages.length} message(s)</p>
      </div>
    `;
  });
}

function renderNews() {
  const news = JSON.parse(localStorage.getItem('news')) || [];
  const container = document.getElementById('news');
  container.innerHTML = '';
  news.slice(0, 3).forEach(article => {
    container.innerHTML += `
      <div class="card">
        <strong>${article.title}</strong>
        <p>${article.content}</p>
      </div>
    `;
  });
}

// Initialize the page content
renderNavbar();
renderSections();
