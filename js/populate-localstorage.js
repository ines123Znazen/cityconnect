// Function to populate localStorage with sample users if not already done
document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('users')) {
    const users = [
      { username: 'admin', password: 'admin', isAdmin: true },
      { username: 'user', password: 'user', isAdmin: false }
    ];
    localStorage.setItem('users', JSON.stringify(users));
    console.log('LocalStorage populated with sample users.');
  }

  // Initialize currentUser if it's not set yet
  if (!localStorage.getItem('currentUser')) {
    localStorage.setItem('currentUser', JSON.stringify(null));
  }
});
