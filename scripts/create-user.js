localStorage.setItem('currentUser', JSON.stringify({
  username: "johndoe",
  email: "john@example.com",
  stats: {
    issuesReported: 4,
    commentsMade: 12,
    groupsJoined: 2,
    upvotesGiven: 18
  },
  achievements: [
    "🏅 First Report Submitted",
    "💬 Active Contributor (10+ comments)",
    "🌟 Community Builder (joined 2+ groups)"
  ],
  subscriptions: [
    { title: "Broken Streetlight on Main St", link: "issue123.html" },
    { title: "Overflowing Trash Bins Near Park", link: "issue456.html" }
  ],
  groups: [
    { name: "Clean Streets Initiative", link: "group-cleanstreets.html" },
    { name: "Park Renovation Volunteers", link: "group-renovation.html" }
  ],
  notifications: {
    email: true
  }
}));
