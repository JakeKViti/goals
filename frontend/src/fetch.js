document.addEventListener("DOMContentLoaded", () => {
    const BASE_URL = "http://localhost:3000/api/v1"
    const USERS_URL = `${BASE_URL}/users`
    const GOALS_URL = `${BASE_URL}/goals`
    
    fetch(USERS_URL)
    .then(resp => resp.json())
    .then(users => (console.log(users)));

    fetch(GOALS_URL)
    .then(resp => resp.json())
    .then(goals => (console.log(goals)));
    })
    