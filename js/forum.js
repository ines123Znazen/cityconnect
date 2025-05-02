document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('new-post-form');
  const postsContainer = document.getElementById('forum-posts');

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // Load existing posts
  const posts = JSON.parse(localStorage.getItem('forumPosts')) || [];

  function displayPosts() {
    postsContainer.innerHTML = '';

    if (posts.length === 0) {
      postsContainer.innerHTML = '<p>Aucune discussion pour le moment.</p>';
      return;
    }

    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <p class="author">Posté par ${post.author} le ${new Date(post.timestamp).toLocaleString('fr-FR')}</p>
      `;

      postsContainer.appendChild(postDiv);
    });
  }

  displayPosts();

  // Handle new post submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert('Vous devez être connecté pour publier une discussion.');
      return;
    }

    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('post-content').value.trim();

    if (!title || !content) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const newPost = {
      title,
      content,
      author: currentUser.username,
      timestamp: Date.now(),
    };

    posts.unshift(newPost);
    localStorage.setItem('forumPosts', JSON.stringify(posts));
    displayPosts();

    form.reset();
  });
});
