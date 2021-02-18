class FetchCalls {
    constructor () {
    this.baseURL = "http://localhost:3000/api/v1"
    this.userURL = `${this.baseURL}/users`
    this.goalURL = `${this.baseURL}/goals`
    }

    consoleLogUsers(){
    fetch(this.userURL)
    .then(resp => resp.json())
    .then(users => (console.log(users)));
    }

    consoleLogGoals(){
    fetch(this.goalURL)
    .then(resp => resp.json())
    .then(goals => (console.log(goals)));
    }

    findOrCreateUser(){
        
    }

}