document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('issues-container');
  const issues = JSON.parse(localStorage.getItem('issues')) || [];

  if (issues.length === 0) {
    container.innerHTML = "<p>Aucun problème signalé pour l'instant.</p>";
    return;
  }

  container.innerHTML = issues.map(issue => `
    <div class="issue-card">
      <h3>${issue.title}</h3>
      <p><strong>Catégorie :</strong> ${issue.category}</p>
      <a href="${issue.link}" class="btn">Voir le détail</a>
    </div>
  `).join('');
});
