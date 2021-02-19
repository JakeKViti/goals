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

    findOrCreateUser(e){
        fetch(this.userURL, {
            method: 'POST',
            headers:  {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(e.target.children[1].value)
          })
          .then(response => {
            let json = response.json()
            console.log(json)
          })
    }

}